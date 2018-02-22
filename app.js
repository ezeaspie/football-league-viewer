const request = require('request');
const express = require("express");
const app = express();
app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req,res) => {
  const optionsPL = {
    url: 'http://api.football-data.org/v1/competitions/445/leagueTable',
    headers: {
      'X-Auth-Token': 'f27b0743b5f543a1afea5327aa1e6776',
    }
  };

  const optionsLL = {
    url: 'http://api.football-data.org/v1/competitions/455/leagueTable',
    headers: {
      'X-Auth-Token': 'f27b0743b5f543a1afea5327aa1e6776',
    }
  };

  const optionsSA = {
    url: 'http://api.football-data.org/v1/competitions/456/leagueTable',
    headers: {
      'X-Auth-Token': 'f27b0743b5f543a1afea5327aa1e6776',
    }
  };

  const optionsBL = {
    url: 'http://api.football-data.org/v1/competitions/452/leagueTable',
    headers: {
      'X-Auth-Token': 'f27b0743b5f543a1afea5327aa1e6776',
    }
  };

  const optionsL1 = {
    url: 'http://api.football-data.org/v1/competitions/450/leagueTable',
    headers: {
      'X-Auth-Token': 'f27b0743b5f543a1afea5327aa1e6776',
    }
  };

//Premier League
  callback = (error,response,body) => {
    if (!error && response.statusCode == 200){
      let dataPL = JSON.parse(body);
//La Liga
      callbackLL = (error,response,body) => {
        if (!error && response.statusCode == 200){
          let dataLL = JSON.parse(body);
//Serie A
          callbackSA = (error,response,body) => {
            if(!error && response.statusCode == 200){
              let dataSA = JSON.parse(body);
//Bundesliga
              callbackBL = (error,response,body) =>{
                if(!error && response.statusCode == 200){
                  let dataBL = JSON.parse(body);
//Ligue 1
                  callbackL1 = (error,response,body) => {
                    if (!error && response.statusCode == 200) {
                      let dataL1 = JSON.parse(body);
                      res.render("results", {dataPL, dataLL, dataSA, dataBL, dataL1});
                    }
                  }
                  request(optionsL1, callbackL1);
                }
              }
              request(optionsBL, callbackBL);
            }
          }
          request(optionsSA, callbackSA);
        }
      }
      request(optionsLL,callbackLL);
    }
  }
  request(optionsPL,callback);
});

const port_number = server.listen(process.env.PORT || 3000);

app.listen(port_number);
