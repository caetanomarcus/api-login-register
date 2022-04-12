import account from '../models/Account.js';


class AccountController {

    static getUsers(req, res) {
        account.find()
        .populate('role')
        .exec((err, users) => {
            if(err) {
                res.status(500).send({ message: `Erro ao listar usuários: ${err}` })
            } else {
                res.status(200).send(users)
            }
        })
    }
}

export default AccountController;