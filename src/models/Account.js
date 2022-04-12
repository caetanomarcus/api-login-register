import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "roles",
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const account = mongoose.model("accounts", accountSchema);

export default account;