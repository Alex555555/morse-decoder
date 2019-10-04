const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let letterArr = [];
  let symb = '';
  let resWords = '';
  let space = '';
  for(let i = 0; i < expr.length; i++){
    if(expr[i] == "*"){
      space += expr[i];
      if(space.length == 10){
        letterArr.push(space);
        space = "";
      }
      continue;
    }
    if(symb.length != 10){
      symb += expr[i]
    }
    if(symb.length == 10){
      let letter = '';
      let symbols = symb.replace(/11/g,"-").replace(/10/g,".");
      symb = '';
      for(let a = 0; a < symbols.length; a++){
        if(symbols[a] != 0){
          letter += symbols[a];
        }
        
      }
          
          letterArr.push(MORSE_TABLE[letter]);
       
    }
  }
  for(let b = 0; b < letterArr.length; b++){
    if(letterArr[b] == '**********'){
      letterArr[b] = ' ';
    }
  }
  
  let result = letterArr.reduce((sum,current) =>{
    return sum + current;
  });
  return result;
}

module.exports = {
    decode
}