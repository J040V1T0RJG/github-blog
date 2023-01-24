export function textShortener(text: string) {
  const shortenedText =
    text.length > 120 ? text.substring(0, 120) + '...' : text

  return shortenedText
}
