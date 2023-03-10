import CreditService from '../servise/CreditService.js'

class CreditController {
    async create(req, res) {
        try {
            const post = await CreditService.create(req.body)
            res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const post = await CreditService.getAll()
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            const post = await CreditService.getOne(req.params.id)
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async update(req, res) {
        try {
            const updatePost = await CreditService.update(req.body)
            return res.json(updatePost)
        }  catch (e) {
            res.status(500).json(e.message)
        }
    }

    async delete(req, res) {
        try {
            const post = await CreditService.delete(req.params.id)
            return res.json(post)
        }  catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new CreditController()