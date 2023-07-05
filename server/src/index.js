const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;
const connectToMongo = require("./db");

app.use(cors());
app.use(express.json());

connectToMongo();

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
