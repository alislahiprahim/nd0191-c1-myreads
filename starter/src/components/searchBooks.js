import { useCallback, useState } from "react"
import { Link } from "react-router-dom"
import Book from "./book"
import * as bookAPI from '../BooksAPI'
import * as _ from 'lodash'
const SearchBooks = ({ handleUpdateShelf }) => {
    const [books, setBooks] = useState([]);


    const searchBooks = async (value) => {
        const res = await bookAPI.search(value);
        if (res?.error) setBooks([])
        else
            setBooks(res)
    }

    const handleSearch = (value) => {
        if (value.trim() !== "") {
            delayedQuery(value)
        }
    }

    const delayedQuery = useCallback(_.debounce(q => searchBooks(q), 700), []);

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link
                    className="close-search"
                    to={"/"}
                >
                    Close
                </Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                        onChange={(event) => handleSearch(event.target.value)}
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {books.map(book => <Book key={book.id} book={book} onchangeShelf={(book, shelf) => handleUpdateShelf(book, shelf)} />)}
                </ol>
            </div>
        </div>
    )
}

export default SearchBooks