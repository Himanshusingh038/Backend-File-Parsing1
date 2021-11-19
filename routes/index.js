//Click method of importdata button, a GET request is sent to /import route. Inside import route,
// CSV file is parsed and data is inserted into MongoD

var express = require('express');
var csv = require("fast-csv");
var router = express.Router();
var fs = require('fs');

var mongoose = require('mongoose');

var Trade  = mongoose.model('Trades');

var csvfile = __dirname + "/../public/files/jaypee.csv";

//Create read stream method is used to read data incrementally 
var stream = fs.createReadStream(csvfile);


/* GET home page. */
//pug template file is rendered with title.
router.get('/', function(req, res, next) {

    res.render('index', { title: 'Import CSV using NodeJS' });

}).get('/import', function(req, res, next) {
    //data is streamed line by line into the data base which is good method to handle large database 
    //another method is to stream data in batch instead of chunk.. 
    var csvStream = csv()
        .on("data", function(data){
         
         var item = new Trade({
              C0: data[0] ,
              C1: data[1]   ,
              C2: data[2],
              C3: data[3],
              C4:data[4],
              C5:data[5],
              C6:data[6],
              C7:data[7],
              C8:data[8],
              C9:data[9],
              C10:data[10],
              C11:data[11],
              C12:data[12],
              C13:data[13],
              C14:data[14],
              C15:data[15],
              C16:data[16],
              C17:data[17],
              C18:data[18],
              C19:data[19],
              C20:data[20],
              C21:data[21],
              C22:data[22],
              C23:data[23],
              C24:data[24],
              C25:data[25],
              C26:data[26],
              C27:data[27],
              C28:data[28],
              C29:data[29],
              C30:data[30],
              C31:data[31],
              C32:data[32],
              C33:data[33],
              C34:data[34],
              C35:data[35],
              C36:data[36],
              C37:data[37],
              C38:data[38],
              C39:data[39],
              C40:data[40],
              C41:data[41],
              C42:data[42],
              C43:data[43],
              C44:data[44],
              C45:data[45],
              C46:data[46],
              C47:data[47],
              C48:data[48],
              C49:data[49],
              C50:data[50],
              C51:data[51],
              C52:data[52],
              C53:data[53],
              C54:data[54],
              C55:data[55],
              C56:data[56],
              C57:data[57],
              C58:data[58],
              C59:data[59],
              C60:data[60],
              C61:data[61],
              C62:data[62],
              C63:data[63],
              C64:data[64],
              C65:data[65],
              C66:data[66],
              C67:data[67],
              C68:data[68],
              C69:data[69],
              C70:data[0],
              C71:data[71],
              C72:data[72],
              C73:data[73]
         });
         
          item.save(function(error){
            console.log(item);
              if(error){
                   throw error;
              }
          }); 

    }).on("end", function(){

    });
  
    stream.pipe(csvStream);
    res.json({success : "Data imported successfully.", status : 200});

});
module.exports = router;
