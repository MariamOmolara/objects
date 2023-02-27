// Question 1 
function InstagramPost(
    handleOfAuthor,
    content,
    imageLink,
    numberOfView,
    numberOfLikes,

) {
    this.handleOfAuthor = handleOfAuthor;
    this.content = content;
    this.imageLink = imageLink;
    this.numberOfView = numberOfView;
    this.numberOfLikes = numberOfLikes;
}
const myInstagramPost = new InstagramPost ('mariam111', 'I love reading', {}, 1054, 205 )
console.log(myInstagramPost);

/* Question 2; 
Create 2 Instagram post objects from the constructor function you created above
 */

// 1
const jumaiInstagramPost = new InstagramPost ('Jumai_H', 'Chilling with the girls', 'https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books_23-2149334862.jpg?w=2000', 5006, 1005 )
console.log(jumaiInstagramPost);
// 2
const tobiInstagramPost = new InstagramPost ('Tobiiii', 'I love to design', {}, 1054, 205 )
console.log(tobiInstagramPost);




// Question 5
const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
}
// Enumeration Method: For..in

for( let party in presidentialCandidates ){
    console.log(party)
    console.log(presidentialCandidates[party] )
    console.log(`${presidentialCandidates[party]} is the presidential candidate of ${party}`)
 }
 // Enumeration Method: For..of
 for ( let key of Object.keys(presidentialCandidates)){
    console.log(key)
    console.log(presidentialCandidates[key])
    console.log(`${presidentialCandidates[key]} is the presidential candidate of ${key}`)

 }

