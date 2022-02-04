// for page loader
document.addEventListener("DOMContentLoaded", function() {
    var pageLoader = document.querySelector("#pageLoader");
    setTimeout(() => {
        pageLoader.style.display = "none";
    }, 500);
});

// for sidenav
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});

// handle /gen/text upload request
const progessIndicator = document.querySelector("#progessIndicator");
const textForm = document.querySelector("#textForm");
const textAreaElem = document.querySelector("#textarea1");


const handleTextRequest = async (url, paylaod) => {
    // show progress indicator
    progessIndicator.style.display = "";

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            text: paylaod
        })
    })
        .then(res => res.json())
        .then(data => {
            // hide progress indicator
            progessIndicator.style.display = "none";
            
            // see if its success || errMsg && store if true
            try {
                if (data.payload) {
                    localStorage.setItem("jpbqr", JSON.stringify(data.payload));
                    location.replace("https://digvijay-qrgen.herokuapp.com/");
                } else if (data.message) {
                    alert(data.message);
                }
            } catch(e) {
                console.log(e);
                alert("Something went wrong please try later");
            }
        })
        .catch(e => {
            // hide progress indicator
            progessIndicator.style.display = "none";
            console.log(e);
        });
}

textForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const txtValue = textAreaElem.value.trim();
    handleTextRequest("https://digvijay-qrgen.herokuapp.com//gen/text", txtValue);

    textAreaElem.value = "";
});


