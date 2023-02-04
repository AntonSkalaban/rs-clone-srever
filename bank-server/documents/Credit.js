import mongoose from "mongoose";

const Credit = new mongoose.Schema({
    type: {type: String, required: true}, //Credit
    name: {type: String, required: true}, //На недвижимость
    date: {type: String, required: true}, // 22.12.12
    term: {type: String, required: true}, // 10 (month)
    rate: {type: Number, required: true}, 
    currency: {type: String, required: true}, //USD
    totalSum: {type: Number, required: true}, // 40000
    paid:  {type: Number, required: true}, // 200 
    iban: {type: String, required: true} // DK00000002325
})

export default mongoose.model('Credit', Credit)