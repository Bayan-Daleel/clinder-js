let monthNameElm=document.getElementById("month-name");
const dayNameElm=document.getElementById("day-name");
const dayElm=document.getElementById("day");
const yearElm=document.getElementById("year");


const date= new Date ();

const monthName = date.toLocaleString('en-US',{
  month:'long'
});

const dayName = date.toLocaleString('en-US',{
  weekday:'long'
});
const day = date.toLocaleString('en-US',{
  day:'numeric'
});
const year = date.toLocaleString('en-US',{
  year:'numeric'
});

monthNameElm.innerText=monthName;
dayNameElm.innerText = dayName;
dayElm.innerText = day;
yearElm.innerText = year;

//console.log(monthName);
//monthNameElm.textContent = "dd";
