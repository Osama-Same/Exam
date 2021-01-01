const connection = require("../db");
const express = require("express");

const create = (req, res) => {
  const sqlCommand = `INSERT INTO book1 (title,author, pages, publisher ,published_at) VALUES (?,?,?,?)`;
  const data = [
    req.body.title,
    req.body.author,
    req.body.pages,
    req.body.publisher,
  ];
  connection.query(sqlCommand, data, (err, result, field) => {
    if (err) throw err;
    res.json("Success create new book1");
  });
};
const get = (req, res) => {
  const sqlCommand = `SELECT * FROM book1 WHERE is_deleted = 0`;
  connection.query(sqlCommand, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

const getaspecificbook = (req, res) => {
  const sqlCommand = `SELECT * FROM book1 WHERE id=1 `;
  let data = [req.params.id];
  connection.query(sqlCommand,data, (err, result, field) => {
    if (err) throw err;
    res.json("Success change book1 ");
  });
};
const deleteaspecificbook = (req, res) => {
  const sqlCommand = `DELETE FROM book1 WHERE id=?`;
  let data = [req.params.id];
  connection.query(sqlCommand,data, (err, result, field) => {
    if (err) throw err;
    res.json("Success delete ");
  });
};

module.exports = {
  create,
  get,
  getaspecificbook,
  deleteaspecificbook
};
