import mongoose from 'mongoose'

const PostSchema = mongoose.Schema({
    field: { type: String, required: "Post must have a field"},
    title: { type: String, required: "Post must have a title"},
    description: { type: String, required: "Post must have a description"},
    userPosted: { type: String, required: "Post must have an author"},
    userId: { type: String},
    askedOn: { type: Date, default: Date.now},
    like: { type: [String], default: []},
    dislike: { type: [String], default: []},
    comment: [{
        commentBody: String,
        userId: String,
        commentOn: { type: Date, default: Date.now},
    
    }]
})

export default mongoose.model("Post", PostSchema)