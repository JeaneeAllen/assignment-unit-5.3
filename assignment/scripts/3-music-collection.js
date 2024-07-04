console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];  // create an empty array for myCollection

function addToCollection(collection, title, artist, yearPublished) { // define a function named "addToCollection" that takes in the collection parameter
let myAlbums = {                                                     // create an object with key/value properties
  title: 'title',                                                      // object property (title)
  artist: 'artist',                                                    // object property (artist)
  yearPublished: 'yearPublished'                                       // object property (year published)
};

collection.push(myAlbums);                                           // push new objects to collection array
return myAlbums                                                      // return myAlbum onjects
}

addToCollection(myCollection, "The Album About Nothing", "Wale", 2015);                  //use addToCollection function to add albums to myCollection
addToCollection(myCollection, "Ambition", "Wale", 2011);                                 //use addToCollection function to add albums to myCollection
addToCollection(myCollection, "Traveller", "Chris Stapleton", 2015);                     //use addToCollection function to add albums to myCollection
addToCollection(myCollection, "The Miseducation of Lauryn Hill", "Lauryn Hill", 1998);   //use addToCollection function to add albums to myCollection
addToCollection(myCollection, "Illmatic", "Nas", 1994);                                  //use addToCollection function to add albums to myCollection
addToCollection(myCollection, "Go for Your Guns","The Isley Brothers", 1977);            //use addToCollection function to add albums to myCollection

console.log("my album", myCollection);                            // use console.log to display album collection "myCollection"

function showCollection(collection) {                                 // define a function named "showCollection" that takes in the collection parameter
  for (let items of collection) {                                     // loop through items in the album collection
console.log(`${items.title} by ${items.artist}, published in ${items.yearPublished}`);   // construct a string & console.log results
  }
}
  let collection = [                                                 // variable named collection w/ an array of album titles, artists, and year published
    {title: 'The Album About Nothing', artist: 'Wale', yearPublished: 2015},
    {title: 'Ambition', artist: 'Wale', yearPublished: 2011},
    {title: 'Traveller', artist: 'Chris Stapleton', yearPublished: 2015},
    {title: 'The Miseducation of Lauryn Hill', artist: 'Lauryn Hill', yearPublished: 1998},
    {title: 'Illmatic', artist: 'Nas', yearPublished: 1994},
    {title: 'Go for Your Guns', artist: 'The Isley Brothers', yearPublished: 1977}
  ]
  showCollection(myCollection);                                     // display each album in myCollection
  console.log(collection);                                          // shows collection array

  function findByArtist(collection, artist){                        // create a function names "findByArtist"
  let results = []                                                // empty array to collect artist results
  for (let album of collection){                                    // loop through albums of collection to
    if (album.artist === artist)                                    // check for artist in collection of albums and
    results.push(album);                                          // push results to empty results array
  }
    return results                                                    // return results
  }

let firstArtist = findByArtist(myCollection, 'Wale');               // test function by searching for an artist
showCollection(firstArtist);

let secondArtist = findByArtist(myCollection, 'Omarion')
showCollection(secondArtist);


  

// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
