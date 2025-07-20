var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("activ-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("activ-tab")
}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

/*--------------Excel Storage script------------------------*/

const scriptURL = 'https://script.google.com/macros/s/AKfycbyZfN7cTuk5q5ZQK7828ayWuC4GcPHrIoJM5fPh97OPt6rY-fLFZGyJUgzpRIjt9Gs0/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => {
            msg.innerHTML = "Message sent Successfully"
            setTimeout(function() {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})