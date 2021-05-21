import jwt from 'jsonwebtoken';
import authConf from '../../config/auth';
import User from '../models/User';
import Band from '../models/Band';
import Venue from '../models/Venue';

class SessionController {

    async store(req, res) {

        const { email, password } = req.body;

        try {
            let user = await User.findOne({ where: { email } });

            if (!user) {
                user = await Band.findOne({ where: { email } });
            }
            if (!user) {
                user = await Venue.findOne({ where: { email } });
            }
            if (!user) {
                return res.status(401).json({ error: 'User not found' });
            }

            if (!(await user.checkPassword(password))) {
                return res.status(401).json({ error: 'Password does not match!' });
            }

            const { id, name } = user;

            return res.json({
                user: {
                    id,
                    name,
                    email,
                },
                token: jwt.sign({ id }, authConf.secret, {
                    expiresIn: authConf.expireIn,
                }),
            });
        } catch (error) {
            res.status(500).send({ message: 'An error occurred ' + error });
            console.log(error);
        }
    }

}

export default new SessionController();