document.getElementById("region").addEventListener("change",direccion);
document.getElementById("ciudad").addEventListener("change",ciudad);
function direccion() {
  let i = this.options.selectedIndex;
  let regiones = this.options[i];
  document.getElementById("ciudad").disabled=false;
    //console.log(this)
  }
function ciudad() {
  document.getElementById("comChacabuco").disabled=false;
  console.log(this)
}