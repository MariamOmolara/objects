// Question 1 
function InstagramPost(
    HandleOfAuthor,
    Content,
    ImageLink,
    NumberOfView,
    NumberOfLikes,

) {
    this.HandleOfAuthor = HandleOfAuthor;
    this.Content = Content;
    this.ImageLink = ImageLink;
    this.NumberOfView = NumberOfView;
    this.NumberOfLikes = NumberOfLikes;
}

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
    console.log ( presidentialCandidates[party] + "is the presidentila candidates of" + party )

 }

