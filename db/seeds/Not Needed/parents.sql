--Create parents
create table parents(
parent_id SERIAL PRIMARY KEY,
user_id INTEGER REFERENCES users(user_id),
)