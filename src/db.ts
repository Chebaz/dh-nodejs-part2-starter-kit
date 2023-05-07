import pgPromise from "pg-promise";

const db = pgPromise()("postgres://postgres:postgres@localhost:5432/video");

const setupDb = async () => {
  db.none(
    `
      DROP TABLE IF EXISTS planets;

      CREATE TABLE planets (
        id SERIAL NOT NULL PRIMARY KEY,
        name TEXT NOT NULL,
        image TEXT NOT NULL
      );
      
      
      DROP TABLE IF EXISTS users;
      
      CREATE TABLE users(
        id SERIAL NOT NULL PRIMARY KEY,
        username TEXT NOT NULL,
        password TEXT NOT NULL,
        token TEXT NOT NULL,
      )`
  );

  await db.none(`INSERT INTO planets (name) VALUE ('Earth')`);
  await db.none(`INSERT INTO planets (name) VALUE ('Mars')`);
  await db.none(
    `INSERT INTO users (username, password) VALUE ('Simone', 'jnfio')`
  );
};

setupDb();

export { db };
