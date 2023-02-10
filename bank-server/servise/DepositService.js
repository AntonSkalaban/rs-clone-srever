import Deposit from '../documents/Deposit.js'

class DepositService {
    async create(post) {
        const createdDeposit = await Deposit.create(post)
        return createdDeposit;
    }

    async getAll() {
        const deposits = await Deposit.find()
        return deposits
    }

    async getOne(id) {
        if (!id)  throw new Error('Id не найден')
        const deposit = await Deposit.findById(id)
        return deposit
    }

    async update(post) {
        if (!post._id) throw new Error('Id не найден')
        const updateDeposit = await Deposit.findByIdAndUpdate(post._id, post, {new: true})
        return updateDeposit
    }

    async delete(id) {
        if (!id) throw new Error('Id не найден')
        const deposit = await Deposit.findByIdAndDelete(id)
        return deposit
    }
}

export default new DepositService()