const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
//const { token } = require('morgan');

dotenv.config();

const verifyToken = (req, res, next) => {
    let token = null;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            return true;
        } catch (error) {
            console.error('Error en la verificación del token:', error);
            return res.status(404).json({ status: 404, error: 'Hubo un error en la verificación del token' });
        }
    }

    if (!token) {
        const error = new Error('Token no válido');
        return res.status(401).json({ status: 401, error: error.message });
    }

    next();
};

const userMidellweare = (req, res, next) => {
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            if(!token || token == '') return res.json({ status: 403, error: 'no hay token' })
            payload = jwt.verify(token, process.env.JWT_SECRET);
            const { banstatus } = payload
            if(banstatus) return res.json({ login: false, status: 403, error: 'usuario baneado' })
            return next()
        } catch (error) {
            console.error('Error en la verificación del token:', error);
            return res.status(404).json({ status: 404, error: 'Hubo un error en la verificación del token' });
        }
    }
    return res.json({ status: 404, error: 'ho hay header' })

} 

const adminMidellweare = (req, res, next) => {
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            if(!token || token == '') return res.json({ status: 403, error: 'no hay token' })
            payload = jwt.verify(token, process.env.JWT_SECRET);
            const { banstatus, admin } = payload
            if(banstatus) return res.json({ login: false, status: 403, error: 'usuario baneado' })
            if(!admin) return res.json({status: 403, error: "esta información es solo para usuarios nivel admin"})
            return next()
        } catch (error) {
            console.error('Error en la verificación del token:', error);
            return res.status(404).json({ status: 404, error: 'Hubo un error en la verificación del token' });
        }
    }

    return res.json({ status: 404, error: 'ho hay header' })
} 



module.exports = { verifyToken, userMidellweare, adminMidellweare };
