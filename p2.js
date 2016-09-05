const readline = require('readline');

const r1 = readline.createInterface({
  input:process.stdin,
  output:process.stdout
});

r1.question('What\'s your name?',(answer)=>{
  if(answer.toLowerCase() == "bob" || answer.toLowerCase() == "alice")
  {
  console.log('Welcome ' +answer)
}
r1.close();
});
