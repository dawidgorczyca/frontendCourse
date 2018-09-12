const fs = require('fs');

function getLibrary() {
  return JSON.parse(fs.readFileSync('movies.json', 'utf8'));
}

function handleArgs() {
  return process.argv.map(function (val, index, array) {
      return val;
  });
}

function getSearchQuery(){
  const args = handleArgs();
  return args[2].toLowerCase();
}

function searchMovieByTitle(lib, query) {
  return lib.filter((item, index) => {
    const currentTile = item.title.toLowerCase();
    return currentTile.includes(query);
  });
}


function findMovieByName() {
  const library = getLibrary();
  const findQuery = getSearchQuery();
  const results = searchMovieByTitle(library, findQuery);
  
  return results && results.length > 0 ? results : 'no match found';
  //     ^ this conditional as big if
  // if(results && results.length > 0) {
  //   return results;
  // } else {
  //   return 'no match';
  // }
}

console.log(findMovieByName());