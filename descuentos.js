// Calculo del descuento
const precio = 20
const descuento = 15

function precioDescuento1(precio, descuento) {
  return (precio * (100 - descuento))/100
}
const precioDescuento = (precio, descuento) => (precio * (100 - descuento)) / 100

console.log(precioDescuento1(50, 20))

function onclickDiscuent(){
  const price = document.getElementById("pPrice").value
  const discuent = document.getElementById("pDiscuent").value
  const result = document.getElementById("resultPrice")
  result.innerText = "El precio con descuento es: " + precioDescuento1(price, discuent)+"$"
  return
}


// Calculo de descuento usando Cupones
function onclickCoupon() {
  const price1 = document.getElementById("priceC").value
  const coupon = document.getElementById("coupon").value

  let descuento

  switch (coupon){
    case "N30":
      descuento= 30
      break
    case "N40":
      descuento = 40
      break
    case "N50":
      descuento = 50
      break
    default:
      console.log("Seleccione un coupon")
  }
  const result1 = document.getElementById("resultPrice1")
  result1.innerText = "El precio con descuento de cupon es: " + precioDescuento1(price1, descuento) + "$"
  return
}

