let mainbox = document.getElementById("main-box");
let cursore = document.querySelector(".cursore");

mainbox.addEventListener("mousemove", function(dets)
{
    cursore.style.left = dets.x+"px";
    cursore.style.top = dets.y+"px";
});

mainbox.addEventListener("mouseenter",function(){
    cursore.style.display = "block";
});
mainbox.addEventListener("mouseleave",function(){
    cursore.style.display = "none";
});

/* Qusitions and answere click effect */

let quistions = document.querySelectorAll("#Q1");
let ans = document.querySelectorAll(".ans");

quistions.forEach(function(q, index) {
    q.addEventListener("click", function() {

        let currentDisplay = window.getComputedStyle(ans[index]).display;


        // agar pehle hidden tha to open karo
        if (currentDisplay === "none") {
            ans[index].style.display = "block";
        }

        if (currentDisplay === "block") {
            ans[index].style.display = "none";
        }


    });
});

