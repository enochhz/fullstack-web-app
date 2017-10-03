module.exports = app => {
    app.get("/auth/google", (req, res) => {
      res.send("to do auth google");
    });
};
