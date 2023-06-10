const names = ["Guadalupe", "Ollie", "Aki"];
const surprise=[];
function writeCards(names,surprise) {
 
  for (let i = 0; i < names.length; i++) {
   

 surprise.push(`Thank you,${names[i]} , for the wonderful surprise gift!`);
   
  } 
  return surprise;
}

writeCards(names,surprise);

function countDown(){
  let countdown = 10;
while (countdown >=0) {
  console.log(countdown--);
}
}
