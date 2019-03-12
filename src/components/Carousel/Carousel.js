class Carousel {    
    constructor(imageArr, imgContainer, btnLeft, btnRight){
        this.currentIndex = 0
        this.btnLeft = btnLeft
        this.btnRight = btnRight
        this.imageArr = imageArr
        this.imgContainer = imgContainer
        this.btnLeft.addEventListener('click', function(){
            this.prevImage()
        }.bind(this))

        this.btnRight.addEventListener('click', ()=> {
            this.nextImage()
        })
        this.showImage()
    }
    nextImage(){
        if(this.currentIndex >= this.imageArr.length-1){
            this.currentIndex = 0
        }else{
            this.currentIndex++
        }
        this.showImage()
    }
    prevImage(){
        console.log(this.currentIndex)
        if(this.currentIndex <=0){
            this.currentIndex = this.imageArr.length-1
        }else{
            this.currentIndex--
        }
        this.showImage()
    }
    showImage(){
        this.imageArr.forEach(el => el.classList.remove("showImg"))
        this.imageArr[this.currentIndex].classList.add("showImg")
        let imageWidth = this.imgContainer.offsetWidth//this.imageContainer.getComputedStyle(this.imgContainer).
        this.imgContainer.style.transform = `translateX(${(imageWidth * (this.currentIndex)) * -1}px)`
        console.log(this.imgContainer.style.transform)
        console.log(this.currentIndex)
    }
}

let carousel = document.querySelector('.carousel');
let caroselBtnLeft = carousel.querySelector('.left-button')
let caroselBtnRight= carousel.querySelector('.right-button')
let carouselImgs = carousel.querySelectorAll('img')
let imgContainer = carousel.querySelector('.img-container')
let carouselObj = new Carousel(Array.from(carouselImgs), imgContainer, caroselBtnLeft, caroselBtnRight)

console.log(carouselObj)
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/


