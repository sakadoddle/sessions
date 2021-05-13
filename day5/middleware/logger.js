const looger = (req, res, cb) => {

    console.log('====> ', req.url)
    cb();
}

module.exports = looger