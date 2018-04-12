-- create administrators
CREATE TABLE administrators(
administrator_id SERIAL PRIMARY KEY,
user_id INT REFERENCES users(user_id)

)