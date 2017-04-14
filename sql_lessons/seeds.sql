TRUNCATE TABLE COMPANIES;
TRUNCATE TABLE USERS;
TRUNCATE TABLE APPS;

ALTER SEQUENCE companies_id_seq RESART WITH 1;
ALTER SEQUENCE users_id_seq RESTART WITH 1;
ALTER SEQUENCE apps_id_seq RESART WITH 1;

INSERT INTO companies(name) VALUES ('Google');
INSERT INTO companies(name) VALUES ('Joyent');

INSERT INTO users(name, email, password) VALUES ('Felicia', 'neysa21@gmail.com', 'lol');
INSERT INTO users(name, email, password) VALUES ('Neysa', 'neysa21@gmail.com', 'lollol');

INSERT INTO apps(name, logo, url, description) VALUES ('Materialize', 'link', 'description');
INSERT INTO apps(name, logo, url, description) VALUES ('NodeJS', 'link', 'description');
