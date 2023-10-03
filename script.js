const form = document.querySelector('form');

// if we take the value of height and width then empty value is returned

form.addEventListener('submit', (e)=>{
    // to stop the default events
e.preventDefault();

const height = parseInt (document.querySelector("#height").value);
const weight = parseInt(document.querySelector("#weight").value);
const result = document.querySelector("#result");


if(height === ''|| height < 0 || isNaN(height)){
    result.innerHTML = "Please give a valid height";
} 

else if(weight === ''|| weight < 0 || isNaN(weight)){
    result.innerHTML = "Please give a valid weight";
} 

else {
   const bmi= (weight / ((height * height)/10000).toFixed(2));
   result.innerHTML = `<span>${bmi}</span>`;
   const statement = document.querySelector("#statement");
   if(bmi < 18.6)
   {
    statement.innerHTML = "Under Weight";
   }
   else if(bmi > 22.9)
   {
    statement.innerHTML = "Over Weight";
   }
   else{
    statement.innerHTML = "Normal Range";
   }
}






})


const height = document.querySelector("#height");

