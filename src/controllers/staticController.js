module.exports = {
    index(req, res, next) {
        //res.send("Welcome to bloccit");
        res.render("static/index", {title: "Welcome to Bloccit"});
    }
}