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
`