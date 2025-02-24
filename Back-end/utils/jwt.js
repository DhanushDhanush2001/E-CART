const sendToken = (user,statuscode, res) =>{
    
    // Creating Jwt Token
    const token = user.getJwtToken();

    // setting cookies

    const options = {
        expires : new Date(Date.now() + process.env.COOKIES_EXPIRES_TIME * 24 * 60 * 60 * 1000),
        httpOnly : true,
    }

    res.status(statuscode)
    .cookie('token', token, options)
    .json({
        success: true,
        token,
        user
    })
}


module.exports = sendToken;
