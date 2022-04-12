import jsonwebtoken from "jsonwebtoken";
import authConfig from "../config/auth";

const verifyToken = (req, res, next) => {
	const authHeader = req.headers["x-acess-token"];

	if (!authHeader) {
		return res.status(403).send({ error: "Token não foi enviado" });
	}

	jsonwebtoken.verify(token, authConfig.secret, (err, decoded) => {
		if (err) {
			return res.status(401).send({ error: "Token inválido!" });
		}

		req.userId = decoded.id;
		return next();
	});
}

export default verifyToken;