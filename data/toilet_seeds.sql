DROP TABLE IF EXISTS toilets;

CREATE TABLE toilets (
    id SERIAL PRIMARY KEY,
    Name VARCHAR,
    Location VARCHAR,
    Neighborhood VARCHAR,
    Borough VARCHAR
);

COPY toilets
    (Name,Location,Neighborhood,Borough)
FROM '/Users/Allison/Dropbox (Personal)/General Assembly/hood_matcher/data_sets/toilet_seeds.csv'
    DELIMITER ',' CSV;
