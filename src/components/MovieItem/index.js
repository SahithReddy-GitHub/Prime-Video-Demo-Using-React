import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import Popup from 'reactjs-popup'

import './index.css'

const MovieItem = props => {
  const {data} = props
  const {thumbnailUrl, videoUrl} = data

  return (
    <Popup
      modal
      trigger={
        <button type="button" className="card">
          <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
        </button>
      }
    >
      {close => (
        <>
          <div className="popup-con">
            <button
              type="button"
              data-testid="closeButton"
              className="close-btn"
              aria-label="Close Popup"
              onClick={() => close()}
            >
              <IoMdClose />
            </button>
            <ReactPlayer className="player-custom" url={videoUrl} />
          </div>
        </>
      )}
    </Popup>
  )
}

export default MovieItem
