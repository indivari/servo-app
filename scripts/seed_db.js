const fs = require("fs");
const fastcsv = require("fast-csv");

let stream = fs.createReadStream("./data/PetrolStations_v1.csv");
let csvData = [];

let csvStream = fastcsv
  .parse()
  .on("data", function (data) {
    csvData.push(data);
  })
  .on("end", function () {
    // remove the first line: header
    csvData.shift();

    // connect to the PostgreSQL database
    // save csvData
    const Pool = require("pg").Pool;

    // remove the first line: header
    csvData.shift();

    // create a new connection pool to the database
    const pool = new Pool({
      host: "localhost",
      database: "servo_app_db",
    });

    const query =
      'INSERT INTO stations (id ,feature_type ,description ,class ,fid ,name ,operational_status ,owner ,industry_id ,address ,suburb ,state ,spatial_confidence ,revised ,comment ,latitude ,longitude) VALUES ($1, $2, $3, $4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16, $17)';

    pool.connect((err, client, done) => {
      if (err) throw err;
      try {
        csvData.forEach((row) => {
          console.log(`row is `, row);
          client.query(query, row, (err, res) => {
            if (err) {
              console.log(err.stack);
            } else {
              console.log("inserted " + res.rowCount + " row:", row);
            }
          });
        });
      } finally {
        done();
      }
    });
  });

stream.pipe(csvStream);
