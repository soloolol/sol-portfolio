const copyToClipboard = (text: string) => {
  return navigator.clipboard.writeText(text);
};

export const handleCopyWithCallback = (text: string, callback: () => void) => {
  if (text) {
    copyToClipboard(text)
      .then(() => callback())
      .catch((error) => {
        console.error('복사 실패:', error);
      });
  }
};
