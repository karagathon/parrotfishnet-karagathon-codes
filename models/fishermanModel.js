const mongoose = require('mongoose');

const fishermanSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        default: "n/a"
    },
    contact_number: {
        type: String,
        default: "n/a"
    },
    family_contact_number: {
        type: String,
        default: "n/a"
    }
}, {
    timestamps: { 
        createdAt: 'created_at' 
    }
});


const Fisherman = mongoose.model('fisherman', fishermanSchema);
module.exports = Fisherman;