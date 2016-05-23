DROP TABLE IF EXISTS liquor;

CREATE TABLE liquor (
    id SERIAL PRIMARY KEY,
    License_Type_Name VARCHAR,
    County_Name VARCHAR,
    Premisis_Name VARCHAR,
    DBA VARCHAR,
    Address VARCHAR,
    City VARCHAR,
    State VARCHAR,
    Zip VARCHAR,
    Neighborhood VARCHAR
);


COPY liquor
    (License_Type_Name,County_Name,Premisis_Name,DBA,Address,City,State,Zip,Neighborhood)
FROM '/Users/Allison/Dropbox (Personal)/General Assembly/hood_matcher/data_sets/Liquor_Authority_Quarterly_List_of_Active_Licenses.csv'
    DELIMITER ',' CSV;
