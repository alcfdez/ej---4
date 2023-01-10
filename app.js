/* calcular precio total del  producto teniendo  precio base y su iva
1ºcompro un pruducto precio x = 100€
2º IVA asignado y = 21%
3º operación precio total = x*y 




let x = "100€";
const y = "21%"



let = const x *  let y /100

*/

function calculo(){
	//tasa de impuestos
  var tasa = 21;
  
  //monto a calcular el impuesto
  var monto = $("input[name=monto]").val();
  
  //calsulo del impuesto
  var iva = (monto * tasa)/100;
  
  //se carga el iva en el campo correspondien te
  $("input[name=iva]").val(iva);
  
  //se carga el total en el campo correspondiente
  $("input[name=total]").val(parseInt(monto)+parseInt(iva));
   
}

