/*let i, text, j;


for (i = 1; i <= 6; i++) {
  text = '';
  for (j = 1; j <= 8; j++) {
    text = i + j;
    if (text < 8) {
      text = String(text) + '#';
    } else {
      text = String(text) + '.';
    }
  }
  console.log(text)
}
*/


let i, text, j;

for (i = 1; i <= 6; i++) {
  text = '#'; 
  for (j = 2; j <= 8; j++) { 
    text += ' .'; 
  }
  console.log(text);
}


