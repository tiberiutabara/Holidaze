import { useState } from 'react'

function RegisterHotel() {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [area, setArea] = useState("City Center")
    const [thumbnail, setThumbnail] = useState(null)
    const [gallery, setGallery] = useState(null)
    const [description, setDescription] = useState("")
    const [wifi, setWifi] = useState(null)
    const [pets, setPets] = useState(null)
    const [parking, setParking] = useState(null)
    const [bathroom, setBathroom] = useState(null)
    const [roomservice, setRoomservice] = useState(null)
    const [food, setFood] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(thumbnail, gallery)
    }

  return (
    <div>
        <h2>Add New Hotel</h2> 

        <form onSubmit={handleSubmit}>
            <label> <span> Hotel Name </span>
                <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>

            <br /> <br />

            <label> <span> Price Per Night </span>
                <input type='text' value={price} onChange={(e) => setPrice(e.target.value)}  />
            </label>

            <br /> <br />

            <label> <span> Location </span>
                <select
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                >
                    <option value="City Center">City Center</option>
                    <option value="Urban">Urban</option>
                    <option value="Rural">Rural</option>
                </select>
            </label>

            <br /> <br />

            <div> <span> Options </span> <br />

                <label> <span> WiFi </span>
                    <input type="checkbox" onChange={(e) => setWifi(e.target.value)} />
                </label> <br />

                <label> <span> Pets Allowed</span>
                    <input type="checkbox" onChange={(e) => setPets(e.target.value)} />
                </label> <br />

                <label> <span> Parking </span>
                    <input type="checkbox" onChange={(e) => setParking(e.target.value)} />
                </label> <br />

                <label> <span> Private Bathroom </span>
                    <input type="checkbox" onChange={(e) => setBathroom(e.target.value)} />
                </label> <br />

                <label> <span> Roomservice </span>
                    <input type="checkbox" onChange={(e) => setRoomservice(e.target.value)} />
                </label> <br />

                <label> <span> Food Available </span>
                    <input type="checkbox" onChange={(e) => setFood(e.target.value)}/>
                </label> <br />
            </div>

            <br /> <br />

            <label> <span> Thumbnail </span>
                <input type='file' accept="image/*" onChange={(e) => setThumbnail(e.target.files[0])}/>
            </label>

            <br /> <br />

            <label> <span> Gallery </span>
                <input type='file' accept="image/*" multiple="multiple" onChange={(e) => setGallery(e.target.files)}/>
            </label>

            <br /> <br />

            <label>
            {" "}
            <span> Description</span>
            <textarea
                value={description} onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            </label>

            <br /> <br />

            <button>Add New Hotel</button>
        </form>
    </div>
  )
}

export default RegisterHotel