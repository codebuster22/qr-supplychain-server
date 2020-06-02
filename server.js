const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');

const db = [];

const data = {
    EWB: 491113349081,
    consigner: "Namrah Saree",
    consignee: "Sunil Textiles",
    articles:{
        "Handloom Goods": 4,
    },
    date: new Date("02 March 2020"),
    from: "Varanasi",
    to: "Belgaum"
}

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post('/fillDetails',(req,res)=>{
    console.log(req.body);
    const {consigner, consignee, articles, date,from,to, EWB} = req.body;
    db.push({EWB,consigner, consignee, articles, date,from,to});
    res.json({
        flag: true,
        remark: "Data Saved",
    });
    console.log(db);
})

app.get('/profile/:EWB',(req,res)=>{
    const {EWB} = req.params;
    console.log(EWB)
    const data = (db.find(each=>{
        console.log(each,EWB)
        return each.EWB===EWB;
    }));
    console.log('Data',data);
    res.json(data);
})

app.get('/',(req,res)=>{
    res.json('Working');
    console.log('Working');
})

app.listen( process.env.PORT ||3001,()=>console.log("Listening"))