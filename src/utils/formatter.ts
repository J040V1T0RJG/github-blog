export function textShortener(text: string) {
  const shortenedText =
    text.length > 198 ? text.substring(0, 198) + '...' : text

  return shortenedText
}
