const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/userModel.js");
const cloudinary = require("cloudinary").v2;

exports.registerUser = async (req, res) => {
  try {
    const UImage = req.files.Uphoto;
    const AImage = req.files.Aphoto;
    const LImage = req.files.Lphoto;
    const Userobj = await cloudinary.uploader.upload(
      UImage.tempFilePath,
      (err, result) => {}
    );
    const UserImage = Userobj.url;
    const Adharobj = await cloudinary.uploader.upload(
      AImage.tempFilePath,
      (err, result2) => {}
    );
    const AdharImage = Adharobj.url;
    const Licenceobj = await cloudinary.uploader.upload(
      LImage.tempFilePath,
      (err, result3) => {}
    );
    LicenseImage = Licenceobj.url;
    console.log(UserImage);
    console.log(AdharImage);
    console.log(LicenseImage);
    const { UserName, Email, PhoneNumber, Age, Password, Role } = req.body;

    const existingUser = await UserModel.findOne({
      $or: [{ UserName }, { Email }],
    });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(Password, 10);

    const newUser = await UserModel.create({
      UserName,
      Email,
      PhoneNumber,
      Age,
      UserImage,
      AdharImage,
      LicenseImage,
      Password: hashedPassword,
      Role,
    });

    // const savedUser = await newUser.save();
    const token = jwt.sign({ userId: newUser._id }, "HariPradNil", {
      expiresIn: "1h",
    });

    res
      .status(201)
      .json({
        success: true,
        message: "User created successfully",
        user: newUser,
        token,
      });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "internal Server Error", error });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { UserName, Password } = req.body;

    const user = await UserModel.findOne({ UserName });
    if (!user) {
      return res
        .status(401)
        .json({ success: false, error: "Invalid credentials" });
    }

    const passwordMatch = await bcrypt.compare(Password, user.Password);
    if (!passwordMatch) {
      return res
        .status(401)
        .json({ success: false, error: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id }, "HariPradNil", {
      expiresIn: "1h",
    });

    res
      .status(200)
      .json({ success: true, message: "Login successful", user, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

exports.updateUser = async (req, res) => {
  const id = req.params.id;
  const {
    UserName,
    Email,
    PhoneNumber,
    Age,
    UserImage,
    AdharImage,
    LicenseImage,
    Password,
    Role,
  } = req.body;
  if (
    req.body.Role.toLowerCase() !== "user" ||
    req.body.Role.toLowerCase() !== "admin"
  ) {
    res.status(500).send({ success: false, message: "invalid role" });
  }
  try {
    const data = await UserModel.findByIdAndUpdate(
      id,
      {
        UserName,
        Email,
        PhoneNumber,
        Age,
        UserImage,
        AdharImage,
        LicenseImage,
        Password,
        Role,
      },
      { new: true }
    );
    if (!data) {
      return res.status(404).send({ success: false, message: "User NotFound" });
    }
    // console.log(data);
    res.status(200).send({ success: true, message: "Data updated", data });
  } catch (error) {
    res.status(500).send({ success: false, message: "Internal Server Error" });
  }
};

exports.deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const datadel = await UserModel.deleteOne({ _id: id });
    if (datadel.deletedCount === 0) {
      return res.status(404).send({ success: false, message: "User NotFound" });
    }
    console.log(datadel.deletedCount);
    res.status(200).send({ success: true, message: "Data deleted" });
  } catch (error) {
    res.status(500).send({ success: false, message: "Internal Server Error" });
  }
};

exports.getUserid = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await UserModel.findOne({ _id: id });
    if (!data) {
      return res.status(404).send({ success: false, message: "User NotFound" });
    }
    console.log(data);
    res.status(200).send({ success: true, message: "Data found", data });
  } catch (error) {
    res.status(500).send({ success: false, message: "Internal Server Error" });
  }
};

exports.getUser = async (req, res) => {
  try {
    const data = await UserModel.find();
    if (!data) {
      return res.status(404).send({ success: false, message: "No data" });
    }
    console.log(data);
    res.status(200).send({ success: true, message: "Data found", data });
  } catch (error) {
    console.error({ success: false, message: "Error fetching data:", error });
    res.status(500).send({ success: false, message: "Internal Server Error" });
  }
};
