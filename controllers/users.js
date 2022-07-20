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

const allUsers = (req, res) => {
    res.send(users)
}
const createUsers = (req, res) => {
    const user = req.body;
    users.push(user);
    res.send(`${user.firstName} added to the database.`);

}

const getUsers = (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id));
    if (found) {
        res.json(users.filter(user => user.id === parseInt(req.params.id)));
    } else {
        res.sendStatus(400);
    }
}

const deleteUsers = (req, res) => {
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
}

const updateUsers = (req, res) => {
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
}
module.exports = { createUsers, getUsers, deleteUsers, updateUsers, allUsers };
