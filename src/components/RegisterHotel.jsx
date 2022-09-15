import { useState } from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { hotelSchema } from "../validations/HotelValidation";
import { useNavigate } from 'react-router-dom';

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

    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({ resolver: yupResolver(hotelSchema) });

    const onSubmit = async () => {

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
        alert('Hotel added successfully')
        navigate('/')
    }

  return (
    <div>
        <h2>Add New Hotel</h2> 

        <form onSubmit={handleSubmit(onSubmit)}>
            <label> <span> Hotel Name </span>
                <input {...register("Title")} type='text' value={title} name="Title" onChange={(e) => setTitle(e.target.value)} />
                {errors.Title && <span>{errors.Title.message}</span>}
            </label>

            <br /> <br />

            <label> <span> Price Per Night </span>
                <input {...register("Price")} type='number' value={price} name="Price" onChange={(e) => setPrice(e.target.value)}  />
                {errors.Price && <span>{errors.Price.message}</span>}
            </label>

            <br /> <br />

            <label> <span> Location </span>
                <select
                    {...register("Area")}
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    name="Area"
                >
                    <option value="City Center">City Center</option>
                    <option value="Urban">Urban</option>
                    <option value="Rural">Rural</option>
                </select>
                {errors.Area && <span>{errors.Area.message}</span>}
            </label>

            <br /> <br />

            <div> <span> Options </span> <br />

                <label> <span> WiFi </span>
                    <input {...register("WiFi")} type="checkbox" name="WiFi" onChange={() => setWifi(!wifi)} />
                    {errors.WiFi && <span>{errors.WiFi.message}</span>}
                </label> <br />

                <label> <span> Pets Allowed</span>
                    <input {...register("Pets")} type="checkbox" name="Pets" onChange={() => setPets(!pets)} />
                    {errors.Pets && <span>{errors.Pets.message}</span>}
                </label> <br />

                <label> <span> Parking </span>
                    <input {...register("Parking")} type="checkbox" name="Parking" onChange={() => setParking(!parking)} />
                    {errors.Parking && <span>{errors.Parking.message}</span>}
                </label> <br />

                <label> <span> Private Bathroom </span>
                    <input {...register("Bathroom")} type="checkbox" name="Bathroom" onChange={() => setBathroom(!bathroom)} />
                    {errors.Bathroom && <span>{errors.Bathroom.message}</span>}
                </label> <br />

                <label> <span> Roomservice </span>
                    <input {...register("Roomservice")} type="checkbox" name="Roomservice" onChange={() => setRoomservice(!roomservice)} />
                    {errors.Roomservice && <span>{errors.Roomservice.message}</span>}               
                </label> <br />

                <label> <span> Food Available </span>
                    <input {...register("Food")} type="checkbox" name="Food" onChange={() => setFood(!food)}/>
                    {errors.Food && <span>{errors.Food.message}</span>}
                </label> <br />
            </div>

            <br /> <br />

            <label> <span> Thumbnail </span>
                <input {...register("Thumbnail")} type='file' accept="image/*" name="Thumbnail" onChange={(e) => setThumbnail(e.target.files[0])} required/>
                {errors.Thumbnail && <span>{errors.Thumbnail.message}</span>}
            </label>

            <br /> <br />

            <label> <span> Gallery </span>
                <input {...register("Gallery")} type='file' accept="image/*" name="Gallery" multiple="multiple" onChange={(e) => setGallery(e.target.files)} required/>
                {errors.Gallery && <span>{errors.Gallery.message}</span>}
            </label>

            <br /> <br />

            <label>
            {" "}
            <span> Description</span>
            <textarea
                {...register("Description")}
                value={description} name="Description" onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            {errors.Description && <span>{errors.Description.message}</span>}
            </label>

            <br /> <br />

            <button>Add New Hotel</button>
        </form>
    </div>
  )
}

export default RegisterHotel