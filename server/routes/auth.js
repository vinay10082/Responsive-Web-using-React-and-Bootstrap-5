import express from 'express';

import { signin, signup } from '../controllers/auth.js'

import { fetchUsers } from '../controllers/users.js'

const router = express.Router();

router.post('/signup', signup)
router.post('/signin', signin)

router.get('/fetchUsers', fetchUsers)

export default router