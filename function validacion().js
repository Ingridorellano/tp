function validacion() 
    {
        valor = document.getElementById("nombre").value;
        
        if( valor == null || valor.length == 0) 
        {
            
            document.getElementById('mensaje').innerHTML = "Tenes que completar el Nombre!";
            elemento = document.getElementById('nombre');
            elemento.focus();
            
            return false;
        }
        return true;          
    }


