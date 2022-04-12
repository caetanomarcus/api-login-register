import account from '../models/Account.js';

const verifySignUp = (req, res, next) => {
    // Username
//   User.findOne({
//     username: req.body.username
//   }).exec((err, user) => {
//     if (err) {
//       res.status(500).send({ message: err });
//       return;
//     }
//     if (user) {
//       res.status(400).send({ message: "Failed! Username is already in use!" });
//       return;
//     }
// });
    // Email
    account.findOne({
      email: req.body.email
    }).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      if (user) {
        res.status(400).send({ message: "Email já está cadastrado!" });
        return;
      }
      next();
    });
};

export default verifySignUp;