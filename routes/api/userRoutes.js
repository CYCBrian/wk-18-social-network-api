const router = require('express').Router();
const{
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
} = require('../../controllers/userController')

// /api/users
router.route('/').get(getAllUsers).post(createUser);

// /api/users/:_id
router.route('/:_id').get(getOneUser).put(updateUser).delete(deleteUser);

// /api/users/:_id/friends
router.route('/:_id/friends').post(addFriend);

// /api/users/:_id/friends/:_id
router.route('/:_id/friends/:_id').delete(deleteFriend)

module.exports = router;