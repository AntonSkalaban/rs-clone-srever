import mongoose from "mongoose";

const Card = new mongoose.Schema({
    type: {type: String, required: true},
    name: {type: String, required: true},
    date: {type: String, required: true},
    currency: {type: String, required: true},
    balance: {type: Number, required: true},
    moneyback: {type: Number},
    iban: {type: String, required: true}
})

export default mongoose.model('Card', Card)