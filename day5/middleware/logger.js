const looger = (req, res, next) => {

    console.log('====> ', req.url)
    next();
}

module.exports = looger