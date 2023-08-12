CREATE TABLE country (
  code VARCHAR (3) PRIMARY KEY,
  name VARCHAR (50) NOT NULL,
	flag VARCHAR (50),
  population INT
);

CREATE TABLE city (
  id serial PRIMARY KEY,
  countrycode VARCHAR (3) NOT NULL,
  name VARCHAR (50) NOT NULL,
  capital BOOLEAN,
  population INT,
  FOREIGN KEY (countrycode)
    REFERENCES country (code)
);

-- TODO: Insert via csv files for easier updates
INSERT INTO country (code,name,flag,population) VALUES
	 ('HUN','Hungary','\uD83C\uDDED\uD83C\uDDFA',9749763),
	 ('HRV','Croatia','\uD83C\uDDED\uD83C\uDDF7',4047200),
	 ('SWE','Sweden','\uD83C\uDDF8\uD83C\uDDEA',10353442),
	 ('ESP','Spain','\uD83C\uDDEA\uD83C\uDDF8',47351567),
	 ('NLD','Netherlands','\uD83C\uDDF3\uD83C\uDDF1',16655799),
	 ('LUX','Luxembourg','\uD83C\uDDF1\uD83C\uDDFA',632275),
	 ('BEL','Belgium','\uD83C\uDDE7\uD83C\uDDEA',11555997),
	 ('DEU','Germany','\uD83C\uDDE9\uD83C\uDDEA',83240525),
	 ('SVN','Slovenia','\uD83C\uDDF8\uD83C\uDDEE',2100126),
	 ('MLT','Malta','\uD83C\uDDF2\uD83C\uDDF9',525285);
INSERT INTO country (code,name,flag,population) VALUES
	 ('FIN','Finland','\uD83C\uDDEB\uD83C\uDDEE',5530719),
	 ('IRL','Ireland','\uD83C\uDDEE\uD83C\uDDEA',4994724),
	 ('DNK','Denmark','\uD83C\uDDE9\uD83C\uDDF0',5831404),
	 ('BGR','Bulgaria','\uD83C\uDDE7\uD83C\uDDEC',6927288),
	 ('POL','Poland','\uD83C\uDDF5\uD83C\uDDF1',37950802),
	 ('LVA','Latvia','\uD83C\uDDF1\uD83C\uDDFB',1901548),
	 ('AUT','Austria','\uD83C\uDDE6\uD83C\uDDF9',8917205),
	 ('EST','Estonia','\uD83C\uDDEA\uD83C\uDDEA',1331057),
	 ('PRT','Portugal','\uD83C\uDDF5\uD83C\uDDF9',10305564),
	 ('CYP','Cyprus','\uD83C\uDDE8\uD83C\uDDFE',1207361);
INSERT INTO country (code,name,flag,population) VALUES
	 ('CZE','Czechia','\uD83C\uDDE8\uD83C\uDDFF',10698896),
	 ('ITA','Italy','\uD83C\uDDEE\uD83C\uDDF9',59554023),
	 ('GRC','Greece','\uD83C\uDDEC\uD83C\uDDF7',10715549),
	 ('LTU','Lithuania','\uD83C\uDDF1\uD83C\uDDF9',2794700),
	 ('SVK','Slovakia','\uD83C\uDDF8\uD83C\uDDF0',5458827),
	 ('ROU','Romania','\uD83C\uDDF7\uD83C\uDDF4',19286123),
	 ('FRA','France','\uD83C\uDDEB\uD83C\uDDF7',67391582),
	 ('FIC','Fiction',NULL,10000000);

INSERT INTO city (countrycode,name,capital,population) VALUES
	 ('HUN','Budapest',true,1706851),
	 ('HRV','Zagreb',true,769944),
	 ('SWE','Stockholm',true,978770),
	 ('SWE','Gothenburg',false,587549),
	 ('SWE','Malmö',false,351749),
	 ('ESP','Madrid',true,3305408),
	 ('ESP','Barcelona',false,1636732),
	 ('ESP','Valencia',false,789744),
	 ('ESP','Seville',false,684234),
	 ('ESP','Zaragoza',false,675301);
INSERT INTO city (countrycode,name,capital,population) VALUES
	 ('ESP','Málaga',false,577405),
	 ('ESP','Murcia',false,460349),
	 ('ESP','Palma de Mallorca',false,419366),
	 ('ESP','Las Palmas',false,378675),
	 ('ESP','Bilbao',false,346405),
	 ('ESP','Alicante',false,337304),
	 ('ESP','Córdoba',false,322071),
	 ('NLD','Amsterdam',true,905234),
	 ('NLD','Rotterdam',false,655418),
	 ('NLD','The Hague',false,553277);
INSERT INTO city (countrycode,name,capital,population) VALUES
	 ('NLD','Utrecht',false,361966),
	 ('LUX','Luxembourg',true,128514),
	 ('BEL','Antwerp',true,528903),
	 ('DEU','Berlin',true,3677472),
	 ('DEU','Hamburg',false,1853935),
	 ('DEU','Munich',false,1487708),
	 ('DEU','Cologne',false,1073096),
	 ('DEU','Frankfurt am Main',false,759224),
	 ('DEU','Stuttgart',false,626275),
	 ('DEU','Düsseldorf',false,619477);
INSERT INTO city (countrycode,name,capital,population) VALUES
	 ('DEU','Leipzig',false,601866),
	 ('DEU','Dortmund',false,586852),
	 ('DEU','Essen',false,579432),
	 ('DEU','Bremen',false,563290),
	 ('DEU','Dresden',false,555351),
	 ('DEU','Hanover',false,535932),
	 ('DEU','Nuremberg',false,510632),
	 ('DEU','Duisburg',false,495152),
	 ('DEU','Bochum',false,363441),
	 ('DEU','Wuppertal',false,354572);
INSERT INTO city (countrycode,name,capital,population) VALUES
	 ('DEU','Bielefeld',false,334002),
	 ('DEU','Bonn',false,331885),
	 ('DEU','Münster',false,317713),
	 ('DEU','Mannheim',false,311831),
	 ('DEU','Karlsruhe',false,306502),
	 ('SVN','Ljubljana',true,279631),
	 ('MLT','Valletta',true,5730),
	 ('FIN','Helsinki',true,658864),
	 ('FIN','Espoo',false,300748),
	 ('FIN','Tampere',false,245027);
INSERT INTO city (countrycode,name,capital,population) VALUES
	 ('FIN','Vantaa',false,241061),
	 ('FIN','Oulu',false,209934),
	 ('FIN','Turku',false,195047),
	 ('IRL','Dublin',true,554554),
	 ('DNK','Copenhagen',true,644431),
	 ('DNK','Aarhus',false,355238),
	 ('BGR','Sofia',true,1307439),
	 ('BGR','Plovdiv',false,343070),
	 ('BGR','Varna',false,341737),
	 ('POL','Warsaw',true,1863056);
INSERT INTO city (countrycode,name,capital,population) VALUES
	 ('POL','Kraków',false,802583),
	 ('POL','Wrocław',false,674312),
	 ('POL','Łódź',false,664860),
	 ('POL','Poznań',false,545073),
	 ('POL','Gdańsk',false,486271),
	 ('POL','Szczecin',false,394482),
	 ('POL','Bydgoszcz',false,334026),
	 ('POL','Lublin',false,332852),
	 ('LVA','Riga',true,611824),
	 ('AUT','Vienna',true,1962779);
INSERT INTO city (countrycode,name,capital,population) VALUES
	 ('EST','Tallinn',true,437811),
	 ('PRT','Lisbon',true,545923),
	 ('PRT','Sintra',false,385654),
	 ('PRT','Vila Nova de Gaia',false,303854),
	 ('CYP','Nicosia',true,116392),
	 ('CYP','Limassol',false,NULL),
	 ('CZE','Prague',true,1275406),
	 ('CZE','Brno',false,379466),
	 ('ITA','Rome',true,2761632),
	 ('ITA','Milan',false,1371498);
INSERT INTO city (countrycode,name,capital,population) VALUES
	 ('ITA','Naples',false,914758),
	 ('ITA','Turin',false,848885),
	 ('ITA','Palermo',false,630828),
	 ('ITA','Genoa',false,560688),
	 ('ITA','Bologna',false,392203),
	 ('ITA','Florence',false,367150),
	 ('ITA','Bari',false,316140),
	 ('GRC','Athens',true,637798),
	 ('GRC','Thessaloniki',false,317778),
	 ('LTU','Vilnius',true,576195);
INSERT INTO city (countrycode,name,capital,population) VALUES
	 ('LTU','Kaunas',false,301300),
	 ('SVK','Bratislava',true,475044),
	 ('ROU','Bucharest',true,2161347),
	 ('ROU','Iași',false,391024),
	 ('ROU','Cluj-Napoca',false,328316),
	 ('ROU','Timișoara',false,318296),
	 ('ROU','Constanța',false,306607),
	 ('ROU','Galați',false,304957),
	 ('FRA','Paris',true,2139907),
	 ('FRA','Marseille',false,870731);
INSERT INTO city (countrycode,name,capital,population) VALUES
	 ('FRA','Lyon',false,522969),
	 ('FRA','Toulouse',false,493465),
	 ('FRA','Nice',false,342669),
	 ('FRA','Nantes',false,318808);
