console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];  // `myCollection` array initialized as an empty array

function addToCollection(collection, title, artist, yearPublished) {
let myAlbums = {
  collection: collection,
  title: title,
  artist: artist,
  yearPublished: yearPublished
};

collection.push(myAlbums);
return myAlbums
}                           // `addToCollection` pushes record object into the array & returns the object

addToCollection(myCollection, "The Album About Nothing", "Wale", 2015);
addToCollection(myCollection, "Ambition", "Wale", 2011);
addToCollection(myCollection, "Traveller", "Chris Stapleton", 2015);
addToCollection(myCollection, "The Miseducation of Lauryn Hill", "Lauryn Hill", 1998);
addToCollection(myCollection, "Illmatic", "Nas", 1994);
addToCollection(myCollection, "Go for Your Guns","The Isley Brothers", 1977);

    console.log("my album", myCollection);   // Tested `addToCollection` by adding at least 6 albums & logged results

function showCollection(collection) {
  for (let items of collection) {
    console.log(`${items.title} by ${items.artist}, published in ${items.yearPublished}`);
  }
}
  let collection = [
    {title: 'The Album About Nothing', artist: 'Wale', yearPublished: 2015},
    {title: 'Ambition', artist: 'Wale', yearPublished: 2011},
    {title: 'Traveller', artist: 'Chris Stapleton', yearPublished: 2015},
    {title: 'The Miseducation of Lauryn Hill', artist: 'Lauryn Hill', yearPublished: 1998},
    {title: 'Illmatic', artist: 'Nas', yearPublished: 1994},
    {title: 'Go for Your Guns', artist: 'The Isley Brothers', yearPublished: 1977}
  ]
  console.log(collection);
  showCollection(myCollection); // `showCollection` takes in an array, loops over it, correctly logs each item
  

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
