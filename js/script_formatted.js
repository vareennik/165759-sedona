var link = document.querySelector(".form-open");
var form = document.querySelector(".hotel-search");
        
link.addEventListener("click", function(event) {
    if (!form.classList.contains("hotel-search-show")) {
        event.preventDefault();
        form.classList.add("hotel-search-show"); 
    } 
    else {
        event.preventDefault();
        form.classList.remove("hotel-search-show");
    }
});