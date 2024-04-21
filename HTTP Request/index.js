import express from "express";
const app=express();
const port =3000;

app.get("/",(req,res)=>{
    // console.log(req.rawHeaders);
    res.send("<h1>Hello , Santosh!</h1>");
});
app.get("/about",(req,res)=>{
    // console.log(req.rawHeaders);
    res.send("<h1>About Me!</h1> <p>School : Sainik school Kazhakootam!</p>  <p>Occupation : Jr Software Engineer!</p> <p>Location : C-515 ,A2, Saket</p>");
});

app.get("/contact",(req,res)=>{
    // console.log(req.rawHeaders);
    res.send("<h1>Contact Me </h1> <p>Mobile: 9993953453 </p> <p>Email:santoshleo9z@gmail.com</>p  <p>Office Email : santosh.kumar@ocr-inc.com</p>");
});

app.post("/register",(req,res)=>{
    // console.log(req.rawHeaders);
    res.sendStatus(201);
});

app.put("/user/santosh",(req,res)=>{
    // console.log(req.rawHeaders);
    res.sendStatus(200);
});

app.post("/register",(req,res)=>{
    // console.log(req.rawHeaders);
    res.sendStatus(201);
});

app.patch("/user/santosh",(req,res)=>{
    // console.log(req.rawHeaders);
    res.sendStatus(200);
});

app.delete("/user/santosh",(req,res)=>{
    // console.log(req.rawHeaders);
    res.sendStatus(200);
});





app.listen(port, ()=>{
    console.log(`Server running on port ${port}.`);
}
);