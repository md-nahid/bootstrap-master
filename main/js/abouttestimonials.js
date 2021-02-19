let goRight = document.querySelector(".goright");
let goLeft = document.querySelector(".goleft");
let slideItemsAll = document.querySelectorAll(".slideItem");
let slideIndicatorsAll = document.querySelectorAll(".slideIndicators>span");

// right button function
goRight.addEventListener("click", () => {
    let current = document.querySelector(".slideItemActive");
    let currentSlideIndicator = document.querySelector(".slideIndicatorActive");
    current.classList.remove("slideItemActive");
    currentSlideIndicator.classList.remove("slideIndicatorActive");
    if(current.nextElementSibling && currentSlideIndicator.nextElementSibling) {
        current.nextElementSibling.classList.add("slideItemActive");
        currentSlideIndicator.nextElementSibling.classList.add("slideIndicatorActive");
    }else {
        slideItemsAll[0].classList.add("slideItemActive");
        slideIndicatorsAll[0].classList.add("slideIndicatorActive");
    }
});

// left button function
goLeft.addEventListener("click", () => {
    let current = document.querySelector(".slideItemActive");
    let currentSlideIndicator = document.querySelector(".slideIndicatorActive");
    current.classList.remove("slideItemActive");
    currentSlideIndicator.classList.remove("slideIndicatorActive");
    if(current.previousElementSibling && currentSlideIndicator.previousElementSibling) {
        current.previousElementSibling.classList.add("slideItemActive");
        currentSlideIndicator.previousElementSibling.classList.add("slideIndicatorActive");
    }else {
        slideItemsAll[2].classList.add("slideItemActive");
        slideIndicatorsAll[2].classList.add("slideIndicatorActive");
    }
});

// slide indicators click function
slideIndicatorsAll.forEach((item) => {
    item.addEventListener("click", (e) => {
        slideIndicatorsAll.forEach((item) => {
            if(item.classList.contains("slideIndicatorActive")) {
                item.classList.remove("slideIndicatorActive");
                e.target.classList.add("slideIndicatorActive");
                if(e.target.id == "slideIndicator1") {
                    slideItemsAll.forEach((item) => {
                        item.classList.remove("slideItemActive");
                        slideItemsAll[0].classList.add("slideItemActive");
                    })
                }
                if(e.target.id == "slideIndicator2") {
                    slideItemsAll.forEach((item) => {
                        item.classList.remove("slideItemActive");
                        slideItemsAll[1].classList.add("slideItemActive");
                    })
                }
                if(e.target.id == "slideIndicator3") {
                    slideItemsAll.forEach((item) => {
                        item.classList.remove("slideItemActive");
                        slideItemsAll[2].classList.add("slideItemActive");
                    })
                }
            }
        })
    })
})

