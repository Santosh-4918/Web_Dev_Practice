import express from "express";

const app = express();
const port = 3000;

app.get("/", (req,res) =>{
    const today = new Date();

    const day = today.getDay();
    let type = " a weekday ";
    let adv = "it's time to work hard ";
    
    if (day === 0 || day === 6){
        type = "a Weekend ";
        adv = "it's time to have fun ";
    }




    res.render("index.ejs",{

        dayType:  type,
        advice: adv,
    });
});

app.listen(port, () =>{
console.log(`surver running on port ${port}.`);
});
