data_results.md


For dog names:

*gets the most common name in each neighborhood*
SELECT distinct on (neighborhood) neighborhood, dog_name FROM dogs GROUP BY neighborhood, dog_name ORDER BY neighborhood, COUNT(*) DESC;
====>
  neighborhood     | dog_name
---------------------+----------
 Chelsea             | LOLA
 Chinatown           | NALA
 East Harlem         | ANGEL
 East Village        | LUCY
 Financial District  | CHARLIE
 Gramercy            | LUCY
 Greenwich Village   | CUPID
 Harlem              | PRINCESS
 Inwood              | DAISY
 Lower East Side     | GIZMO
 Midtown East        | LOLA
 Midtown West        | LOLA
 Morningside Heights | LUCY
 Murray Hill         | CHARLIE
 Roosevelt Island    | CHARLIE
 Soho                | LOLA
 Tribeca             | CHARLIE
 Upper East Side     | LUCY
 Upper West Side     | LUCY


*gets the top 10 male dog names overall (neighborhood not null means Manhattan only)
SELECT dog_name FROM dogs WHERE animal_gender = 'M' AND neighborhood IS NOT NULL GROUP BY 1 ORDER BY COUNT(*) DESC LIMIT 10;
 dog_name
----------
 MAX
 CHARLIE
 OLIVER
 BUDDY
 OSCAR
 JACK
 TEDDY
 COOPER
 ROCKY
 LUCKY

female:
 dog_name
----------
 LUCY
 LOLA
 BELLA
 DAISY
 MOLLY
 SOPHIE
 COCO
 MAGGIE
 RUBY
 CHLOE

 *gets the top 10 dog names in each neighborhood
 SELECT dog_name, COUNT(*) FROM dogs WHERE neighborhood = 'Chelsea' GROUP BY dog_name ORDER BY COUNT(*) DESC LIMIT 10;
  dog_name | count
----------+-------
 LOLA     |    18
 CHARLIE  |    13
 OLIVER   |    12
 COCO     |    12
 SOPHIE   |    11
 COOPER   |    11
 LUCY     |    11
 STELLA   |    10
 CHLOE    |    10
 MOLLY    |     9



 Upper East Side
 dog_name | count
----------+-------
 LUCY     |    53
 MAX      |    48
 CHARLIE  |    40
 BELLA    |    37
 LOLA     |    31
 LUCKY    |    27
 OLIVER   |    26
 CHLOE    |    25
 COCO     |    25
 MOLLY    |    25

 *returns all the dogs with a certain name
 SELECT * FROM dogs WHERE dog_name = 'PAISLEY';
 id   | zip_code |  neighborhood   | dog_name | animal_gender
-------+----------+-----------------+----------+---------------
  8706 | 10021    | Upper East Side | PAISLEY  | F
  9052 | 10021    | Upper East Side | PAISLEY  | F
 15671 | 10028    | Upper East Side | PAISLEY  | F
 15697 | 10028    | Upper East Side | PAISLEY  | F
 20916 | 10128    | Upper East Side | PAISLEY  | F

 *returns count by neighborhood for one name
 SELECT neighborhood, count(*) FROM dogs WHERE dog_name = 'LUCY' GROUP BY neighborhood ORDER BY COUNT(*) DESC;
    neighborhood     | count
---------------------+-------
 Upper West Side     |    56
 Upper East Side     |    53
 Soho                |    15
 East Village        |    14
 Midtown West        |    12
 Chelsea             |    11
 Inwood              |     8
 Murray Hill         |     7
 Gramercy            |     7
 Morningside Heights |     5
 Financial District  |     5
 Midtown East        |     4
 Lower East Side     |     3
 Harlem              |     3
 Chinatown           |     2
 East Harlem         |     1
 Tribeca             |     1

 Lola
   neighborhood     | count
---------------------+-------
 Upper West Side     |    33
 Upper East Side     |    31
 Chelsea             |    18
 Soho                |    16
 Midtown West        |    15
 Midtown East        |    12
 Inwood              |    11
 East Village        |    11
 Murray Hill         |     7
 Financial District  |     7
 Gramercy            |     5
 Harlem              |     5
 Tribeca             |     4
 Morningside Heights |     3
 Chinatown           |     3
 Lower East Side     |     2









