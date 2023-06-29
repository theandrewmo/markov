/** Command-line tool to generate Markov text. */

const fs = require('fs');
const url = require('url');
const process = require('process');
const axios = require('axios');
const MarkovMachine = require('./markov');

function cat(path) {
    fs.readFile(path, 'utf-8', function(err, data) {
        if (err) {
            console.error('Error:', err)
            process.exit(1)
        }
        let mm = new MarkovMachine(data)
        console.log(mm.makeText())
    })

}

async function webCat(url) {
  try{
    const res = await axios.get(url)
    let mm = new MarkovMachine(res.data)
    console.log(mm.makeText())
  }
  catch(err) {
    console.error('Error:', err)
    process.exit(1)
  }
}

const userInput = process.argv[2];
const fileorurl = process.argv[3];

if (userInput == 'file') {
    cat(fileorurl)
}
else if (userInput == 'url') {
    webCat(fileorurl)  
}


