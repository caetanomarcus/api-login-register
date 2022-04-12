import account from '../models/Account.js';
import bcryptjs from 'bcryptjs';
import jsonwebtoken from "jsonwebtoken";
import authConfig from '../config/auth.js';

class AuthController {

	static signIn(req, res) {
		account.findOne({ email: req.body.email })
		.populate('role', 'name')
		.exec((err, user) => {
			if (err) {
				res.status(500).send({ message: `Erro ao logar: ${err}` })
			}

			if (!user) {
				res.status(404).send({ message: `Usuário não encontrado!` })
			}

			const passwordIsValid = bcryptjs.compareSync(req.body.password, user.password);

			if (!passwordIsValid) {
				res.status(401).send({ acessToken: null, message: `Senha inválida!` })
			}

			const token = jsonwebtoken.sign({ id: user._id }, process.env.SECRET || authConfig.secret, {
				expiresIn: 86400
			});


			res.status(200).send({
				acessToken: token,
				user: {
					id: user._id,
					name: user.name,
					email: user.email,
					role: user.role
				}
			})
		})
	}

	static confirmToken(req, res) {
		const token = req.headers['x-access-token'];

		if (!token) {
			return res.status(401).send({ message: 'Token não enviado!' });
		}

		jsonwebtoken.verify(token, process.env.SECRET || authConfig.secret, (err, decoded) => {
			if (err) {
				return res.status(401).send({ message: 'Token inválido!' });
			}

			res.status(200).send({ isValidate: true });
		});
	}

}

export default AuthController;