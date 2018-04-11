SELECT
user_id,
username,
first_name,
last_name,
email,
photo,
phone_number,
account_type_name
FROM users
JOIN account_types ON users.account_type = account_types.account_type_id
WHERE username = $1;