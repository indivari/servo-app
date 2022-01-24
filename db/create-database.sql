CREATE DATABASE servo_app_db;
-- Connect to db 
-- Table Definition
CREATE TABLE "public"."stations" (
    "OBJECTID" int4,
    "FEATURETYPE" text,
    "DESCRIPTION" text,
    "CLASS" text,
    "FID" int4,
    "NAME" text,
    "OPERATIONALSTATUS" text,
    "OWNER" text,
    "INDUSTRYID" text,
    "ADDRESS" text,
    "SUBURB" text,
    "STATE" text,
    "SPATIALCONFIDENCE" int4,
    "REVISED" int4,
    "COMMENT" text,
    "LATITUDE" float8,
    "LONGITUDE" float8
);
