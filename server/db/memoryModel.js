import mongoose from "mongoose";

const memorySchema = mongoose.Schema({
    title: {
        String, 
        required: true
    },
    content : {
        String,
        required: true
    },
    creator: {
        String,
        required: true
    },
    image: {
        String
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const Memory = mongoose.model("Memory", memorySchema);

export default Memory;
