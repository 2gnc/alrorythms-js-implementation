// дан текстжурнала и текст записки. определить,
// достаточно ли в тексте журнала слов, чтобы создать записку.
// функция должна вернуть true или false.

const harmlessRansomNoteV1 = (noteText, magazineText) => {
  const nt = noteText.toLowerCase();
  const mt = magazineText.toLowerCase();
  let tr = '';
  const noteWords = nt.split(' ');
  const searchBase = mt.split(' ');
  let str;
  if (!noteText.length) return false;
  for (let i = 0; i <= searchBase.length; i++) {
    str = searchBase.indexOf(noteWords[i]);
    if (str !== -1) {
      const tt = searchBase[str];
      tr += `${tt} `;
    }
  }
  return tr.trim() === nt;
};

const harmlessRansomNoteV2 = (noteText, magazineText) => {
  const nt = noteText.toLowerCase();
  const mt = magazineText.toLowerCase();
  const noteArr = nt.split(' ');
  const magArr = mt.split(' ');
  const magObj = {};
  let noteIsPossible = true;

  magArr.forEach((word) => {
    if (!magObj[word]) magObj[word] = 0;
    magObj[word]++;
  });

  noteArr.forEach((word) => {
    if (magObj[word]) {
      magObj[word]--;
      if (magObj[word] < 0) {
        noteIsPossible = false;
      }
    } else {
      noteIsPossible = false;
    }
  });
  return noteIsPossible;
};

module.exports.hn1 = harmlessRansomNoteV1;
module.exports.hn2 = harmlessRansomNoteV2;

// сложность v1 O(n * m) в худшем случае
// сложность v2 O(n + m) в худшем случае
