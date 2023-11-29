// Create web server

// Import modules
const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/comments');

// Handle request
router.get('/', commentsController.getComments);
router.get('/create', commentsController.getCreateComment);
router.post('/create', commentsController.postCreateComment);
router.get('/:id/delete', commentsController.getDeleteComment);

// Export module
