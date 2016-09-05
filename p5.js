const readline = require('readline');

const r1 = readline.createInterface({
  input:process.stdin,
  output:process.stdout
});

/*r1.question('What\'s your name?',(answer)=>{
  if(answer.toLowerCase() == "bob" || answer.toLowerCase() == "alice")
  {
  console.log('Welcome ' +answer)
}
r1.close();
});
*/

r1.question('Enter a number :',(number)=>{
if(isNaN(number)){
console.log('Only numbers are allowed.');
}
else
{
var x = 0;
for(i=1;i<=number;i++){
  if(i%3 == 0 || i%5 == 0)
  x = x+i;
}
console.log('The Sum is ' + x);
}
r1.close();
});
