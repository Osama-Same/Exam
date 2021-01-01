const express = require('express');
const mainRouter = express.Router();
mainRouter.post("/userAndPost", PostAndUsers);

module.exports = mainRouter;