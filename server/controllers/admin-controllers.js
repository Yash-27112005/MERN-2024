const Contact = require("../models/contact-model");
const User = require("../models/user-model");

// ? getAllUsers logic

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({}, { password: 0 });
    // console.log(users);
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No user found" });
    }
    return res.status(200).json({ users });
  } catch (error) {
    next(error);
  }
};
//*********************** */
// ? user delete logic
//*********************** */

const deleteUserById = async (req, res, next) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    return res.status(200).json({ message: "User Deleted Successfully" });
  } catch (error) {
    next(error);
  }
};

//*********************** */
// ? single user  logic
//*********************** */

const getUsersById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await User.findOne({ _id: id }, { password: 0 });
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

//*********************** */
// ? user update logic
//*********************** */
const updateUserById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatedUserData = req.body;
    const updatedData = await User.updateOne(
      { _id: id },
      {
        $set: updatedUserData,
      }
    );
    return res.status(200).json(updatedData);
  } catch (error) {
    next(error);
  }
};

//*********************** */
// ? getAllContacts logic
//*********************** */

const getAllContacts = async (req, res, next) => {
  try {
    const contact = await Contact.find();
    //  console.log(contact);
    if (!contact || contact.length === 0) {
      return res.status(404).json({ message: "No contacts found" });
    }
    return res.status(200).json({ contact });
  } catch (error) {
    next(error);
  }
};
//*********************** */
// ? contact delete logic
//*********************** */

const deleteContactsByEmail = async (req, res, next) => {
  try {
    const id = req.params.id;
    await Contact.deleteOne({ _id: id });
    return res.status(200).json({ message: "Contact Deleted Successfully" });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getAllUsers,
  getAllContacts,
  deleteUserById,
  deleteContactsByEmail,
  getUsersById,
  updateUserById,
};
