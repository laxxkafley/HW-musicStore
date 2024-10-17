    'use client';
    import { useState } from "react";
  

    import Link from 'next/link'; 

    import { instruments } from "@/instrumentttt"
    // import ViewDetail from "../Params/[id]/page";

    export default function Main() {
        const [name, setName] = useState('');
        const [price, setPrice] = useState('');
        const [image_url, setImage_url] = useState('');
        const [like, setLike] = useState('');
        const [is_new, setIs_new] = useState(false);
        const [editId, setEditId] = useState(-1);
        const [instrumentData, setInstrumentData] = useState(instruments);

        function addInstrument() {
            const newInstrument = {
                id: instrumentData.length > 0 ? instrumentData[instrumentData.length - 1].id + 1 : 1, // Increment ID
                name,
                image_url,
                let price: Number(price),
                let like: Number(like),
                is_new 
            };
            setInstrumentData([...instrumentData, newInstrument]);
            resetForm();
        }

        function editInstrument(id:Number) {
            const itemIndex = instrumentData.findIndex((item) => item.id === id);
            setEditId(itemIndex);
            setName(instrumentData[itemIndex].name);
            setPrice(String(instrumentData[itemIndex].price));
            setLike(String(instrumentData[itemIndex].like));
            setImage_url(instrumentData[itemIndex].image_url);
            setIs_new(instrumentData[itemIndex].is_new);
        }

        function deleteInstrument(id:Number) {
            const temp = instrumentData.filter((item) => item.id !== id);
            setInstrumentData(temp);
        }

        function updateInstrument(){
            const temp=instruments;
            temp[editId].name=name
            temp[editId].price=Number(price)
            temp[editId].like=Number(like)
            temp[editId].image_url=image_url
            temp[editId].is_new=is_new
            setInstrumentData([...temp])
            console.log("update")

            setEditId(-1)
            setName("")
            setPrice("")
            setImage_url("")
            setIs_new(false)
            setLike("")
        }

    

        function resetForm() {
            setEditId(-1);
            setName('');
            setPrice('');
            setImage_url('');
            setLike('');
            setIs_new(false);
        }

        return (
            <>
            <div className="bg-pink-50 m-6 rounded">
                <h1 className="flex flex-row justify-start items-center text-2xl font-bold text-red-900 text-center mx-auto mb-1 ml-10 mr-5 rounded">🎶Jas Music Store</h1>
                <div className="mt-1 text-1xl mb-4 ml-10 text-red-950 text-cleft mr-5">Welcome to the paradise for music enthusiasts🤎</div>
                
                    <ul className="bg-yellow-800 ml-10 grid lg:grid-cols-3 sm:grid-cols-2 gap-4 my-5 mt-0 mr-5">
                        {instrumentData.map((item) => (
                            <li key={item.id} className="border p-4 rounded shadow-lg hover:bg-green-950">
                                <img src={item.image_url} alt={item.name} className="w-32 h-auto mx-auto" />
                                <h2 className="font-semibold text-lg mt-2">{item.name}</h2>
                                <p>Price: <span className="font-bold">${item.price}</span></p>
                                <p>Condition: <span className={item.is_new ? "text-green-500" : "text-red-500"}>{item.is_new ? "New" : "Used"}</span></p>
                                <p>Likes: <span className="font-bold">{item.like}</span></p>
                                
                                <button className="border-2 bg-red-900 m-4 w-11" onClick={() => editInstrument(item.id)}>
                                    edit
                                </button>
                                <button className="border-2 bg-red-500 w-11" onClick={() => deleteInstrument(item.id)}>
                                    delete
                                </button>
                                <Link href={`/param/${item.id}`}>
        <button className="m-5 border-2 bg-red-500 w-16">View Details</button>
    </Link>
                            </li>
                    ))}
                </ul>
                <br />
                <div className="ml-12">
                    <h1 className="flex text-xl font-bold text-red-800 my-5">Add Instrument</h1>
                    <div> 
                        <input className="border-2 bg-pink-300 border-gray-500 m-1 g-white rounded text-red-950" onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" value={name} />
                        <br />
                        <input className="border-2 bg-pink-300 text-red-950 m-1 bg-pink rounded" onChange={(e) => setPrice(e.target.value)} type="text" placeholder="Price" value={price} />
                        <br />
                        <input className="bg-pink-300 m-1 text-red-950 rounded" onChange={(e) => setImage_url(e.target.value)} type="text" placeholder="Image URL" value={image_url} />
                        <br />
                        <input className="m-1 bg-pink-300 text-red-950 rounded" onChange={(e) => setLike(e.target.value)} type="text" placeholder="Likes" value={like} />
                        <br />
                        <div className="text-red-950 w-52">
                            <label className="mr-2">
                                <input type="checkbox" checked={is_new} onChange={() => setIs_new(true)} />
                                New
                            </label>
                            <label>
                                <input type="checkbox" checked={!is_new} onChange={() => setIs_new(false)} />
                                Used
                            </label>
                        </div>
                    </div>
                    <div className="flex">
                        <button className="bg-red-900 border-2 border-black m-1 p-2" onClick={(editId === -1) ? addInstrument : updateInstrument}>
                            {(editId === -1) ? "Add new" : "Update Instrument" }
                        </button>
                    </div>
                </div>
            </div>
            </>
        );
    }
