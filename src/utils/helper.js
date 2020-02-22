export const truncate = (card) => {
  if (card.title.length > 30) {
    return card.title.slice(0, 30) + '...';
  } else {
    return card.title;
  }
}