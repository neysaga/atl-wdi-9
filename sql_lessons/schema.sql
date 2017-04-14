CREATE TABLE companies (
  name: VARCHAR,
  id: SERIAL PRIMARY KEY
);
CREATE TABLE users (
  name: VARCHAR,
  email: VARCHAR,
  password: VARCHAR,
  id: SERIAL PRIMARY KEY
);

CREATE TABLE apps (
  name: VARCHAR(200),
  logo: VARCHAR(200),
  downloadUrl: VARCHAR(200),
  description: VARCHAR(200),
  id: SERIAL PRIMARY KEY
);
CREATE TABLE favorites (
  appId : SERIAL PRIMARY KEY,
  companyId: INTEGER
);
