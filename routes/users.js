const express = require('express');

const router = express.Router();

const { createUsers, getUsers, deleteUsers, updateUsers, allUsers } = require('../controllers/users.js')

//Get all users

router.get('/', allUsers);

//Add users

router.post('/', createUsers);

//Get a user by id

router.get('/:id', getUsers)

//Delete

router.delete('/:id', deleteUsers)

//Update User

router.put("/:id", updateUsers);
module.exports = router;