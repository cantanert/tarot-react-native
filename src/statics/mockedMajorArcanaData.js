import statics from "./enumStatics";

const imageUrlRoot = statics.unsplashRootUrl;
const imageParameters = statics.unsplashImageParameters;
const sampleImageID = "1576011710428-e421a5ad7619";

const mockedMajorArcanaData = {
    sampleData : [
        {name:"The Fool" ,image: imageUrlRoot + sampleImageID + imageParameters},
        {name:"The Magician" ,image: imageUrlRoot + sampleImageID + imageParameters},
        {name:"The High Priestess" ,image: imageUrlRoot + sampleImageID + imageParameters},
        {name:"The Empress" ,image: imageUrlRoot + sampleImageID + imageParameters},
        {name:"The Emperor" ,image: imageUrlRoot + sampleImageID + imageParameters},
        {name:"The Hierophant" ,image: imageUrlRoot + sampleImageID + imageParameters},
        {name:"The Lovers" ,image: imageUrlRoot + sampleImageID + imageParameters},
        {name:"The Chariot" ,image: imageUrlRoot + sampleImageID + imageParameters},
        {name:"Strength" ,image: imageUrlRoot + sampleImageID + imageParameters},
        {name:"The Hermit" ,image: imageUrlRoot + sampleImageID + imageParameters},
        {name:"Whell Fortune" ,image: imageUrlRoot + sampleImageID + imageParameters},
        {name:"Justice" ,image: imageUrlRoot + sampleImageID + imageParameters},
        {name:"The Hanged Man" ,image: imageUrlRoot + sampleImageID + imageParameters},
        {name:"Death" ,image: imageUrlRoot + sampleImageID + imageParameters},
        {name:"Temperance" ,image: imageUrlRoot + sampleImageID + imageParameters},
        {name:"The Devil" ,image: imageUrlRoot + sampleImageID + imageParameters},
        {name:"The Tower" ,image: imageUrlRoot + sampleImageID + imageParameters},
        {name:"The Star" ,image: imageUrlRoot + sampleImageID + imageParameters},
        {name:"The Moon" ,image: imageUrlRoot + sampleImageID + imageParameters},
        {name:"The Sun" ,image: imageUrlRoot + sampleImageID + imageParameters},
        {name:"Judgement" ,image: imageUrlRoot + sampleImageID + imageParameters},
        {name:"The World" ,image: imageUrlRoot + sampleImageID + imageParameters}
    ]
}
export default mockedMajorArcanaData;