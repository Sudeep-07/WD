import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {

const today = new Date();
const day = today.getDate();

let type = "a weekday";
let adv = "it's time to work hark";

if(day === 0 || day === 6) {
   type = "the weekend";
   adv = "it's time to have fun ";
}

  res.render("solution.ejs", {
    daytype: type,
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`server running on port ${port}. `);
});