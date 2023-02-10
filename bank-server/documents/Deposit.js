import mongoose from 'mongoose';

const Deposit = new mongoose.Schema({
  type: { type: String, default: 'deposit' },
  name: { type: String, required: true }, //На недвижимость
  date: { type: String, required: true }, // 22.12.12
  term: { type: String, required: true }, // 10 (month)
  rate: { type: Number, required: true },
  currency: { type: String, required: true }, //USD
  totalSum: { type: Number, required: true }, // 40000
  iban: { type: String, default: 'XX000000000120040001040214' },
});

export default mongoose.model('Deposit', Deposit);