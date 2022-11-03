import posts from '../models/Posts.js'
import mongoose from 'mongoose'

export const Post = async (req, res) => {
    const postData = req.body;
    const userId = req.userId;
    const post = new posts({ ...postData, userId});
    try {
        await post.save();
        res.status(200).json("make a post successfully")
    } catch (error) {
        console.log(error)
        res.status(409).json("Couldn't make a new post")        
    }
}

export const getAllPosts = async (req, res) => {
    try {
        const postsList = await posts.find();
        res.status(200).json(postsList);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deletePost = async (req, res) => {
    const { id:_id } = req.params ;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('post unavailable...');
    }

    try {
        await posts.findByIdAndRemove( _id );
        res.status(200).json({ message: "successfully deleted..."})
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

// export const likePost = async (req, res) => {

// }
// export const dislikePost = async (req, res) => {

// }
// export const PostComment = async (req, res) => {

// }