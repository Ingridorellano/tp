<script></script>
 function validacion() 
 {
     valor = document.getElementById("email").value;
     
       
     if (!(/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|ar)+$/.test(valor)))
     {
         document.getElementById('mensaje').innerHTML = "No es una direccion de email correcta" ;
         
         elemento = document.getElementById('email');
         elemento.value = '';
         elemento.focus();

         return false;
     }
     
     return true;          
 }


