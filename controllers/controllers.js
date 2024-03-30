const { Article } = require("../models/article");

const getHomepage = (req, res) => {
  Article.find()
    .then((result) => {
      console.log(result);
      res.render("index", { result });
    })
    .catch((err) => console.log(err));
};

const postNewArticle = (req, res) => {
  if (req.method === "GET") {
    res.render("addArticle", { err: false });
  }

  if (req.method === "POST") {
    const article = new Article(req.body);
    article
      .save()
      .then(() => res.redirect("/"))
      .catch((err) => {
        console.log(err);
        res.render("addArticle", { err: err.errors });
      });
    // add new post
  }
};

const showOneArticle = (req, res) => {
  Article.findById({ _id: req.params.id })
    .then((result) => {
      console.log(result);
      res.render("showOne", { result });
    })
    .catch((err) => console.log(err));
};

const updateOneArticle = (req, res) => {
  if (req.method === "GET") {
    Article.findById(req.params.id)
      .then((result) => {
        console.log(result);
        res.render("editArticle", { result });
      })
      .catch((err) => console.log(err));
  }
  if (req.method === "POST") {
    Article.findByIdAndUpdate(req.params.id)
      .then((result) => {
        result.title = req.body.title;
        result.article = req.body.article;
        result
          .save()
          .then(() => res.redirect("/"))
          .catch((err) => {
        console.log(err);
        res.render("addArticle", { err: err.errors });
      });
      })
      .catch((err) => console.log(err));
  }
};

const deleteOneArticle = (req, res) => {
  const articleId = req.params.id;

  Article.findByIdAndDelete(articleId)
    .then((result) => {
      if (!result) {
        console.log("Articolo non trovato");
        return res.status(404).send("Articolo non trovato");
      }
      console.log("Articolo cancellato con successo");
      res.redirect("/");
    })
    .catch((err) => {
      console.log("Errore durante la cancellazione dell'articolo:", err);
      res
        .status(500)
        .send(
          "Si è verificato un errore durante la cancellazione dell'articolo"
        );
    });
};

module.exports = {
  getHomepage,
  postNewArticle,
  showOneArticle,
  updateOneArticle,
  deleteOneArticle,
};
