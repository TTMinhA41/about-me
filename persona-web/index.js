const doc = document;
const myPersona = '{"name": "Phan Minh Anh", "job": "Students", "from": "Dak Mil, Vietnam", "email": "nhuquynh.060886@gmail.com", "phonenum": "+84 946456634"}'
const myObj = JSON.parse(myPersona)
const header = doc.querySelector('#header')

doc.getElementById('name').innerHTML = myObj.name
doc.getElementById('say-hi').innerHTML = "Hi, I'm " + myObj.name
// doc.getElementById('say-job').innerHTML = myObj.job
doc.getElementById('email').innerHTML = myObj.email
doc.getElementById('from').innerHTML = myObj.from
doc.getElementById('phone').innerHTML = myObj.phonenum



function handleScroll() {
    if (window.scrollY > 50) {
        header.classList.add('scroll-fixed')
    }
    else {
        header.classList.remove('scroll-fixed')
    }
}
window.addEventListener('scroll', handleScroll)



doc.addEventListener("DOMContentLoaded", function () {
    const texts = [
        "Students",
        "Web Designer",
        "Etc."
    ]
    const typingTextElement = doc.getElementById('say-job')
    let textIndex = 0
    let charIndex = 0
    const delayLoop = 200;
    const typingSpeed = 200;

    function type() {
        if (charIndex < texts[textIndex].length) {
            typingTextElement.innerHTML += texts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed)
        }
        else {
            setTimeout(() => {
                charIndex = 0;
                textIndex = (textIndex + 1) % texts.length
                typingTextElement.innerHTML = "";
                setTimeout(type, typingSpeed);
            }, delayLoop)
        }
    }

    setTimeout(type, delayLoop);
})






function openModel() {
    doc.getElementById('img-model').style.display = "block"
}

function closeModel() {
    doc.getElementById('img-model').style.display = "none"
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n)
    console.log(slideIndex);
}

function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    var i;
    var slides = doc.getElementsByClassName('my-slides');
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
    }
    slides[slideIndex - 1].style.display = 'block'
}

document.addEventListener('DOMContentLoaded', function () {
    const targetDiv = document.getElementById('achs');
    const counters = document.querySelectorAll('.counter');
    let startedFlag = false;
    let intervalId;

    function checkVisibility() {
        const rect = targetDiv.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            if (!startedFlag) {
                startedFlag = true;
                counters.forEach(counter => {
                    counter.innerText = '0';
                    const target = +counter.getAttribute('data-target');
                    const textSpeed = target / 100;

                    intervalId = setInterval(() => {
                        const count = +counter.innerText;
                        if (count < target) {
                            counter.innerText = Math.ceil(count + textSpeed);
                        } else {
                            counter.innerText = target;
                            clearInterval(intervalId);
                        }
                    }, 20);
                });
            }
        } else {
            if (startedFlag) {
                startedFlag = false;
                counters.forEach(counter => {
                    counter.innerText = '0';
                });
                clearInterval(intervalId);
            }
        }
    }

    window.addEventListener('scroll', checkVisibility);
});
