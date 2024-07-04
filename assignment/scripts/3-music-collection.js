console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

const myCollection = [''];

function addToCollection(collection, title, artist, yearPublished) {
let myAlbums = {
title: title,
artist: artist,
yearPublished: yearPublished
};
collection.push(myAlbums);
return myAlbums
}

addToCollection(myCollection, "The Album About Nothing", "Wale", 2015);
addToCollection(myCollection, "Ambition", "Wale", 2011);
addToCollection(myCollection, "Traveller", "Chris Stapleton", 2015);
addToCollection(myCollection, "The Miseducation of Lauryn Hill", "Lauryn Hill", 1998);
addToCollection(myCollection, "Illmatic", "Nas", 1994);
addToCollection(myCollection, "Go for Your Guns","The Isley Brothers", 1977);

console.log(myCollection)





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
