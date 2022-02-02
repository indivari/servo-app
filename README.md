# SERVO APP

This is a single page app which can be used to find petrol stations nearby. 

## Technologies used

- Node
- Javascript
- Express Js
- Ajax
- PostgreSQL
- Google maps API

## Main features

- User can view all petrol stations nearby on the map.
- Displays a randomly chosen petrol station with its location as a spotlight.
- Displays the current location ( address / latitude / longitude ) of the user.
- Displays the location of each selected petrol station.
- Displays the total no: of petrol stations grouped by the owner/brand.

## Instructions

- seeding the database

You can seed the database with the data from the `./data/PetrolStations_v1.csv` using the seeder script.

1. create the database by executing the `create-database.sql` on `psql` first.
2. Seed the database by executing `npm run seed_db`.
