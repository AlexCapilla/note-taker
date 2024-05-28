const express = require("express");


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
app.get("/api/notes", (req, res) => {
    
})


// Optimize


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})