const galleryArray=['cars1.jpg','cars2.jpg','cars3.jpg','cars4.jpg','cars5.jpg','cars6.jpg','cars7.jpg','cars8.jpg','cars9.jpg','cars10.jpg'];

const carGallery = document.getElementById('carGallery');



// GALLERY DIV CREATION 
let createGalleryDiv = document.createElement('div') ;
createGalleryDiv.setAttribute('id','galleryDiv')
carGallery.appendChild(createGalleryDiv);
const galleryDiv = document.getElementById('galleryDiv')

// BIG IMAGE CREATION 
let createBigImg = document.createElement('img')
createBigImg.src='assets/img/' + galleryArray[0];
createBigImg.setAttribute('id', 'bigImg')
galleryDiv.appendChild(createBigImg)
const bigImg = document.getElementById('bigImg')

//  TILE DIV CREATION 
let createTileDiv = document.createElement('div')
createTileDiv.setAttribute('id','tileDiv')
galleryDiv.appendChild(createTileDiv)
const tileDiv = document.getElementById('tileDiv')


// TILE IMG CREATION 
for(let i = 1;i < galleryArray.length; i++){
    if(galleryArray.length === 1) {
        break
    }
    let createTileImg = document.createElement('img')
    createTileImg.classList.add('tileImg')
    createTileImg.src = 'assets/img/' + galleryArray[i]
    createTileImg.onclick = imageSwitcher
    tileDiv.appendChild(createTileImg)


}

// TILE SWITCHER 
function imageSwitcher() {
    let mainImageSrc = bigImg.src
    let eventImageSrc = event.target.src

    bigImg.src = eventImageSrc
    event.target.src = mainImageSrc
}





