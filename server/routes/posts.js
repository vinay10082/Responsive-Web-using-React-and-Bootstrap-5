import express from 'express'

import { Post, getAllPosts, deletePost } from '../controllers/Posts.js' 
import auth from '../middleware/auth.js'

const router = express.Router()

router.post('/post', auth, Post)
router.get('/get', getAllPosts)
router.delete('/delete/:id', auth, deletePost);
// router.put('/Post/like/:id',  auth, likePost);
// router.put('/Post/dislike/:id',  auth, dislikePost);
// router.patch('/post/comment/:id', auth, postComment);

export default router