import account from '../models/Account.js';
import bcryptjs from 'bcryptjs';

class RegisterController {

	static async registerUser(req, res) {

		const salt = await bcryptjs.genSalt(10);

		console.log(req.body);

		const newRegister = new account({
			name: req.body.name,
			email: req.body.email,
			role: req.body.role,
			password: await bcryptjs.hash(req.body.password, salt),
		})

		await newRegister.save((err, account) => {
			if (err) {
				res.status(500).send({ message: `Erro ao cadastrar usuário: ${err}` })
			} else {
				res.status(201).send({ message: `Autor cadastrado com sucesso!`, account })
			}
		})

	}
}

export default RegisterController;