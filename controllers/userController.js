import userModel from '../models/userModel.js';

export const updateUserController = async (req, res,next) => {
    const { name, lastName, email, location } = req.body;
    if(!name || !email || !lastName || !location){
        return res.status(400).json({error: 'All fields are required'});
    }

    const user = await userModel.findOne({_id: req.user.userId});
    user.name = name;
    user.lastName = lastName;
    user.email = email;
    user.location = location;

    await user.save()
    const token = user.createJWT()
    res.status(200).json({
        user,
        token
    });
};