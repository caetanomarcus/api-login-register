import role from "../models/Role.js";

class rolesController {

    static getRoles(req, res) {
        role.find((err, roles) => {
            if(err) {
                res.status(500).send({ message: `Erro ao listar roles: ${err}` })
            } else {
                res.status(200).send(roles)
            }
        })
    }

    static getRole(req, res) {
        role.findById(req.params.id, (err, role) => {
            if(err) {
                res.status(500).send({ message: `Erro ao listar role: ${err}` })
            } else {
                res.status(200).send(role)
            }
        })
    }

    static createRole(req, res) {
        const newRole = new role(req.body)

        newRole.save((err, role) => {
            if (err) {
                res.status(500).send({ message: `Erro ao cadastrar role: ${err}` })
            } else {
                res.status(201).send({ message: `Role cadastrado com sucesso!`, role })
            }
        })
    }
}

export default rolesController;
