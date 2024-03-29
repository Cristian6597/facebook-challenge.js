const express = require('express')
const router = express.Router()
const controller = require('../controllers/controllers')

router.get('/', controller.getHomepage)
router.all('/add-article', controller.postNewArticle)
router.get('/article/:id', controller.showOneArticle)

router.all('/edit-article/:id', controller.updateOneArticle)

/* router.get('/delete-article/:id', controller.deleteOneArticle) */
route.delete("/be/del/article/:_id", controller.deleteArticle);

module.exports = router