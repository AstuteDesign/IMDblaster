//http://www.omdbapi.com/?i=tt3896198&apikey=146f7299
//http://www.omdbapi.com/?apikey=146f7299&t=batman
//http://www.omdbapi.com/?apikey=146f7299&s=beautiful&y=2012
const request = require('request');
const http = require('https')
const fs =require('fs');


request('http://www.omdbapi.com/?apikey=146f7299&t=batman', function (error, response, body) {

  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  let data = JSON.parse(body);
  const file = fs.createWriteStream(`./${data.Title} (${data.Year}).jpg`);
  console.log(data.Poster);
  const request = http.get(data.Poster, function(response) {
  response.pipe(file);
});
  

});



