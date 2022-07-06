function fetchAllUsers(req, res) {
    res.json('ALL USERS');
}

function fetchOneUser(req, res) { 

    // POUR LES TESTS
    res.json({
        id: 1,
        firstname: 'Hélène',
        lastname: 'NGUYEN',
        email: 'yumicode@admin.com',
        password: '$2y$10$UeZpABYPkh/Y/ZrcVxAL2OYn0BZ8nbIcUc6G/6GjDZQFE6nnBYgpe'
    });
 
}
function createUser(req, res) { 
    res.json('USER CREATED')
}
function updateUser(req, res) { 
    res.json('USER UPDATED')
}
function deleteUser(req, res) { 
    res.json('USER DELETED')
}


export { fetchAllUsers, fetchOneUser, createUser, updateUser, deleteUser };