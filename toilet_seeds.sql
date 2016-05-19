DROP TABLE IF EXISTS toilet;

CREATE TABLE toilets (
    id SERIAL PRIMARY KEY,
    Name VARCHAR,
    Location VARCHAR,
    Open_Year_Round VARCHAR,
    Handicap_Accessible VARCHAR,
    Borough VARCHAR,
    Comments VARCHAR
);

COPY toilets
    (Name,Location,Open_Year_Round,Handicap_Accessible,Borough,Comments)
FROM '/Users/Allison/Dropbox (Personal)/General Assembly/hood_matcher/data_sets/Directory_Of_Toilets_In_Public_Parks.csv'
    DELIMITER ',' CSV;
