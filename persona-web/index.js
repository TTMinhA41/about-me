const myPersona = '{"name": "Phan Minh Anh", "job": "Students", "from": "Dak Mil, Vietnam", "email": "nhuquynh.060886@gmail.com", "phonenum": "+84 946456634"}'
const myObj = JSON.parse(myPersona)
const header = document.querySelector('#header')
const doc = document

doc.getElementById('name').innerHTML = myObj.name
doc.getElementById('say-hi').innerHTML = "Hi, I'm " + myObj.name
// doc.getElementById('say-job').innerHTML = myObj.job
doc.getElementById('email').innerHTML = myObj.email
doc.getElementById('from').innerHTML = myObj.from
doc.getElementById('phone').innerHTML = myObj.phonenum



function handleScroll() {
    if (window.scrollY > 50){
        header.classList.add('scroll-fixed')
    }
    else{
        header.classList.remove('scroll-fixed')
    }
}
window.addEventListener('scroll', handleScroll)


doc.addEventListener("DOMContentLoaded", function(){
    const texts = [
        "Students",
        "Web Designer",
        "Introverter"
    ]
    const typingTextElement = doc.getElementById('say-job')
    let textIndex = 0
    let charIndex = 0
    const delayLoop = 250;
    const typingSpeed = 250;

    function type(){
        if (charIndex < texts[textIndex].length){
            typingTextElement.innerHTML += texts[textIndex].charAt(charIndex);
            charIndex ++;
            setTimeout(type, typingSpeed)
        }
        else{
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