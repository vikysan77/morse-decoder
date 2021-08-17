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
        let arr = [];
        let multLength = expr.length/10;
        
        for(let i = 0; i < multLength; i++) {
            let j = i * 10;
            var nStr = expr.slice(j, j+10);
            var newStr = nStr.replace(/00/g,'').replace(/10/g, '.').replace(/11/g,'-');
            arr.push(MORSE_TABLE[newStr] || ' ');
        }
        
        return arr.join('');
    }

module.exports = {
    decode
}