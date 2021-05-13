const permission = (req, res, cb) => {

    if (req.method === 'POST') {
        console.log('COndition approved')
    }

    cb();
}


module.exports = permission