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

// Mönster 1
for (let i = 1; i <= 6; i++) {
  let text = '#';
  for (let j = 2; j <= 8; j++) {
    text += ' .';
  }
  console.log(text);
}

// Mönster 2
for (let i = 1; i <= 6; i++) {
  let text = '';
  for (let j = 1; j <= 7; j++) {
    if (i === j) {
      text += '# ';
    } else {
      text += '. ';
    }
  }
  console.log(text);
}

// Mönster 3
for (let i = 1; i <= 6; i++) {
  let text = '';
  for (let j = 1; j <= 7; j++) {
    if (j > 2 && j < 6) {
      text += '# ';
    } else {
      text += '. ';
    }
  }
  console.log(text);
}

// Mönster 4
for (let i = 1; i <= 6; i++) {
  let text = '';
  for (let j = 1; j <= 9; j++) {
    if (i === 3) {
      text += '# ';
    } else if (j === 4 || j === 5) {
      text += '# ';
    } else {
      text += '. ';
    }
  }
  console.log(text);
}
