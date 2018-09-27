const fs = require('fs');

function getLibrary() {
  return JSON.parse(fs.readFileSync('movies.json', 'utf8'));
}

function handleArgs() {
  return process.argv.map(function (val, index, array) {
      return val;
  });
}

function getQuery(type){
  switch(type){
    case 'consoleArg':
    const query = handleArgs();
    return query[2];
    case 'user':
    const lib = handleArgs();
    return lib.slice(3);
    default:
    return;
  }
}

function search(lib, queryType, userQuery){
  switch(queryType){
    case 'title':
    return lib.filter( (item) => {
      const currentTile = item.title.toLowerCase();
      return currentTile.includes(userQuery);
  });
    case 'id':
    return lib.filter( (item) => {
      const currentTile = item.id;
      return currentTile.includes(userQuery);
    });
    case 'rank':
    return lib.filter( (item) => {
      return item.rank === userQuery && item.rank;
    });
  }
}

function findMovie(){
  const userQuery = getQuery('user');

  switch(getQuery('consoleArg') ){
    case 'title':
        userQuery.map( (singleTitle) => {
          return console.log(search(getLibrary(), getQuery('consoleArg'), singleTitle) );
        });
        break;
    case 'id':
        userQuery.map( (singleID) =>{
          return console.log(search(getLibrary(), getQuery('consoleArg'), singleID) );
        });
    break;
    case 'rank':
        userQuery.map( (singleRank) => {
          return console.log(search(getLibrary(),getQuery('consoleArg'), singleRank) );
        });
    break;
    default:
    console.log('Wrong parameter.');
    break;
  }
}

findMovie();