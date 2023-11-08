let height = Number (prompt (`Enter Your Height`));
let weight = Number (prompt (`Enter Your Weight`));

let bmi = weight / ((height*0.3048)**2);

if(bmi < 18){
    document.querySelector('h1').innerText = 'Underweight';
}else if(bmi >= 18.5 && bmi <= 24.9){
    document.querySelector('h2').innerText = 'Normal Weight';
}else if(bmi >= 25 && bmi <= 29.9 ){
    document.querySelector('h3').innerText = 'Overweight';
}else if(bmi >= 30){
    document.querySelector('b').innerText = 'Vhai apnar weight koman';
}
