"use strict"
let form1 = document.forms.Feedback;

let uname = document.forms.Feedback.elements.uName;

let rbtn=form1.elements.radio_btn;

let mailId=form1.elements.email;

let text=form1.elements.txt;

let cbox=form1.elements[6];

let Sbtn=document.forms[0].elements[7];

let invalid=document.querySelector(".invalid1");

let check=document.querySelector(".check1");

let icon=document.getElementById("icon");

form1.addEventListener("submit", (event) => {
    event.preventDefault();

    invalid.classList.add("success");

    icon.style.display = "block";

    if (uname.value.trim() == "") {

        check.innerHTML = "Please enter your name...";

    }
    else if (rbtn.value == "") {
        check.innerHTML = "Please select your feedback type...";
    }
    else if (mailId.value == "") {
        check.innerHTML = "Please enter your email...";
    }
    else if (text.value == "") {
        check.innerHTML = "Please enter your Feed Back...";

    }

    else if (!(cbox.checked)) {
        check.innerHTML = "Please accept terms and conditions...";

    }

    else {
        console.log(uname.value);
        icon.style.display = "none";

        invalid.classList.add("invalid_content");
        check.innerHTML = "Submit Successfully!!...";
        form1.reset();
    }

    setTimeout(() => {
        invalid.classList.remove("success");
        invalid.classList.remove("invalid_content");

    }, 1700);


})

