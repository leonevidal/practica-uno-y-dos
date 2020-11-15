var dato = document.getElementById("contenido");
var memo = document.getElementById("contenido3");
function descolorear() {
    var memo = document.getElementById("contenido3");
    memo.style = "text-align: justify;"
}

function negrita() {
    dato.style = "font-weight: bold;"
}
var dato = document.getElementById("contenido");
function normal() {
    dato.style = "text-align: justify;"
}
function desilisar() {
    alert("esto empiesa a deslisar¿")
    var dato = document.getElementById("contenido2");
    dato.style = "width: 100%;height: 5px;position: relative;background:  rgb(157, 206, 221);";
    dato.innerHTML = `
    
    <div id='animate' style = "position: absolute; background:  rgb(157, 206, 221);">
    
    <span  class="texto2">
    <h2>Gerrero</h2>
            <img src="/imagenes/il_794xN.424090893_pws5.jpg" alt="">
            <li class="nav-item">
                        <button><a class="nav-link" href="#" onclick="desilisar()">Click para dar movimiento</a></button>
                    </li>
            <p>El guerrero, también conocido como Fighter, es el miembro más versátil de los Guerreros de la Luz. Tiene acceso a las mejores armas y armaduras disponibles, y tiene una impresionante fuerza y resistencia.</p>
            
        </article>
        
</span>
    </div>`;
    var elem = document.getElementById("animate");
    console.log(elem);
    var pos = 0;
    var id = setInterval(frame, 60);
    function frame() {
        if (pos == 60) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px"; 
        }
    }
    
}
function colorear() {
    var elem = document.getElementById("contenido3");
    elem.style = "background: purple; width: 100%;height: 555px;position  ";
    
}

function donde(){
    alert("los modificado estaria donde los personajes que estan a su derecha que son el gerrero, ladron, monje");
    
}

