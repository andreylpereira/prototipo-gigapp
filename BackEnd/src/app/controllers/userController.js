import User from '../models/user';

class UserController {
    async store(req, res) {
        const userExists = await User.findOne({ where: { email: req.body.email } });
        if (userExists) {
            return res.status(400).json({ error: 'User already exists.' });
        }
        const { id, name, email, provider } = await User.create(req.body);
        return res.json({ id, name, email, provider });
    }

    async index() { }
    async show() { }
    update() { }
    async delete() { }

}

export default new UserController();