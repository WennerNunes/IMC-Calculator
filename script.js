
var peso;
var altura;
var imc;
var resultado;


function calcular(event){
   event.preventDefault();

   peso = document.getElementById('peso').value;
   altura = document.getElementById('altura').value;
   
   imc = peso / (altura * altura);

   resultado = document.getElementById('resultado');
   
   if( imc < 17 ){
      resultado.innerHTML  = '<br/> Your result was : ' + imc.toFixed(2) + '<br/> Be careful, you are very underweight!'
   }else if( imc > 17 && imc <= 18.49){
      resultado.innerHTML  = '<br/> Your result was: ' + imc.toFixed(2) + '<br/> You are underweight!';
   }else if(imc >= 18.5 && imc < 24.99 ){
      resultado.innerHTML  = '<br/> Your result was: ' + imc.toFixed(2) + '<br/> You are at your ideal weight!';
   }else if( imc >= 25 && imc <= 29.99){
      resultado.innerHTML  = '<br/> Your result was: ' + imc.toFixed(2) + '<br/> You are overweight!';
   }else if(imc >= 30){
      resultado.innerHTML  = '<br/> Your result was: ' + imc.toFixed(2) + '<br/> Be careful, you are obese!';
   }

   document.getElementById('peso').value = '';
   document.getElementById('altura').value = '';

}