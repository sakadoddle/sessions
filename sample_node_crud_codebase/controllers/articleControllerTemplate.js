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

            return res.render('article/list', { title: 'Article', articleList: articles });
        });
    },

    addForm: function (req, res) {
        res.render('article/add', { title: 'Add Article' })
    },



    editForm: function (req, res) {
        var id = req.params.id;

        ArticleModel.findOne({ _id: id }, function (err, article) {
            res.render('article/edit', { title: 'Edit Article', article: article })
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
        const files = req.files.image;
        const getFilename = new Date().getTime();

        var article = new ArticleModel({
            name: req.body.name,
            desc: req.body.description,
            position: req.body.position,
            link: req.body.link,
            created_at: new Date()
        });

        article.save(function (err, article) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating article',
                    error: err
                });
            }

            files.mv(`${__dirname}/${getFilename}.jpg`, function (err, msg) {
                console.log('Error', err)
                console.log('Msg', msg)

                return res.redirect('/article')
            })

        })
    },

    /**
     * articleController.update()
     */
    update: function (req, res) {
        var id = req.body.id;


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
            article.desc = req.body.description ? req.body.description : article.desc;
            article.position = req.body.position ? req.body.position : article.position;
            article.link = req.body.link ? req.body.link : article.link;


            console.log(article)

            article.save(function (err, article) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating article.',
                        error: err
                    });
                }

                return res.redirect('/article')
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

            return res.redirect('/article')
        });
    }
};
