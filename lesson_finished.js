const fs = require('fs');

function getLibrary() {
  return JSON.parse(fs.readFileSync('movies.json', 'utf8'));
}

function handleArgs() {
  return process.argv.map(function (val, index, array) {
      return val;
  });
}

function findMovie() {
  const library = getLibrary()
}

findMovie();