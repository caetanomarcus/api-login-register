import mongoose from "mongoose";


const roleScheme = new mongoose.Schema({
    id: {
        type: String, 
    },
    name: {
        type: String, 
        required: true
    },
});

const roles = mongoose.model('roles', roleScheme);

export default roles;