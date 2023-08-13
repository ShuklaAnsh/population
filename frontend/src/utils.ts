export const convertEmoji = (emoji: string): string =>
  (emoji ?? "")
    .split("\\u")
    .map((hexValue) => String.fromCharCode(parseInt(hexValue, 16)))
    .join("");
