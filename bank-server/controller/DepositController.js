import DepositService from '../servise/DepositService.js'

class DepositController {
    async create(req, res) {
        try {
            const post = await DepositService.create(req.body)
            res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const post = await DepositService.getAll()
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            const post = await DepositService.getOne(req.params.id)
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async update(req, res) {
        try {
            const updatePost = await DepositService.update(req.body)
            return res.json(updatePost)
        }  catch (e) {
            res.status(500).json(e.message)
        }
    }

    async delete(req, res) {
        try {
            const post = await DepositService.delete(req.params.id)
            return res.json(post)
        }  catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new DepositController()