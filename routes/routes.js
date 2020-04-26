const express = require('express');
const router = express.Router();
const userController = require('../users/users');
const articleController = require('../article/article');



// routes users
router.post('/authenticate', userController.authenticate);
router.post('/register', userController.register);
router.get('/', userController.getAll);
router.get('/current', userController.getCurrent);
router.get('/:id', userController.getById);
router.put('/:id', userController.update);
router.delete('/:id', userController._delete);

//routes article
router.get('/', articleController.getAll);
router.post('/create', articleController.create);
router.get('/:articleId', articleController.getById);
router.get('/random', articleController.getRandom);


module.exports = router;