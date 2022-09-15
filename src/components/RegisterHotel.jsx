import { useState } from 'react'

function RegisterHotel() {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [area, setArea] = useState("City Center")
    const [thumbnail, setThumbnail] = useState(null)
    const [gallery, setGallery] = useState(null)
    const [description, setDescription] = useState("")
    const [wifi, setWifi] = useState(false)
    const [pets, setPets] = useState(false)
    const [parking, setParking] = useState(false)
    const [bathroom, setBathroom] = useState(false)
    const [roomservice, setRoomservice] = useState(false)
    const [food, setFood] = useState(false)

    const onSubmit = (e) => {

        async function addHotel(){

            const formData = new FormData()

            // data from form

            const data = {
                Title: title,
                Area: area,
                Description: description,
                Price: price,
                WiFi: wifi,
                Pets: pets,
                Parking: parking,
                Bathroom: bathroom,
                Roomservice: roomservice,
                Food: food,
            }

            formData.set('data', JSON.stringify(data))

            // thumbnail
            formData.append('files.Thumbnail', thumbnail)

            // gallery
            for (let i = 0; i < gallery.length; i++){
                formData.append('files.Gallery', gallery[i])
            }

            const add = await fetch("http://localhost:1337/api/hotels", {
                method: "POST",
                headers: {},
                body: formData,
            })

            const addResponse = await add.json()
            console.log(addResponse)
        }

        addHotel()
    }

  return (
    <div>
        <h2>Add New Hotel</h2> 

        {!wifi ? <p>Wifi false</p> : <p>Wifi true</p>}

        <form onSubmit={onSubmit}>
            <label> <span> Hotel Name </span>
                <input type='text' value={title} name="Title" onChange={(e) => setTitle(e.target.value)} />
            </label>

            <br /> <br />

            <label> <span> Price Per Night </span>
                <input type='number' value={price} name="Price" onChange={(e) => setPrice(e.target.value)}  />
            </label>

            <br /> <br />

            <label> <span> Location </span>
                <select
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    name="Area"
                >
                    <option value="City Center">City Center</option>
                    <option value="Urban">Urban</option>
                    <option value="Rural">Rural</option>
                </select>
            </label>

            <br /> <br />

            <div> <span> Options </span> <br />

                <label> <span> WiFi </span>
                    <input type="checkbox" name="WiFi" onChange={() => setWifi(!wifi)} />
                </label> <br />

                <label> <span> Pets Allowed</span>
                    <input type="checkbox" name="Pets" onChange={() => setPets(!pets)} />
                </label> <br />

                <label> <span> Parking </span>
                    <input type="checkbox" name="Parking" onChange={() => setParking(!parking)} />
                </label> <br />

                <label> <span> Private Bathroom </span>
                    <input type="checkbox" name="Bathroom" onChange={() => setBathroom(!bathroom)} />
                </label> <br />

                <label> <span> Roomservice </span>
                    <input type="checkbox" name="Roomservice" onChange={() => setRoomservice(!roomservice)} />
                </label> <br />

                <label> <span> Food Available </span>
                    <input type="checkbox" name="Food" onChange={() => setFood(!food)}/>
                </label> <br />
            </div>

            <br /> <br />

            <label> <span> Thumbnail </span>
                <input type='file' accept="image/*" name="Thumbnail" onChange={(e) => setThumbnail(e.target.files[0])}/>
            </label>

            <br /> <br />

            <label> <span> Gallery </span>
                <input type='file' accept="image/*" name="Gallery" multiple="multiple" onChange={(e) => setGallery(e.target.files)}/>
            </label>

            <br /> <br />

            <label>
            {" "}
            <span> Description</span>
            <textarea
                value={description} name="Description" onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            </label>

            <br /> <br />

            <button>Add New Hotel</button>
        </form>
    </div>
  )
}

export default RegisterHotel