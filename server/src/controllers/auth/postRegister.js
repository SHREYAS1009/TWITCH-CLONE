import User from '../../models/Users.js';

export const postRegister = async (req, res) => {
  const user = await User.create({
    username: "Shreyas",
    email: "shreyas89572@gmail.com",
    password: "password",
  });

  return res.send("user has been added to database");
};
