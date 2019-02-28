const logger = require('../utils/logger');
const userModel = require('../models/model-user');

// user controller
module.exports.getUser = async (req, res) => {
    let username = req.params.username;
    let response = null;
    try {
        response = await userModel.getUser(username);
        res.status(200).json(response);
    } catch (error) {
        logger.error(`getUser error: ${error.message}`);
        res.status(500).json({status:'error', message: error.message, statusCode: 500});
    }
}
