export const getYoutubeIdfromUrl = (url: string): string => {
  const regExp =
    /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = regExp.exec(url);
  if (match && match[2].length === 11) {
    return match[2];
  }
};
