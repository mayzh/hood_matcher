DROP TABLE IF EXISTS dogs;

CREATE TABLE dogs (
    id SERIAL PRIMARY KEY,
    Zip_Code INTEGER,
    Dog_Name VARCHAR,
    Animal_Gender VARCHAR
);

COPY dogs
    (Zip_Code,Dog_Name,Animal_Gender)
FROM '/Users/Allison/Dropbox (Personal)/General Assembly/hood_matcher/data_sets/Directory_Of_Toilets_In_Public_Parks.csv'
    DELIMITER ',' CSV;
