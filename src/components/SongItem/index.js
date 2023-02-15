import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const SongItem = props => {
  const {songDetails, deleteSongItem} = props
  const {id, imageUrl, name, genre, duration} = songDetails

  const onDeleteClick = () => {
    deleteSongItem(id)
  }

  return (
    <li className="list-container">
      <img src={imageUrl} className="song-card-image" alt="track" />
      <div className="song-name-genre-duration-container">
        <div className="song-name-genre-container">
          <p className="song-name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
        <p className="duration">{duration}</p>
      </div>

      <button
        data-testid="delete"
        onClick={onDeleteClick}
        type="button"
        className="delete-button"
      >
        <AiOutlineDelete size={18} color="#cbd5e1" />
      </button>
    </li>
  )
}

export default SongItem
