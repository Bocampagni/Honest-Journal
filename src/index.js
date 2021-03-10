const express = require("express");
const app = express();



app.get("/", (req,res) => {
    res.send("Be honest")
})



app.listen(3000, () =>{
    console.log("Being Honest at 3000")
}
)