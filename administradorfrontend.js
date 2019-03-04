class _Administrador {
   constructor(_id, 
    NOMBRE,
    CLAVE,
    EMAIL,
    IMAGEN,
    ESTADO,
    SALT
    ) {
      this._id=_id;
      this.NOMBRE =NOMBRE;
      this.CLAVE=CLAVE;
      this.EMAIL=EMAIL;
      this.IMAGEN=IMAGEN;
      this.ESTADO=ESTADO;
      this.SALT=SALT;
    }
    Guardar() {
        
        var objetoaenviar = this;
        // Return a new promise.
        return new Promise(function(resolve, reject) {
          // Do the usual XHR stuffs 
          try {
            
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'http://localhost:8080/api/nuevoadm');
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.onload = function() {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                }
                else
                    {
                       reject(xhr); 
                    }
            };
            xhr.send(JSON.stringify(objetoaenviar));   
          }
          catch(err) {
              reject(err.message);

          }
      });
    }
    Login() {

        var objetoaenviar = this;
        // Return a new promise.
        return new Promise(function(resolve, reject) {
          // Do the usual XHR stuff    
          try {
                 
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'http://localhost:8080/api/loginadm');
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.onload = function() {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                }
                else
                    {
                       reject(xhr); 
                    }
            };
            xhr.send(JSON.stringify(objetoaenviar));                
          }
          catch(err) {
              reject(err.message);
          }
      });     
    }   
}
            
let imagenenbase64 = "";
$("#imagen").change(function(){
    readURL(this);
});    