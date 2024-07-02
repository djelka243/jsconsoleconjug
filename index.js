import prompts from 'prompts';
import Indicatif from './indicatif.js';

async function main(){
    console.log('********************************************');
    console.log('Welcom to the french conjugasion application');
    console.log('********************************************');

    const verbe = await prompts({
        type:'text',
        name:'value',
        message:'Please enter a verb: '
    })
 
    const temps = new Indicatif(`${verbe.value}`);
    temps.onBoard();

}

main();