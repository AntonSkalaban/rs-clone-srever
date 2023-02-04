import Credit from '../documents/Credit.js'

class CreditService {
    async create(post) {
        const createdCredit = await Credit.create(post)
        return createdCredit;
    }

    async getAll() {
        const credits = await Credit.find()
        return credits
    }

    async getOne(id) {
        if (!id)  throw new Error('Id не найден')
        const credit = await Credit.findById(id)
        return credit
    }

    async update(post) {
        if (!post._id) throw new Error('Id не найден')
        const updateCredit = await Credit.findByIdAndUpdate(post._id, post, {new: true})
        return updateCredit
    }

    async delete(id) {
        if (!id) throw new Error('Id не найден')
        const credit = await Credit.findByIdAndDelete(id)
        return credit
    }
}

export default new CreditService()