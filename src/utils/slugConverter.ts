export const slugConverter = (text: string) => {
  const newText = text.substring(0, 3);

  return newText.toUpperCase();
};
