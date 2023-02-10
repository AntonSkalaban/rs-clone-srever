import mongoose from "mongoose";

const Card = new mongoose.Schema({
    type: {type: String, default: 'card'},
    cardType: {type: String, required: true},
    name: {type: String, required: true},
    date: {type: String, required: true},
    currency: {type: String, required: true},
    balance: {type: Number, required: true},
    moneyback: {type: Number},
    iban: {type: String, default: 'XX000000000120040001040214'}
})

export default mongoose.model('Card', Card)