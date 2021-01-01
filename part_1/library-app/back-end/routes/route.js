const express = require('express');
const mainRouter = express.Router();
const {
    create,
    get,
    getaspecificbook,
    deleteaspecificbook
  } = require("../controllers/book");
mainRouter.post("/books", create);
mainRouter.get("/books/:book_id", get);
mainRouter.delete("/books/:book_id", get);




module.exports = mainRouter;