import './App.css';
import { API, graphqlOperation } from 'aws-amplify';
import { getBookById } from './bookQuery';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { useState } from 'react';

function App() {
  const [book, setBook] = useState(null);

  const getBook = async () => {
    const book = await API.graphql(graphqlOperation(getBookById, {id: "b1b61d97-188a-4d91-9f7c-de5660ddc672"}));
    setBook(book.data.getBookById);
  };

  const viewBook = () => {
    if (book) {
      return (<article>
        <h3> { book.title }</h3>
        <p> { book.description } </p>
        <p> { book.author } </p>
        <p> { book.price } </p>
      </article>)
    }
  };

  return (
    <div>
      <AmplifySignOut />
      <section>
        <button onClick={() => getBook()}> Get Book Details </button>
      </section>
      <section>
        {viewBook()}
      </section>
    </div>
  );
}

export default withAuthenticator(App);