import userModel from "../models/userModel.js";

export const updateUserController = async (req,res,next) => {
    const {name, email, location} = req.body;
    if(!name || !email || !lastName || !location){
        res.status(400);
        throw new Error('Please fill all the fields');
    }
    const user = await userModel.findOne({_id: req.user.userid});
    user.name = name;
    user.lastName = lastName;
    user.email = email;
    user.location = location;


    await user.save();
    const token = await user.createJWT();
    res.status(200).json({
        status: 'success',
        data: {
            user,
            token
        }
    });
};