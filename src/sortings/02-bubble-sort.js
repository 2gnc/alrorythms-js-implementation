const bubble = arr => {
  const sorted = [...arr];
  const times = sorted.length - 1;
  for (let i = 0; i < times; i++) {
    for (let j = 0; j < times - i; j++) {
      if (sorted[j] > sorted[j + 1]) {
        [sorted[j], sorted[j + 1]] = [sorted[j + 1], sorted[j]];
      }
    }
  }
  return sorted;
};

const bubbleV2 = arr => {
  const sorted = [...arr];
  for (let i = sorted.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (sorted[j] > sorted[j + 1]) {
        [sorted[j], sorted[j + 1]] = [sorted[j + 1], sorted[j]];
      }
    }
  }
  return sorted;
};

module.exports.b1 = bubble;
module.exports.b2 = bubbleV2;

// O(n^2) в худшем случае
