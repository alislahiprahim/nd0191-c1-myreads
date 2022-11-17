import PropTypes from 'prop-types'
import ShelfChanger from './shelfChanger'
const Book = ({ book, onchangeShelf }) => {

    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage:
                                `url("${book.imageLinks?.thumbnail}")`,
                        }}
                    ></div>
                    <ShelfChanger currentShelf={book.shelf ?? "none"} onSelectShelf={(shelf) => onchangeShelf(book, shelf)} />
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors?.toString().replaceAll(",", " ")}</div>
            </div>
        </li>
    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    onchangeShelf: PropTypes.func.isRequired
}

export default Book