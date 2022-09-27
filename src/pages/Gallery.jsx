// General imports
import { useState } from 'react'
import { useEffect } from 'react'

// Style imports
import './styles/Gallery.scss'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

export default function Gallery(props) {
    const [images, setImages] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [photoIndex, setPhotoIndex] = useState(0)
    const data = props.data
    const thumbnail = data.attributes.Thumbnail.data.attributes.url
    const gallery = data.attributes.Gallery.data

    useEffect(() => {
        let img = []
        for (let i = 0; i < gallery.length; i++){
            img.push(gallery[i].attributes.url)
        }

        setImages(img)
    }, [gallery])

  return (
    <div className="gallery">
        <img className="thumbnail" src={thumbnail} alt={data.attributes.Title} />

        <div className="images">
            {gallery.map(img => (
                <img key={img.id} src={img.attributes.url} alt={img.attributes.name}/>
            ))}

            <button className='gallery-btn' onClick={() => setIsOpen(true)}>View Gallery</button>
        </div>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
            setPhotoIndex({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
            setPhotoIndex({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
    </div>
  )
}
