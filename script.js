
var quebrada = false
function mudaLampada(arq) {
  if (!quebrada) {
    document.getElementById("luz").src = "_imagens/" + arq + ".jpg";
    if (arq == 'lampada-quebrada') {
      quebrada = true;
    }
  }
}
