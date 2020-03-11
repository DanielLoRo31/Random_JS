

var generateRandomCode=(val)=>{
  if (val) var caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  else var caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#!?¡-@";
  var contraseña = "";
  for (i=0; i<15; i++) contraseña +=caracteres.charAt(Math.floor(Math.random()*caracteres.length)); 
  console.log(caracteres.length)
  return contraseña
}

var random=(op)=>{
  if (op) $('#random2').append(generateRandomCode(op)+'<br>');
  else $('#random').append(generateRandomCode(op)+'<br>');
  
}