
var quebrada = false
function mudaLampada(arq) {
  if (!quebrada) {
    document.getElementById("luz").src = "_imagens/lampada-" + arq + ".jpg";
    if (arq == 'quebrada') {
      quebrada = true;
    }
  }
}
