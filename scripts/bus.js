const allbadge = document.getElementsByClassName('badge');
for(const badgeghost of allbadge){
badgeghost.addEventListener("click", function(event){
   const table = event.target.parentNode. innerText ;
   const selectedcontainer =document.getElementById("selected-container")
const div = document.getElementBy("div");
const A1 =document.getElementBy("A");
const A2 =document.getElementBy("A");
const A3 =document.getElementBy("A");
const A4 =document.getElementBy("A");

A1.innerText = A1;
A2.innerText = A2;
A3.innerText = A3;
A4.innerText = A4;
div.appendChild(A1);
div.appendChild(A2);
div.appendChild(A3);
div.appendChild(A4);
selectedcontainer.appendChild(div);

   )};
}