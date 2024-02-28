export const getBookById = `
query getBookById($id: ID!) {
    getBookById(bookId: $id) {
      author
      bookId
      title
      price
      description
    }
  }
`;

export const onCreateBook = `
subscription MySubscription {
  onCreateBook {
    author
    bookId
    price
    title
  }
}
`