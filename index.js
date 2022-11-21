const text = document.getElementById("textarea");
const total = document.querySelector(".total");
const remain = document.querySelector(".remain");
const max = text.getAttribute("maxLength");

text.addEventListener("keyup",()=>{
   updateCounter()
});

updateCounter();
function updateCounter()
{
    const l = text.value.length;
    total.innerHTML = l;
    remain.innerHTML = max -l;
}