class Carousel {
    constructor(element) {
        // assign this.element to the element reference
        this.element = element;
        // create a reference to the '.left-button' class
        this.leftButton = this.element.querySelector('.left-button');
        // create a reference to the '.right-button' class
        this.rightButton = this.element.querySelector('.right-button');
        // Set a click handler on the leftButton reference, calling the clickLeft method
        this.element.addEventListener('click', this.clickLeft);
        // Set a click handler on the rightButton reference, calling the clickRight method
        this.element.addEventListener('click', this.clickRight);
        // create a reference to the '.carousel-img' class
        this.carouselImgs= this.element.querySelector('.carousel-img');
    }

    clickLeft() {
        // Iterate through the NodeList setting the display style each one to 'none'
        this.carouselImgs.forEach(img => img.style.display = 'none');
        // if the current index image is display none, display block
        if () {

        } else {

        }
    }

    clickRight() {
        // Iterate through the NodeList setting the display style each one to 'none'
        this.carouselImgs.forEach(img => img.style.display = 'none');
        // if the current index image is display none, display block
        if () {

        } else {

        }
    }
}

let carousel = document.querySelector('.carousel');
carousel = Array.from(carousel).map( carousel => new Carousel(carousel));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/