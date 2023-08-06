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

export function getDaysLeft(deadline: string) {
  const today = new Date();
  const deadlineDate = new Date(deadline);

  const timeDiff = deadlineDate.getTime() - today.getTime();

  const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));

  return daysLeft;
}
