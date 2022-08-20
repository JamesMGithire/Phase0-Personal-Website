let nomad = document.getElementById('nomadHr')
let aElements = this.document.getElementsByClassName("nav-item");
let rect0 = aElements[0].getBoundingClientRect()
nomad.style.left = `${rect0.left}px`;
nomad.style.width = `${rect0.width - 25}px`
// https://usefulangle.com/post/113/javascript-detecting-element-visible-during-scroll
window.addEventListener('scroll',()=>{ 
    nomadFun();
    nomad.style.transition = "all 3s";
    nomad.style.left= (nomadFun());
});

function nomadFun () {
    // let nomad = document.getElementById('nomadHr');
    let element0 = document.querySelector('#page-top')
        .getBoundingClientRect();
    let element1 = document.querySelector('#my-services')
        .getBoundingClientRect();

    let aElements = this.document.getElementsByClassName("nav-item");
    let rect0 = aElements[0].getBoundingClientRect()
    let rect1 = aElements[1].getBoundingClientRect()
    nomad.style.left = `${rect0.left}px`
    // checking whether fully visible && position.bottom <= window.innerHeight
    // Get class section divs
    let secDivs = this.document.getElementsByClassName("section");
    try {
        for (el in secDivs) {
            if (secDivs[el].getBoundingClientRect().y <= 82 && secDivs[el].getBoundingClientRect().y >= -600) {
                nomad.style.width = `${aElements[el].getBoundingClientRect().width - 20}px`
                console.log('Element '+el +' is fully visible in screen at ' + secDivs[el].getBoundingClientRect().y);

                return `${aElements[el].getBoundingClientRect().left}px`;
            }
            console.log(secDivs[el].getBoundingClientRect().y);
        }
    }
    catch (err) {
        // Do nothing... Good boy.
    }
    // switch (true) {
    //     case element1.y <= 230 && element1.y >= -500:
    //         nomad.style.left = `${rect1.left}px`;
    //         nomad.style.width = `${rect1.width - 20}px`
    //         console.log('Element 1 is fully visible in screen at ' + element1.y);
    //         break;
    //     case element0.y <= 230 && element0.y >= -500:
    //         nomad.style.left = `${rect0.left}px`;
    //         nomad.style.width = `${rect0.width - 20}px`
    //         console.log('Element 0 is fully visible in screen at ' + element0.y);
    //         break;

    // }

}