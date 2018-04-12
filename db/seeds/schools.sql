
--schools
create table schools(
school_id SERIAL PRIMARY KEY,
name VARCHAR(250) NOT NULL,
district VARCHAR(250) NOT NULL,
street_address VARCHAR(200) NOT NULL,
city VARCHAR(75) NOT NULL,
state VARCHAR(25) NOT NULL,
zip INTEGER NOT NULL,
phone INTEGER NOT NULL,
grades VARCHAR(25) NOT NULL
)