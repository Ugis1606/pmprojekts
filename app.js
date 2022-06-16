let i = 0;
let atema;
let result;
const temas = ["Tēma viens", "Tēma divi", "Tēma trīs", "Tēma četri"];
const temas1atemas = ["", "Tēma viens at1", "Tēma viens at2", "Tēma viens at3"];
const temas2atemas = ["", "Tēma divi at1", "Tēma divi at2", "Tēma divi at3"];
const temas3atemas = ["", "Tēma trīs at1", "Tēma trīs at2", "Tēma trīs at3"];
const temas4atemas = ["", "Tēma četri at1", "Tēma četri at2", "Tēma četri at3"];
const auth = "ujunghan:zxcvbUj12345";




// curl --request GET  --url “https://l-vm-414.energo.lv/rest/api/2/issue/PL-284?fields”
//  --user “ujunghan:zxcvbUj12345”  --header “Accept: application/json”

const pieteikumaNr = document.querySelector(".pieteikumaNr input");
const lietotajs = document.querySelector(".lietotajs input");
const adrese = document.querySelector(".adrese input");
const atsutitbtn = document.querySelector(".atsutitBtn");

// async function dataReceive () {
//   let dataFetch = await fetch ("https://l-vm-414.energo.lv/rest/api/2/issue/PL-284", {
//     mode: 'no-cors',
//     method: 'GET',
//     headers: {
//       ContentType: 'application/json',
//       Authorization: 'Basic ' + 'dWp1bmdoYW46enhjdmJVajEyMzQ1',
//       Accept: 'application/json'
//     }
//   });
//   let data = await dataFetch.json(); 
//   console.log(data);
// } 
// dataReceive();

$.ajax({
  url: "https://l-vm-414.energo.lv/rest/api/2/issue/PL-284",
  beforeSend: function(xhr) {
      xhr.setRequestHeader("Authorization", "Basic " + "dWp1bmdoYW46enhjdmJVajEyMzQ1");
  },
  headers: {
 //   'Authorization': "ujunghan:zxcvbUj12345",
    "contentType": "application/json",
    "accept": "application/json",
    "Access-Control-Allow-Origin": "*",
    'Access-Control-Allow-Origin': 'https://l-vm-414.energo.lv'
  },
  crossDomain: true,
  dataType: 'json',
  success: function(result) {
      console.log(result);
  },
  error: function(error) {
    console.log(error);
}
});







const acardionitemheaders = document.querySelectorAll(".acardion-item-header");
const homebtn = document.querySelector(".homebtn");
const pamatsHome = document.querySelector(".pamats-home");
const pamats2 = document.querySelector(".pamats2");
const metodika = document.querySelector('.info .metodika');
const piezimes = document.querySelector('.riki .piezimes');
const pamats = document.querySelector(".pamats");
const selectTema = document.querySelector(".tema-select");
const selectApTema = document.querySelector(".atema-select");
const btn = document.querySelector(".kopet");
const area = document.querySelector("textarea");
const popup = document.querySelector(".copy-container");
const popupBox = document.querySelector(".copy-popup");
area.value = "";

// Listeneri ----------------------------------------------
window.addEventListener("load", () =>
pamatsHome.classList.add("active"));
selectTema.addEventListener("click", apTemas);
selectApTema.addEventListener("click", apTematoArea);
btn.addEventListener("click", () => {
  navigator.clipboard.writeText(result)
  popup.classList.add("active");
  popupBox.classList.add("active");
});
popup.addEventListener("transitionend", () => {
  setTimeout(function() {
    popup.classList.remove("active");
    popupBox.classList.remove("active");
    }, 1000);
});

homebtn.addEventListener("click", () =>{
  pamatsHome.classList.add("active");
  pamats2.classList.remove("active");
  pamats.classList.remove("active");
});
metodika.addEventListener("click", () =>{
  pamats2.classList.add("active");
  pamatsHome.classList.remove("active");
  pamats.classList.remove("active");
});
piezimes.addEventListener("click", () =>{
  pamatsHome.classList.remove("active");
  pamats2.classList.remove("active");
  pamats.classList.add("active");
});

acardionitemheaders.forEach(acardionitemheader => {
  acardionitemheader.addEventListener("click", event => {
    const curentlyActive = document.querySelector(".acardion-item-header.active");
    if(curentlyActive && curentlyActive !== acardionitemheader){
       curentlyActive.classList.toggle("active");
       curentlyActive.nextElementSibling.style.maxHeight = 0;
    }  
    acardionitemheader.classList.toggle("active");
    const acardionitembody = acardionitemheader.nextElementSibling;
    if(acardionitemheader.classList.contains("active")) {
       acardionitembody.style.maxHeight = acardionitembody.scrollHeight + "px";
    } else {
       acardionitembody.style.maxHeight = 0;
    }
  });
});
// ----------------------------------------------

temas.forEach((item) => {
    i++;
    const newOption = document.createElement("option");
    newOption.innerText = item;
    newOption.value = i;
    selectTema.appendChild(newOption);
})

function apTemas (e) {
  area.value = "";
  while (selectApTema.lastElementChild) {
    selectApTema.removeChild(selectApTema.lastElementChild);
  }
    switch (e.target.value) {
        case "1":
            atema = temas1atemas;
          break;
        case "2":
            atema = temas2atemas;
          break;
        case "3":
            atema = temas3atemas;
          break;
        case "4":
            atema = temas4atemas;
          break;
          default: atema = [];
    } 
    atema.forEach((item) => {
        const newOption = document.createElement("option");
        newOption.innerText = item;
        selectApTema.appendChild(newOption);
    })
}

function apTematoArea (e) {
  if(selectApTema.childElementCount != 0) {
    result = e.target.innerText;
    area.value = result;
  }
}

function Clear() {
  const inputs = document.querySelectorAll(".pamats-home .ievadLauki input");
  inputs.forEach((input) => 
    input.value = "")
}






