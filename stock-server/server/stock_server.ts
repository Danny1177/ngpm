/**
 * Created by mycroft on 2018/1/1.
 */
import * as express from 'express';


const app = express();

app.listen(8000,() => {
  console.log('Server have been started with address: "http://localhost:8000" ');
});

app.get('/api/stock', (req, res) => {
   let result = stocks;
   let params = req.query;
   if(params.name){
     result = result.filter(stock => stock.name.indexOf(params.name));
   }
   res.json(result);
});

app.get('/api/stock/:id',(req, res) => {
   res.json(stocks.find(stock => stock.id == req.params.id));
});


export  class Stock {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ){

  }
}

const stocks: Stock[] =  [
  new Stock(1,"HSBC",75,4.0,"Banking Corporation",["Finance"]),
  new Stock(2,"APPLE",300,4.5,"Leading company",["TECH","IT"]),
  new Stock(3,"TENCENT",160,4.0,"Social Message",["IT"]),
  new Stock(4,"Alibaba",100,4.0,"E-commerce",["IT"]),
  new Stock(5,"GOOGLE",200,4.0,"Search Engine",["IT"]),
  new Stock(6,"ChinaLife",75,3.5,"Motor Corporation",["Insurance"])
];

//
//
//
//
var mongoose = require('mongoose');
var Person = require('../build/user');

mongoose.connect('mongodb://localhost/db1');
mongoose.connection.on('connected',function () {
  console.log('connect successfully')
});

Person.create([
  { name: "Mycroft", gender: "Male", age: 21, phone: 51938273, department: "IT", degree: "Bachelor", jobNumber: 12345678 },
  { name: "Danny", gender: "Male", age: 21, phone: 51938273, department: "IT", degree: "Bachelor", jobNumber: 12312338 },
  { name: "Joe", gender: "Male", age: 21, phone: 51938273, department: "IT", degree: "Bachelor", jobNumber: 41235678 },
  { name: "Edmond", gender: "Male", age: 21, phone: 51938273, department: "IT", degree: "Bachelor", jobNumber: 47983678 }
]);

var result;
setTimeout(() => {
  Person.find({}, function (err, res) {
    if (err) {
      console.log('err');
    }
    else {
      result = res;
    }
  });
},100);


app.get('/api/person', function (req, res) {
  res.json(result);
});



