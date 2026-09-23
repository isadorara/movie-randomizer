import sqlite3 from "sqlite3";
import { open } from "sqlite";

async function adicionarTabela(nome, ano, poster) {
  const db = await open({
    filename: './banco.db',
    driver: sqlite3.Database,
  });
  db.run(
    `CREATE TABLE IF NOT EXISTS filmes (id INTEGER PRIMARY KEY, nome TEXT, ano TEXT, poster TEXT)`
  )
  db.run(`INSERT INTO filmes (nome, ano, poster) VALUES (?,?,?)`, [
    nome,
    ano,
    poster,
  ]);
};
