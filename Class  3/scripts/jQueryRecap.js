// Excercise 1
document.getElementById("btnJS").addEventListener("click", function(){
    document.getElementById("title").textContent = "Changed using JS";
});
$(document).ready(function(){
    $("#btnJQ").click(function(){
        $("#title").text("Changed using JQ");
    });
});

// Excercise 2
window.addEventListener("DOMContentLoaded", function(){
    document.getElementById("toggleJS").addEventListener("click", function(){
        let content = document.getElementById("content");
        if(content.style.display == "none"){
            content.style.display = "block";
        }else{
            content.style.display = "none";
        }
    });
});

$(document).ready(function(){
    $("#toggleJQ").click(function(){
        $("#content").toggle();
    });
});
