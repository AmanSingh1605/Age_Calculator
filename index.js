let day = document.querySelector("#day");
let month = document.querySelector("#month");
let year = document.querySelector("#year");

function calculate() {
  let x = true;
  let y = true;
  let z = true;
  let d = new Date(`${year.value}/${month.value}/${day.value}`);

  if (d.getFullYear() != year.value || year.value > 2023 || year.value=="") {
    if(year.value!="")
    document.querySelector(".warn_year").textContent = "Must be in the past";
    else
    document.querySelector(".warn_year").textContent = "This field is required";
    
    document.querySelector("#label-year").style.color = "hsl(0, 100%, 67%)";
    year.style.borderColor = "hsl(0, 100%, 67%)";
    x = false;
  } else {
    document.querySelector(".warn_year").textContent = "";
    document.querySelector("#label-year").style.color = "hsl(0, 1%, 44%)";
    year.style.borderColor = "hsl(0, 0%, 86%)";
    x = true;
  }
  if (month.value < 1 || month.value > 12 ||month.value=="") {
    if(month.value!="")
    document.querySelector(".warn_month").textContent = "Must be a valid month";
    else
    document.querySelector(".warn_month").textContent = "This field is required";
    document.querySelector("#label-month").style.color = "hsl(0, 100%, 67%)";
    month.style.borderColor = "hsl(0, 100%, 67%)";
    y = false;
  } else {
    document.querySelector(".warn_month").textContent = "";
    document.querySelector("#label-month").style.color = "hsl(0, 1%, 44%)";
    month.style.borderColor = "hsl(0, 0%, 86%)";
    
    y = true;
  }
  if (d.getDate() != day.value || day.value < 1 || day.value > 31 || day.value=="") {
    if(day.value!="")
    document.querySelector(".warn_day").textContent = "Must be a valid day";
    else
    document.querySelector(".warn_day").textContent = "This field is required";
    document.querySelector("#label-day").style.color = "hsl(0, 100%, 67%)";
    day.style.borderColor = "hsl(0, 100%, 67%)";
    z = false;
  } else {
    document.querySelector(".warn_day").textContent = "";
    document.querySelector("#label-day").style.color = "hsl(0, 1%, 44%)";
    day.style.borderColor = "hsl(0, 0%, 86%)";
    
    z = true;
  }
  if (
    d.getFullYear() == year.value &&
    d.getMonth() == month.value - 1 &&
    d.getDate() == day.value &&
    x === true &&
    y === true &&
    z === true
  ) {
    let current = new Date();
    const diffTime = Math.abs(current - d);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const years = Math.floor(diffDays / 365);
    const months = Math.floor((diffDays % 365) / 30);
    const days = Math.floor((diffDays % 365) % 30);

    document.querySelector("#detail-year").textContent = years;
    document.querySelector("#detail-month").textContent = months;
    document.querySelector("#detail-day").textContent = days;

    document.querySelector(".warn_day").textContent = "";
    document.querySelector(".warn_month").textContent = "";
    document.querySelector(".warn_year").textContent = "";
  }
}
