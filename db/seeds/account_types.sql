CREATE TABLE account_types(
    account_type_id SERIAL PRIMARY KEY,
    account_type_name VARCHAR(20) NOT NULL
)

INSERT INTO account_types (account_type_name)
VALUES
('Parent')

--1 Admin 
--2 Teacher 
--3 Student
--4 Parent