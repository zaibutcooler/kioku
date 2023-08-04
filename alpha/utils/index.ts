export function truncateParagraph(
  paragraph: string,
  maxWords = 30,
  ellipsis = "..."
) {
  const words = paragraph.split(" ");
  const truncatedParagraph = words.slice(0, maxWords).join(" ");
  if (words.length > maxWords) {
    return truncatedParagraph + ellipsis;
  }
  return truncatedParagraph;
}
