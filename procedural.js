const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Le premier numero: ', (num1) => {
  rl.question('Le deuxieme numero: ', (num2) => {
    const total = Number(num1) + Number(num2);
    console.log(`Le total est: ${total}`);
    rl.close();
  });
});


du code 


const prompts = require('prompts');

function reverse(value){
    const sep = value.split('');
    return sep.reverse().join('');
}

async function main(){
    const result = await prompts({
        type : 'text',
        name : 'value',
        message : 'Veuillez saisir toutes les informations : '
    })
    console.log(reverse(result.value))
}

main();