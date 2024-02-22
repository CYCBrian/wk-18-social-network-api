const router = require('express').Router();
const{
    getAllThoughts,
    getOneThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,
} = require('../../controllers/thoughtCountroller')

// /api/thoughts
router.route('/').get(getAllThoughts).post(createThought);

// /api/thoughts/:_id
router.route('/:_id').get(getOneThought).put(updateThought).delete(deleteThought);

// /api/thoughts/:_id/reactions
router.route('/:_id/reactions').post(addReaction);

// /api/thoughts/:_id/reactions/:reactionId
router.route('/:_id/reactions/:reactionId').delete(deleteReaction)

module.exports = router;