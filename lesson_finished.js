const fs = require('fs');

function getLibrary() {
  return JSON.parse(fs.readFileSync('movies.json', 'utf8'));
}

function handleArgs() {
  return process.argv.map(function (val, index, array) {
      return val;
  });
}

function getQueryType(){
  const query = handleArgs();
  return query[2];
}

function getQuery(){
  const lib = handleArgs();
  return lib.slice(3);
}

function searchByTitle(lib, qItem){
    return lib.filter( (item) => {
      const currentTile = item.title.toLowerCase();
      return currentTile.includes(qItem);
    })
}

function searchById(lib, qID){
  return lib.filter( (item) => {
    const currentTile = item.id;
    return currentTile.includes(qID);
  })
}

function searchByRank(lib, qRank){
  return lib.filter( (item) => {
    return item.rank === qRank && item.rank;
  })
}

function findMovie(){
  const queryArray = getQuery();
  const library = getLibrary();

  switch(getQueryType() ){
    case 'title':
        const searchResults = queryArray.map( (singleTitle) => {
          return searchByTitle(library, singleTitle);
        });
        break;
    case 'id':
        const searchResultsID = queryArray.map( (singleID) =>{
          return searchById(library, singleID);
        })
        console.log(searchResultsID);
    break;
    case 'rank':
        const searchResultsRank = queryArray.map( (singleRank) => {
          return searchByRank(library, singleRank);
        })
        console.log(searchResultsRank);
    break;
    default:
    console.log('Wrong parameter.');
    break;
  }
}

findMovie();