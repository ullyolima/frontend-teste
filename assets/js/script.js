AOS.init() 
AOS.refreshHard()
function initMap(){let e;e=new google.maps.Map(document.getElementById("map"),{center:{lat:-23.599225,lng:-46.6366589},zoom:18})}

const modal = document.querySelector("#myModal")
const form=document.querySelector(".needs-validation");
form.addEventListener("submit",function(e){!1===form.checkValidity()&&(e.preventDefault(),e.stopPropagation()),form.classList.add("was-validated")})


const masks={phone:e=>e.replace(/\D/g,"").replace(/(\d{2})(\d)/,"($1) $2").replace(/(\d{4})(\d)/,"$1-$2").replace(/(\d{4})-(\d)(\d{4})/,"$1$2-$3")};document.querySelectorAll("input").forEach(e=>{const t=e.dataset.js;e.addEventListener("input",e=>{e.target.value=masks[1](e.target.value)},!1)})

