var ArticleModel = require('../models/articleModel.js');

/**
 * articleController.js
 *
 * @description :: Server-side logic for managing articles.
 */
module.exports = {

    /**
     * articleController.list()
     */
    list: function (req, res) {
        ArticleModel.find(function (err, articles) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting article.',
                    error: err
                });
            }

            return res.json(articles);
        });
    },

    /**
     * articleController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        ArticleModel.findOne({ _id: id }, function (err, article) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting article.',
                    error: err
                });
            }

            if (!article) {
                return res.status(404).json({
                    message: 'No such article'
                });
            }

            return res.json(article);
        });
    },

    /**
     * articleController.create()
     */
    create: function (req, res) {

	console.log(req.body);
	
	res.json({'data': 'asdasd'})
return false;
        var article = new ArticleModel({
            name: req.body.name,
            desc: req.body.desc,
            position: req.body.position,
            link: req.body.link,
            created_at: req.body.created_at
        });

        article.save(function (err, article) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating article',
                    error: err
                });
            }

            return res.status(201).json(article);
        });
    },

    /**
     * articleController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        ArticleModel.findOne({ _id: id }, function (err, article) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting article',
                    error: err
                });
            }

            if (!article) {
                return res.status(404).json({
                    message: 'No such article'
                });
            }

            article.name = req.body.name ? req.body.name : article.name;
            article.desc = req.body.desc ? req.body.desc : article.desc;
            article.position = req.body.position ? req.body.position : article.position;
            article.link = req.body.link ? req.body.link : article.link;
            article.created_at = req.body.created_at ? req.body.created_at : article.created_at;

            article.save(function (err, article) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating article.',
                        error: err
                    });
                }

                return res.json(article);
            });
        });
    },

    /**
     * articleController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        ArticleModel.findByIdAndRemove(id, function (err, article) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the article.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    },


    upload: function (req, res) {
        // req.body
        const files = req.files.images;

        const getFilename = new Date().getTime();



        files.mv(`${__dirname}/${getFilename}.jpg`, function (err, msg) {
            console.log('Error', err)
            console.log('Msg', msg)

            return res.json({
                message: 'UPlaoded files'
            })
        })
    }
};


