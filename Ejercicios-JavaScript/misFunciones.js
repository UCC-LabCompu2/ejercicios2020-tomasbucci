/**
 * Created by Agus on 6/5/2017.
 */

/**
 * Mostrar limpiar paint .
 * @method Limpiar.
 * @return -
 */
function Limpiar() {
    var canvas= document.getElementById("CanvasADibujar");
    var ctx= canvas.getContext("2d");

    canvas.width=canvas.width;
}



/**
 * Mostrar ocultar .
 * @method mostrarocultar.
 * @param {string} id - el Id de del div con su estilo.
 * @return -
 */

function mostrarocultar(valorM){
    if (valorM=="val_mostrar"){
        document.getElementById("divM").style.display = 'block';
    }else if (valorM=="val_ocultar"){
        document.getElementById("divM").style.display = 'none';
    }
}
/**
* Mostrar Calcular Multiplicacion .
* @method calcularMult.
* @return -
    */
    function calcularMult() {
        var num1, num2;

        num1= document.getElementsByName("mul_num1")[0].value;
        num2= document.getElementsByName("mul_num2")[0].value;
        document.getElementsByName("mul_total")[0].innerHTML=  Number(num1) * Number(num2);

    }
/**
 * Mostrar Calcular Resta.
 * @method calcularRes.
 * @return -
 */

function calcularRes() {
    var num1, num2;

    num1= document.getElementsByName("res_num1")[0].value;
    num2= document.getElementsByName("res_num2")[0].value;
    document.getElementsByName("res_total")[0].innerHTML=  Number(num1) - Number(num2);
}

/**
 * Mostrar Calcular Suma .
 * @method calcularSum.
 * @return -
 */
function calcularSum() {
    var num1, num2;

    num1= document.getElementsByName("sum_num1")[0].value;
    num2= document.getElementsByName("sum_num2")[0].value;
    document.getElementsByName("sum_total")[0].innerHTML=  Number(num1) + Number(num2);
}
/**
 * Mostrar Calcular Division .
 * @method calcularDiv.
 * @return -
 */
function calcularDiv() {
    var num1, num2;

    num1= document.getElementsByName("div_num1")[0].value;
    num2= document.getElementsByName("div_num2")[0].value;
    document.getElementsByName("div_total")[0].innerHTML=  Number(num1) / Number(num2);

}
/**
 * Mostrar Web .
 * @method CargarWeb.
 * @return -
 */
function CargarWeb() {
    var cant, unidad, urlcomp;

    cant= document.getElementById("distancia").value;
    unidad= document.getElementsByName("unidades")[0].value;
    urlcomp= "segundaWeb.html#" + cant + "#" + unidad;
    window.open(urlcomp);
}


/**
 * Convertir a Radianes.
 * @method convertirRad
 * @param {string}
 * @return -
 */

function convertirRad(id) {
    var grados, rad;
    if (id == "grados") {
        grados = document.getElementById("grados").value;
        rad = (grados * Math.PI)/180;

    } else if(id=="radianes"){
        rad = document.getElementById("radianes").value;
        grados = (rad*180)/Math.PI;
    }
    document.getElementById("grados").value = grados;
    document.getElementById("radianes").value = rad;
}
/**
 * Mostrar  cargar los datos
 * @method cargarRes.
 * @return -
 */
function cargarRes() {
    var urlComp, can, un;

    urlComp = window.location.href;
    can=urlComp.split("#")[1];
    un=urlComp.split("#")[2];

    document.getElementById("dist").value= can + " " + un;
}
/**
 * Mostrar Diubujar auto .
 * @method DibujarImagen.
 * @param {number}.
 * @return -
 */
function DibujarImagen(posX, posY) {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    console.log(posX,posY);
    var img= new Image();
    img.src= "images/auto.png";

    canvas.width=canvas.width;
    img.onload = function(){
        ctx.drawImage(img, posX, posY);
    };
}
/**
 * Mostrar dibujar circulo y cuadrado .
 * @method dibujarCirculoyCuadrado.
 * @return -
 */
function dibujarCirculoyCuadrado() {
    var canvas =document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var ymax=canvas.height;
    var xmax=canvas.width;
    var margen= 5;
    ctx.fillStyle = "#FFB433";
    ctx.fillRect(8 + margen , ymax-40-margen, 80,80);

    ctx.arc(xmax/2, ymax/2, 60, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#33FF9B";
    ctx.fill();

}

/**
 * Mostrar dibujar paint .
 * @method Dibujar.
 * @return -
 */
var bandera;
function Dibujar(event) {
    var canvas= document.getElementById("CanvasADibujar")
    var ctx= canvas.getContext("2d");

    var posX= event.clientX;
    var posY= event.clientY;

    canvas.onmousedown = function(){bandera=true};
    canvas.onmouseup = function(){bandera=false};
    if(bandera){
        ctx.fillRect(posX , posY , 5, 5);
        ctx.fill;

    }
}


/**
 * Conversion de unidades de medicion
 * @method conversorunid
 * @param {string} id - el Id de los inputs metros, pies, yardas o pulgadas.
 * @param {number} valor - el valor de los inputs metros, pies, yardas o pulgadas.
 * @return -
 */

function conversorunid(id, valor){
    var metro, pulgada, pie, yarda;

    if(isNaN(valor)){
        alert("Se ingresó un valor inválido" +id);
        metro="";
        pulgada="";
        pie="";
        yarda="";
    }else if(id=="metro"){
        metro=valor;
        pulgada=39.3701*valor;
        pie=3.28084*valor;
        yarda=1.09361*valor;
    }else if(id=="pulgada"){
        pulgada=valor;
        metro=0.0254*valor;
        pie=0.0833333*valor;
        yarda=0.0277778*valor;
    }else if(id=="pie"){
        pie = valor;
        metro=0.3047996952*valor;
        pulgada=11.999988*valor;
        yarda=0.333333*valor;
    }else if(id=="yarda"){
        yarda = valor;
        metro=0.9144*valor;
        pulgada=36*valor;
        pie=3*valor;
    }
    document.LasUnidades.unid_metro.value=Math.round(metro*100)/100;
    document.LasUnidades.unid_pulgada.value=Math.round(pulgada*100)/100;
    document.LasUnidades.unid_pie.value=Math.round(pie*100)/100;
    document.LasUnidades.unid_yarda.value=Math.round(yarda*100)/100;
}


