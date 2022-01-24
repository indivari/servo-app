CREATE DATABASE servo_app_db;
-- Connect to db 
-- Table Definition
CREATE TABLE public.stations (
    id serial primary key,
    feature_type text,
    description text,
    class text,
    fid int,
    name text,
    operational_status text,
    owner text,
    industry_id text,
    address text,
    suburb text,
    state text,
    spatial_confidence int,
    revised int,
    comment text,
    latitude float,
    longitude float
);
