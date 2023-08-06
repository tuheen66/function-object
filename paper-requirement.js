// const papers = [
//   { name: "book1", pages: 100, units: 10 },
//   { name: "book2", pages: 200, units: 20 },
//   { name: "book3", pages: 300, units: 30 },
// ];

function paperRequirements(book1, book2, book3) {
  const book1Pages = 100;
  const book1TotalPages = book1 * book1Pages;
  const book2Pages = 200;
  const book2TotalPages = book2 * book2Pages;
  const book3Pages = 300;
  const book3TotalPages = book3 * book3Pages;

  const totalPagesRequired =
    book1TotalPages + book2TotalPages + book3TotalPages;
  return totalPagesRequired;
}

const totalPaperRequired = paperRequirements(10, 20, 30);
console.log(totalPaperRequired);
 