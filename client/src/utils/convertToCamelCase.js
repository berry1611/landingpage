export default (text) => {
  const splitText = text.split(' ');
  const camelCase = splitText.map((word, index) => {
    if (index === 0) {
      return word.toLowerCase();
    }
    return word;
  });

  return camelCase.join('');
};
