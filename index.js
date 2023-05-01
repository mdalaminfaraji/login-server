const express=require('express');
const cors=require("cors");

const app=express();
app.use(cors());
const allServices=require("./data.json");
const port=5000
app.get('/',(req, res)=>{
    res.send('Hello World');
})

app.get("/allData", (req, res)=>{
    res.send(allServices);
})
app.get("/allData/:id", (req, res)=>{
    const id=req.params.id;
    const item=allServices[0].services.find(pd=>pd.id==id);
    res.send({item});
})
app.listen(port, ()=>{
    console.log(`"Example app listening on port ${ port}"`);
})