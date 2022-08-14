DROP DATABASE IF EXISTS db_full_stack;

CREATE DATABASE IF NOT EXISTS db_full_stack;

SHOW DATABASES;

DROP TABLE IF EXISTS db_full_stack.user;

CREATE TABLE db_full_stack.user(
  user_id VARCHAR(50) NOT NULL,
  user_name VARCHAR(50) NOT NULL,
  user_email VARCHAR(50) NOT NULL,
  user_password VARCHAR(100) NOT NULL,
  PRIMARY KEY(user_id)
) engine = InnoDB;

INSERT INTO
  db_full_stack.user(user_id, user_name, user_email, user_password)
VALUES
  (
    '20db4ab0-c100-4af8-afcd-3108b398431f',
    'Márcio Daniel',
    'marcio.daniel@betrybe.com',
    'U2FsdGVkX1+hdnlO2gVlCXzhptUKmLSjN017jtM5PLs='
  )