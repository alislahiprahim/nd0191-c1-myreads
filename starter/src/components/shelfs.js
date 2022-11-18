import PropTypes from 'prop-types'
import Book from './book';

const Shelfs = ({ shelfTitle, books, onUpdateShelf }) => {

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfTitle}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map(book => (

                        <Book key={book.id} bookId={book.id} onchangeShelf={(book, shelf) => onUpdateShelf(book, shelf)} />

                    ))}
                </ol>
            </div>
        </div>
    )

}

Shelfs.propTypes = {
    shelfTitle: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onUpdateShelf: PropTypes.func.isRequired
}

export default Shelfs