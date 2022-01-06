const router = require('express').Router();

const { 
    getAllThoughts, 
    getThoughtsById, 
    createThoughts, 
    updateThoughts,
    deleteThoughts,
    addReaction,
    deleteReaction
} = require('../../controllers/thoughtsController');

// Routes - /api/thoughts GET
router.route('/').get(getAllThoughts);

// Routes - /api/thoughts/:id GET, PUT, DELETE
router.route('/:id').get(getThoughtsById).put(updateThoughts).delete(deleteThoughts); 

// Routes - /api/thoughts/:userId POST
router.route('/:userId').post(createThoughts);

// Routes - /api/thoughts/:thoughtId/reactions POST
router.route('/:thoughtId/reactions').post(addReaction);

// Routes - /api/thoughts/:thoughtId/reactionId DELETE
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;