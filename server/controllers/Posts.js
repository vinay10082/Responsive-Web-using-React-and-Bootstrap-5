import Posts from '../models/Posts.js'

export const Post = async (req, res) => {
    const postQuestionData = req.body;
    const userId = req.userId;
    const post = new Posts({ ...postQuestionData, userId});
    try {
        await post.save();
        res.status(200).json("Posted a question successfully")
    } catch (error) {
        console.log(error)
        res.status(409).json("Couldn't post a new question")        
    }
}

export const getAllPosts = async (req, res) => {
    try {
        const postsList = await Posts.find();
        res.status(200).json(postsList);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}