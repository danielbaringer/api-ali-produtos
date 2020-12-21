
const util = require('util')
const express = require('express');
const cors = require('cors');
const http = require('http');
const axios = require('axios');
const app = express();

const ApiClientAliExpress = require('./aliexpress/aliexpress');

async function pegaProdutosGenericos(switchTab) { 
  var result = await ApiClientAliExpress.hotProducts(switchTab); 
  //console.log(result);
  return result
}

app.use(cors());
app.use(express.json());

app.get("/api/v1/aliexpress/produtos/genericos/:keyCat?", async (req, res) => {
  var keyCat = req.params.keyCat;
  const resp = await pegaProdutosGenericos(keyCat);
  //console.log(resp);
 res.json(resp);
});

app.get("/", async (req, res) => {  
  res.json({});
});

app.get("/testando", async (req, res) => {  
  res.json({});
});

app.get("/random", async (req, res) => {  
  min = Math.ceil(1);
  max = Math.floor(5);
  result =  Math.floor(Math.random() * (max - min + 1)) + min;
  res.json(result);
});


app.listen(3000, () => {
  console.log("Server running on port 3000");
});