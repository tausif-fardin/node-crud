const express = require('express');

const router = express.Router();

let users = [
    {
        id: 1,
        firstName: 'John',
        lastName: 'Doe'
    },
    {
        id: 2,
        firstName: 'Jane',
        lastName: 'Doer'
    },
    {
        id: 3,
        firstName: 'Bill',
        lastName: 'Billoo'
    }
]

//Get all users

router.get('/', (req, res) => {
    res.send(users);
})

//Add users

router.post('/', (req, res) => {
    const user = req.body;
    users.push(user);
    res.send(`${user.firstName} added to the database.`);

})
//Get a user by id
router.get('/:id', (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id));
    if (found) {
        res.json(users.filter(user => user.id === parseInt(req.params.id)));
    } else {
        res.sendStatus(400);
    }
})
//Delete
router.delete('/:id', (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id));
    if (found) {
        users = users.filter(user => user.id !== parseInt(req.params.id));
        res.json({
            msg: "User deleted",
            users
        });
    } else {
        res.sendStatus(400);
    }
})
//Update User

router.put("/:id", (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id));
    if (found) {
        const updateUser = req.body;
        users.forEach(user => {
            if (user.id === parseInt(req.params.id)) {
                user.firstName = updateUser.firstName ? updateUser.firstName : user.firstName;
                user.lastName = updateUser.lastName ? updateUser.lastName : user.lastName;
                res.json({ msg: "User updated", user });
            }
        });
    } else {
        res.sendStatus(400);
    }
});
module.exports = router;