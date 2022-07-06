function fetchAllUsers(req, res) {
    res.json('ALL USERS');
}

function fetchOneUser(req, res) { 
    res.json('GET ONE USER')
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