function escribir(){
  var input= document.getElementById('textarea').value;
  var vinculo = document.getElementById('vincular');
  vinculo.innerHTML = input;

}

function sizeText(valor){
  operacion = valor;
  switch(operacion){
    case 1:
    document.getElementById('vincular').style.fontSize = '40px';
    break;
    case 2:
    document.getElementById('vincular').style.fontSize = '30px';
    break;
    case 3:
    document.getElementById('vincular').style.fontSize = '20px';
    break;
  }
}

function alinear(valor){
  operacion = valor;
  switch(operacion){
    case 1:
    document.getElementById('vincular').style.textAlign = 'left';
    break;
    case 2:
    document.getElementById('vincular').style.textAlign = 'center';
    break;
    case 3:
    document.getElementById('vincular').style.textAlign = 'right';
    break;
  }
}

function textoColor(){
  var elegirColor = prompt('Elija color de texto');
  document.getElementById('vincular').style.color = elegirColor;
}

function fondoColor(){
  var fondo = prompt('Elija un color de fondo');
  document.getElementById('vincular').style.backgroundColor = fondo; 
}
