const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Server has started!");
})

const PORT = process.env.PORT || 80;
app.listen(PORT);