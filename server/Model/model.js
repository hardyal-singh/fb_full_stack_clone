const { default: mongoose } = require("mongoose")

const schema = new mongoose.Schema({
    firstName: { type: String, required: true },
    surName: { type: String, required: true },
    moblie: { type: Number, required: false },
    email: { type: String, required: false },
    password: { type: String, required: true },
    date: { type: Number, required: true },
    month: { type: String, required: true },
    year: { type: Number, required: true },
    gender: { type: String, required: true },
    code:{type:Number,required:false}

})

const model = new mongoose.model("user", schema)

module.exports = model;