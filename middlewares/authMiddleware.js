import JWT from 'jsonwebtoken';

const userAuth = async (req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer')) {
        next('authorization failed')
    }
    const token = authHeader.split(' ')[1]
    try {
        const playload = JWT.verify(token, process.env.JWT_SECRET)
        req.body.user ={userId: playload.userId}
        next()
    } catch (error) {
        next('authorization failed');
    }
}

export default userAuth;