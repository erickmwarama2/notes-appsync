import './App.css';
import { API, graphqlOperation } from 'aws-amplify';
import { getBookById, onCreateBook } from './bookQuery';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
// import "react-toastify/dist/ReactToastify.css";

// toast.configure();

function App() {
  const [book, setBook] = useState(null);

  useEffect(() => {
    const subscription = API.graphql(graphqlOperation(onCreateBook)).subscribe({
      next: (result) => {
        console.log(result);
        const newBook = result.value.data.onCreateBook;
        setBook(newBook);
        toast("New book added!");
      }
    })
  });

  const getBook = async () => {
    // const book = await API.graphql(graphqlOperation(getBookById, {id: "b1b61d97-188a-4d91-9f7c-de5660ddc672"}));
    const book = await API.graphql({
      query: getBookById,
      variables: {id: "b1b61d97-188a-4d91-9f7c-de5660ddc672"},
      authMode: 'AWS_IAM'
    });

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