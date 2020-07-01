function mudaIcone(foto) {
  document.getElementById("icone").src = "../_imagens/" + foto + ".png";


}
function calc_total() {
  var qtd = parseInt(document.getElementById('cQuant').value);
  tot = qtd*1500;
  document.getElementById('cVal').value = tot;

}
