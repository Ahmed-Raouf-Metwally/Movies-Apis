let userName = document.getElementById("userName");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let age = document.getElementById("age");
let password = document.getElementById("password");
let rePassword = document.getElementById("rePassword");
let submitBtn = document.getElementById("submitBtn");

let finalResult;
let toogleFlag = false;
let searchFlag = false;

let imgPrefix = "https://image.tmdb.org/t/p/w500/";
let MoviesDisplayed = [];

fire("now_playing", "");
$(".nav-category1").addClass("Active");
(function () {

})();
$("#searchAll").keyup(function () {
    var str = $("#searchAll").val();
    if (str == "") {
        $("#Posts").empty();
        fire("now_playing", "");
        $(".nav-category1").addClass("Active");
        searchFlag = false;
    } else {
        searchAll(str);
        $(".nav-category1").removeClass("Active");
        $(".nav-category2").removeClass("Active");
        $(".nav-category3").removeClass("Active");
        $(".nav-category4").removeClass("Active");
        $(".nav-category5").removeClass("Active");
        $(".nav-category6").removeClass("Active");
        searchFlag = true;
    }
});

$("#searchWord").keyup(function () {
    var str = $("#searchWord").val();
    if (str == "" && searchFlag == false) {
        $("#Posts").empty();
        fire("now_playing", "");
        $(".nav-category1").addClass("Active");
        $(".nav-category2").removeClass("Active");
        $(".nav-category3").removeClass("Active");
        $(".nav-category4").removeClass("Active");
        $(".nav-category5").removeClass("Active");
        $(".nav-category6").removeClass("Active");
    } else if (searchFlag == true) {
        searchdisplayed(str);
        $(".nav-category1").removeClass("Active");
    }
    else {
        searchdisplayed(str);    
    }

});


$(".toogle").click(function () {
    if (toogleFlag == false) {
        $(".side-bar").css("transform", "translateX(0%)");
        $(".item1").css("transform", "translatey(0%)");
        $(".item2").css("transform", "translatey(0%)");
        $(".item3").css("transform", "translatey(0%)");
        $(".item4").css("transform", "translatey(0%)");
        $(".item5").css("transform", "translatey(0%)");
        $(".item6").css("transform", "translatey(0%)");
        $(".toogle").html('<i class="fas fa-times fa-2x"></i>');
    }
    else {
        $(".side-bar").css("transform", "translateX(-100%)");
        $(".item1").css("transform", "translatey(600%)");
        $(".item2").css("transform", "translatey(600%)");
        $(".item3").css("transform", "translatey(600%)");
        $(".item4").css("transform", "translatey(600%)");
        $(".item5").css("transform", "translatey(600%)");
        $(".item6").css("transform", "translatey(600%)");
        $(".toogle").html('<i class="fas fa-bars fa-2x"></i>');
    }
    toogleFlag = !toogleFlag;
});
$(".item1").click(function () {
    $("#Posts").empty();
    $("#searchAll").val("");
    $("#searchWord").val("");
    fire("now_playing", "");
    $(".nav-category1").addClass("Active");
    $(".nav-category2").removeClass("Active");
    $(".nav-category3").removeClass("Active");
    $(".nav-category4").removeClass("Active");
    $(".nav-category5").removeClass("Active");
    $(".nav-category6").removeClass("Active");
});
$(".item2").click(function () {
    $("#Posts").empty();
    $("#searchAll").val("");
    $("#searchWord").val("");
    fire("popular", "");
    $(".nav-category1").removeClass("Active");
    $(".nav-category2").addClass("Active")
    $(".nav-category3").removeClass("Active");
    $(".nav-category4").removeClass("Active");
    $(".nav-category5").removeClass("Active");
    $(".nav-category6").removeClass("Active");
});
$(".item3").click(function () {
    $("#Posts").empty();
    $("#searchAll").val("");
    $("#searchWord").val("");
    fire("top_rated", "");
    $(".nav-category1").removeClass("Active");
    $(".nav-category2").removeClass("Active");
    $(".nav-category3").addClass("Active");
    $(".nav-category4").removeClass("Active");
    $(".nav-category5").removeClass("Active");
    $(".nav-category6").removeClass("Active");
});
$(".item4").click(function () {
    $("#Posts").empty();
    $("#searchAll").val("");
    $("#searchWord").val("");
    fire("week", "trending/");
    $(".nav-category1").removeClass("Active");
    $(".nav-category2").removeClass("Active");
    $(".nav-category3").removeClass("Active");
    $(".nav-category4").addClass("Active");
    $(".nav-category5").removeClass("Active");
    $(".nav-category6").removeClass("Active");
});
$(".item5").click(function () {
    $("#Posts").empty();
    $("#searchAll").val("");
    $("#searchWord").val("");
    fire("upcoming", "");
    $(".nav-category1").removeClass("Active");
    $(".nav-category2").removeClass("Active");
    $(".nav-category3").removeClass("Active");
    $(".nav-category4").removeClass("Active");
    $(".nav-category5").addClass("Active");
    $(".nav-category6").removeClass("Active");
});
$(".item6").click(function () {
    $(".nav-category1").removeClass("Active");
    $(".nav-category2").removeClass("Active");
    $(".nav-category3").removeClass("Active");
    $(".nav-category4").removeClass("Active");
    $(".nav-category5").removeClass("Active");
    $(".nav-category6").addClass("Active");
});

let regxName = /^[a-z A-Z]{3,20}$/;
let mailRegex = /^[a-zA-Z0-9.+_-]{3,64}@[a-zA-Z0-9.-]{1,253}[.][a-zA-Z]{2,63}$/;
let phoneRegex = /^(01)[0-9]{9}$/;
let ageRegex = /^(?:[1-9]|[1-9][0-9]{1}|10[0-9]|110)$/;
let passWordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;



userName.addEventListener("keyup", function () {
    if (regxName.test(userName.value)) {
        document.getElementById("nameAlert").classList.add("visually-hidden");
    }
    else {
        document.getElementById("nameAlert").classList.remove("visually-hidden");
    }
    disableRemove()
});

email.addEventListener("keyup", function () {
    if (mailRegex.test(email.value)) {
        document.getElementById("emailAlert").classList.add("visually-hidden");
    }
    else {
        document.getElementById("emailAlert").classList.remove("visually-hidden");
    }
    disableRemove()
});

phone.addEventListener("keyup", function () {
    if (phoneRegex.test(phone.value)) {
        document.getElementById("phoneAlert").classList.add("visually-hidden");
    }
    else {
        document.getElementById("phoneAlert").classList.remove("visually-hidden");
    }
    disableRemove()
});

age.addEventListener("keyup", function () {
    if (ageRegex.test(age.value)) {
        document.getElementById("ageAlert").classList.add("visually-hidden");
    }
    else {
        document.getElementById("ageAlert").classList.remove("visually-hidden");
    }
    disableRemove()
});

password.addEventListener("keyup", function () {
    if (passWordRegex.test(password.value)) {
        document.getElementById("passWordAlert").classList.add("visually-hidden");
    }
    else {
        document.getElementById("passWordAlert").classList.remove("visually-hidden");
    }
    disableRemove()
});

rePassword.addEventListener("keyup", function () {
    if (password.value == rePassword.value) {
        document.getElementById("rePassWordAlert").classList.add("visually-hidden");
    }
    else {
        document.getElementById("rePassWordAlert").classList.remove("visually-hidden");
    }
    disableRemove()
});

function disableRemove() {
    if (regxName.test(userName.value) && mailRegex.test(email.value) && phoneRegex.test(phone.value) && ageRegex.test(age.value) && passWordRegex.test(password.value) && rePassword.value == password.value) {
        submitBtn.classList.remove("disabled");
    }
    else {
        submitBtn.classList.add("disabled");
    }
}

async function getAPI(category, trend) {
    let response = await fetch(`https://api.themoviedb.org/3/${trend}movie/${category}?api_key=c80c71f6867c0ac4e8687d6518dfe1e8&language=en-US&page=1`);
    finalResult = await response.json();

}

async function getAPISearch(str) {
    let response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=c80c71f6867c0ac4e8687d6518dfe1e8&language=en-US&query=${str}&page=1&include_adult=false`);
    finalResult = await response.json();

}



function displayMovies() {
    for (let i = 0; i < finalResult.results.length; ++i) {
        $("#Posts").append(
            `<div class="col-md-6 col-lg-4 my-3 ">
            <div class="post">
              <img class="img-fluid rounded" src="${imgPrefix + finalResult.results[i].poster_path}" alt="venom">
              <div class="post-layout position-absolute top-0 heig rounded d-flex align-items-center">
                <div class="info p-0">
                  <h2>${finalResult.results[i].title}</h2>
                  <p>${finalResult.results[i].overview}</p>
                  <p>${finalResult.results[i].vote_average}</p>
                  <p>${finalResult.results[i].release_date}</p>
                </div>
              </div>
            </div>
          </div>`
        );
    }
    for (let i = 0; i < finalResult.results.length; ++i) {
        MoviesDisplayed[i] = finalResult.results[i].title;
    }
}
function displayMoviesSearch() {
    $("#Posts").empty();
    for (let i = 0; i < finalResult.results.length; ++i) {
        $("#Posts").append(
            `<div class="col-md-6 col-lg-4 my-3 ">
            <div class="post">
              <img class="img-fluid rounded" src="${imgPrefix + finalResult.results[i].poster_path}" alt="venom">
              <div class="post-layout position-absolute top-0 heig rounded d-flex align-items-center">
                <div class="info p-0">
                  <h2>${finalResult.results[i].title}</h2>
                  <p>${finalResult.results[i].overview}</p>
                  <p>${finalResult.results[i].vote_average}</p>
                  <p>${finalResult.results[i].release_date}</p>
                </div>
              </div>
            </div>
          </div>`
        );
    }
    for (let i = 0; i < finalResult.results.length; ++i) {
        MoviesDisplayed[i] = finalResult.results[i].title;
    }
}

async function fire(category, trend) {
    await getAPI(category, trend);
    displayMovies();
}
async function searchAll(str) {
    await getAPISearch(str);
    displayMoviesSearch();
}

function searchdisplayed(str) {
    $("#Posts").empty();
    for (let i = 0; i < finalResult.results.length; ++i) {
        if (finalResult.results[i].title.toLowerCase().includes(str)) {
            $("#Posts").append(
                `<div class="col-md-6 col-lg-4 my-3 ">
                <div class="post">
                  <img class="img-fluid rounded" src="${imgPrefix + finalResult.results[i].poster_path}" alt="venom">
                  <div class="post-layout position-absolute top-0 heig rounded d-flex align-items-center">
                    <div class="info p-0">
                      <h2>${finalResult.results[i].title}</h2>
                      <p>${finalResult.results[i].overview}</p>
                      <p>${finalResult.results[i].vote_average}</p>
                      <p>${finalResult.results[i].release_date}</p>
                    </div>
                  </div>
                </div>
              </div>`
            );
        }
    }
}



