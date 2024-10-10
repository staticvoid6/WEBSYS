function accountsDropDown() {
    const dropdown = document.getElementById("dropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

window.onclick = function(event) {
    const dropdown = document.getElementById("dropdown");
    const button = document.querySelector(".accounts button");

    if (!dropdown.contains(event.target) && !button.contains(event.target)) {
        dropdown.style.display = "none";
    }
}


var pageName =  window.location.pathname.split("/").pop();

if (pageName === "index1.html") {
    //Task: Add a button to your homepage that, when clicked, dynamically updates the content of a designated section on the page.
    function updateContent() {
        const header = document.getElementById("mainHeader");

        if(header.querySelector("h1").textContent === "Where Comfort Meets Convenience") {
            header.querySelector("h1").textContent = "Find a Great Place to Stay";
        } else {
            header.querySelector("h1").textContent = "Where Comfort Meets Convenience";
        }
    }

    //Task: Implement form validation for a contact or registration form on your website.
    function signUp(event) {
        event.preventDefault();
        const phoneNumber = document.getElementById('phoneNumber');

        if (phoneNumber.value.length < 10) {
            phoneNumber.value = "";
            phoneNumber.placeholder = "Phone number must be atleast 10 digits";
        } else {
            showAlert("You have successfuly signed up", exitPopUp)
        }

        function showAlert(message, callback) {
            alert(message);
            callback();
        }
    }

    function logIn(event) {
        event.preventDefault();
        const username = document.getElementById('email').value.split('@')[0];
        const accounts = document.getElementById('accounts');

        let changeMode = document.getElementById("changeMode");
        if (changeMode.innerText == "Dark mode") {
            changeMode = "Light mode";
        } else {
            changeMode = "Dark mode";
        }

        accounts.innerHTML = `
            <div>
                Lease a property
            </div>
            <button onclick="accountsDropDown()"><p>${username}</p></button>
            <div id="dropdown">
                <button onclick="messages()">Messages</button>
                <button onclick="wishList()">Wishlist</button>
                <button onclick="notification()">Notifications</button>
                <hr>
                <button onclick="changeTheme()" id="changeMode">${changeMode}</button>
                <button onclick="updateContent()" id="changeMode">Change header</button>
                <hr>
                <button onclick="support()">Support</button>
                <button onclick="logOut()">Logout</button>
            </div>
        `;

        changeTheme();
        exitPopUp();
    }

    function logOut() {
        const accounts = document.getElementById('accounts');

        let changeMode = document.getElementById("changeMode");
        if (changeMode.innerText == "Dark mode") {
            changeMode = "Light mode";
        } else {
            changeMode = "Dark mode";
        }

        accounts.innerHTML = `
            <button onclick="accountsDropDown()">Account</button>
            <div id="dropdown">
                <button onclick="logInPopUp()">LogIn</button>
                <button onclick="signUpPopUp()">SignUp</button>
                <hr>
                <button onclick="changeTheme()" id="changeMode">${changeMode}</button>
                <button onclick="updateContent()" id="changeMode">Change header</button>
                <hr>
                <button onclick="support()">Support</button>
            </div>
        `;

        changeTheme();
    }

    //Task: Allow the user to dynamically change the theme of your website using a “Change Theme” button
    function changeTheme() {
        const changeMode = document.getElementById("changeMode");
        const elements = document.querySelectorAll('.location, .propertyType, .amenities, .rooms, .aboutUs, .filters, .thumbnailInfo, .mainHeader, .accounts');
        const accounts = document.getElementsByClassName('accounts'); 
        const body = document.body;
        const mainNav = document.getElementsByClassName("mainNav");
        const searchBar = document.getElementsByClassName("searchBar");
        const counter = document.getElementsByClassName("counter");
        let mode;
        let color;
        let background;
        let color1;
        let background1;

        if (changeMode.innerHTML === "Dark mode") {
            mode = "Light mode";
            color = "white";
            background = "black";
            color1 = "black";
            background1 = "white";
        } else {
            mode = "Dark mode";
            color = "black";
            background = "white";
            color1 = "white";
            background1 = "black";
        }

        changeMode.innerHTML = mode;
        elements.forEach(element => {
            element.style.color = color;
        });
        accounts[0].querySelector("button").style.color = color1;
        accounts[0].querySelector("button").style.background = background1;
        body.style.background = background;
        mainNav[0].style.background = background;
        searchBar[0].querySelector("input").style.color = color;
        counter[0].querySelector("p").style.color = color;
    }

    function logInPopUp() {
        document.getElementById("dropdown").style.display = "none";
        document.getElementById("logInWrapper").style.display = "block";
        document.getElementById("overlay").style.display = "block";
        document.body.classList.toggle("lock-scroll");
    }

    function signUpPopUp() {
        document.getElementById("dropdown").style.display = "none";
        document.getElementById("signUpWrapper").style.display = "block";
        document.getElementById("overlay").style.display = "block";
        document.body.classList.toggle("lock-scroll");
    }

    function exitPopUp() {
        document.getElementById("logInWrapper").style.display = "none";
        document.getElementById("signUpWrapper").style.display = "none";
        document.getElementById("overlay").style.display = "none";
        document.body.classList.remove("lock-scroll");
    }

    function changeToSignUp() {
        exitPopUp();
        signUpPopUp();
    }

    //Task: Implement a countdown timer on your webpage
    const counter = document.getElementById("counter");
    const time = document.getElementById("time");

    counter.addEventListener("click", () => {
        let count = 60;
        time.innerText = count + "s";
        const countdown = setInterval(() => {
            count -= 1;
            time.innerText = count + "s";

            if (count <= 0) {
                clearInterval(countdown);
                time.innerText = "Timer's up";
            }
        }, 1000);
    });
    
    //Task: Add JavaScript to make your navigation menu interactive, such as showing or hiding menu items when a button is clicked.
    function seeMore() {
        const seeMoreElements = document.querySelectorAll(".seeMore");
        const seeLess = document.getElementById("seeMore");

        if (seeLess.textContent=== "See more") {
            seeLess.textContent = "See less";
            seeMoreElements.forEach(amenity => {
                amenity.style.display = "flex";
            });
        } else {
            seeLess.textContent = "See more";
            seeMoreElements.forEach(amenity => {
                amenity.style.display = "none";
            });
        } 
    }

    let numBedrooms = 1;
    let numBeds = 1;
    let numBathrooms = 1;

    function add(amenity) {
        if (amenity == "bedrooms") {
            numBedrooms++;
            document.getElementById("numBedrooms").textContent = numBedrooms;
        } else if (amenity == "beds") {
            numBeds++;
            document.getElementById("numBeds").textContent = numBeds;
        } else if (amenity == "bathrooms") {
            numBathrooms++;
            document.getElementById("numBathrooms").textContent = numBathrooms;
        }
    }

    function minus(amenity) {
        if (amenity == "bedrooms") {
            if (numBedrooms > 1) {
                numBedrooms--;
                document.getElementById("numBedrooms").textContent = numBedrooms;
            }
        } else if (amenity == "beds") {
            if (numBeds > 1) {
                numBeds--;
                document.getElementById("numBeds").textContent = numBeds;
            }
        } else if (amenity == "bathrooms") {
            if (numBathrooms > 1) {
                numBathrooms--;
                document.getElementById("numBathrooms").textContent = numBathrooms;
            }
        }
    }
}

var pageName =  window.location.pathname.split("/").pop();

if (pageName === "index2.html") {
    //Task: Allow the user to dynamically change the theme of your website using a “Change Theme” button.
    function changeTheme() {
        const changeMode = document.getElementById("changeMode");
        const elements = document.querySelectorAll(' .roomHeader, .roomInfo, .reviewContainer');
        const shortcut = document.getElementsByClassName('shortcut'); 
        const searchBar = document.getElementsByClassName("searchBar");
        const headNav = document.getElementsByClassName('headNav');
        const accounts = document.getElementsByClassName('accounts'); 
        const body = document.body;
        let mode;
        let color;
        let background;
        let color1;
        let background1;

        if (changeMode.innerHTML === "Dark mode") {
            mode = "Light mode";
            color = "white";
            background = "black";
            color1 = "black";
            background1 = "white";
        } else {
            mode = "Dark mode";
            color = "black";
            background = "white";
            color1 = "white";
            background1 = "black";
        }

        changeMode.innerHTML = mode;
        elements.forEach(element => {
            element.style.color = color;
        });
        shortcut[0].querySelectorAll("a").forEach(element => {
            console.log("asddsa");
            element.style.color = color;
        });
        body.style.background = background;
        headNav[0].style.background = background;
        searchBar[0].querySelector("input").style.color = color;
        accounts[0].querySelector("button").style.color = color1;
        accounts[0].querySelector("button").style.background = background1;
    }

    //Task: Create a simple gallery where users can click “Next” and “Previous” buttons to cycle through images.
    const slides = document.querySelectorAll(".roomImage img");
    let slideIndex = 0;
    let intervalId = null;

    document.querySelector('.prev').addEventListener('click', prevSlide);
    document.querySelector('.next').addEventListener('click', prevSlide);
    document.addEventListener("DOMContentLoaded", initializeSlider);

    function initializeSlider() {
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }
    function showSlide(index) {
        if (index >= slides.length) {
            slideIndex = 0;
        } 
        else if (index < 0) {
            slideIndex = slides.length - 1
        }

        slides.forEach(slide => {
            slide.classList.remove("displaySlide");
        })
        slides[slideIndex].classList.add("displaySlide");
    }
    function prevSlide() {
        clearInterval(intervalId);
        slideIndex++;
        showSlide(slideIndex);
    }
    function nextSlide() {
        slideIndex++;
        showSlide(slideIndex);
    }

        window.onscroll = function() {
        const headNav = document.getElementById("headNav");
        if (window.scrollY > 600) {
            headNav.style.display = "flex";
        } else {
            headNav.style.display = "none";
        }
    };

    function smoothScroll(event, id) {
        event.preventDefault();
        const element = document.getElementById(id);
        const offset = 110;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
} 
