const express = require("express");
const app = express();

app.set("view engine","ejs");
app.set("views","./views");

app.get("/",(req,res)=>{
    res.render("portfolio");
})

app.listen(4000, () => {
  console.log('✅ Server start at http://localhost:4000');
});