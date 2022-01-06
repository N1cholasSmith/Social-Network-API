const router = require('express').Router();

const {
    getAllUsers,
    getUsersById,
    createUsers,
    updateUsers,
    deleteUsers,
    addFriend,
    deleteFriend
} 
= require('../../controllers/userController');



// routes - /api/users GET, POST
router.route('/').get(getAllUsers).post(createUsers);

// routes - /api/users/:id GET, PUT, DELETE
router.route('/:id').get(getUsersById).put(updateUsers).delete(deleteUsers);

// routes - /api/users/:userId/friends/:friendId POST, DELETE
router.route('/:id/friends/:friendId').post(addFriend).delete(deleteFriend)

module.exports = router;