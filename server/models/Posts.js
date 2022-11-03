import mongoose from 'mongoose'

const PostSchema = mongoose.Schema({
    postField: { type: String, required: "Post must have a title"},
    postTitle: { type: String, required: "Post must have a title"},
    postDescription: { type: String, required: "Post must have a description"},
    userPosted: { type: String, required: "Post must have an author"},
    userId: { type: String},
    askedOn: { type: Date, default: Date.now},
})

export default mongoose.model("Post", PostSchema)