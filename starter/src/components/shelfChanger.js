import { PropTypes } from "prop-types"

const ShelfChanger = ({ onSelectShelf, currentShelf }) => {

    const handleSelect = (event) => {
        onSelectShelf(event.target.value)
    }

    return (
        <div className="book-shelf-changer">
            <select onChange={(event) => handleSelect(event)} value="none">
                <option value="none" disabled>
                    Move to...
                </option>
                <option value="currentlyReading" disabled={currentShelf === "currentlyReading"}>
                    Currently Reading
                </option>
                <option value="wantToRead" disabled={currentShelf === "wantToRead"}>Want to Read</option>
                <option value="read" disabled={currentShelf === "read"}>Read</option>
                <option value="none">None</option>
            </select>
        </div >
    )
}

ShelfChanger.propTypes = {
    onSelectShelf: PropTypes.func.isRequired,
    currentShelf: PropTypes.string.isRequired
}

export default ShelfChanger