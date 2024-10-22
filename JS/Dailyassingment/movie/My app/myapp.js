// localStorage.clear()

let buttonElement = document.getElementById("button");
// console.log("buttonElement",buttonElement);

let submitBtn = document.getElementById("button");
submitBtn.addEventListener("click", function (event) {
  event.preventDefault();

  let infoform = document.forms["info"];
  let namefield = infoform.username;
  let phonefield = infoform.phonnumbr;

  let isValidName = validateName(namefield.value);
  let isValidPhonnumbr = validatPhone(phonefield.value);

  if (isValidName && isValidPhonnumbr) {
    dateSave(namefield.value,phonefield.value)
    displayData()
    setTimeout(() => {
      alert("Login success");
      namefield.value = "";
      phonefield.value = "";
    }, 100);
  }
});
 searchInput.addEventListener('input',displayData)

let validateName = (nameValue) => {
  if (nameValue) {
    if (/^([a-zA-Z0-9_-]){3,}$/.test(nameValue)) {
      document.getElementById("wrongname").style.display = "none";
      document.getElementById("emptyname").style.display = "none";
      return true;
    } else {
      document.getElementById("wrongname").style.display = "none";
      document.getElementById("emptyname").style.display = "block";
      return false;
    }
  } else {
    document.getElementById("wrongname").style.display = "block";
    document.getElementById("emptyname").style.display = "none";
    return false;
  }
};

let validatPhone = (phoneValue) => {    
  if (phoneValue) {
    if (/^\d{10}$/.test(phoneValue)) {
      document.getElementById("wrongnumber").style.display = "none";
      document.getElementById("emptynumber").style.display = "none";
      return true;
    } else {
      document.getElementById("wrongnumber").style.display = "none";
      document.getElementById("emptynumber").style.display = "block";
      return false;
    }
  } else {
    document.getElementById("wrongnumber").style.display = "block";
    document.getElementById("emptynumber").style.display = "none";
    return false;
  }
};
function dateSave(name,number){
  const dateExt = JSON.parse(localStorage.getItem('info')) || [];
  dateExt.push({name,number})
  localStorage.setItem('info',JSON.stringify(dateExt))

}

 function displayData(){
  const tableData=document.getElementById("table-data")
  tableData.innerHTML=''
  const dateExt  = JSON.parse(localStorage.getItem('info')) || [];


  const searchValue = searchInput.value

  dateExt.forEach(element =>{
    if(element.name.toLowerCase().includes(searchValue)){
      const row = document.createElement("tr")
      row.innerHTML=`<td>${element.name}</td>
                       <td>${element.number}</td>`
      tableData.appendChild(row)              

    }
  });
 }
 
 document.addEventListener(`DOMContentLoaded`,displayData)