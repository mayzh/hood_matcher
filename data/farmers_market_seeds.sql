DROP TABLE IF EXISTS markets;

CREATE TABLE markets (
    id SERIAL PRIMARY KEY,
    Borough VARCHAR,
    Market_Name VARCHAR,
    Neighborhood VARCHAR,
    Street_Address VARCHAR,
    Days VARCHAR,
    Hours VARCHAR,
    Distribute_Health_Bucks VARCHAR,
    Accepts_Health_Bucks VARCHAR,
    EBT VARCHAR,
    Stellar VARCHAR
);


COPY markets
    (Borough,Market_Name,Neighborhood,Street_Address,Days,Hours,Distribute_Health_Bucks,Accepts_Health_Bucks,EBT,Stellar)
FROM '/Users/Allison/Dropbox (Personal)/General Assembly/hood_matcher/data_sets/2012_NYC_Farmers_Market_List.csv'
    DELIMITER ',' CSV;
