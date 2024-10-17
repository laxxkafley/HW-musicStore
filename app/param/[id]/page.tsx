'use client';
import { useParams } from 'next/navigation';
import { instruments } from "@/instrumentttt";

export default function InstrumentDetail() {
    const { id } = useParams(); // Get the 'id' from the URL
    const instrumentId = Number(id); // Convert the 'id' to a number

    // Find the instrument by its ID
    const instrument = instruments.find(item => item.id === instrumentId);

    // If no instrument is found, return a not found message
    if (!instrument) {
        return <div>Instrument not found</div>;
    }

    // Render the instrument details if found
    return (
        <div className="bg-pink-50 m-6 p-6  text-red-900 rounded">
            <h1 className="text-2xl  font-bold text-red-900">{instrument.name}</h1>
            <img src={instrument.image_url} alt={instrument.name} className="w-48 h-auto mx-auto" />
            <p>Price: <span className="font-bold">${instrument.price}</span></p>
            <p>Condition: <span className={instrument.is_new ? "text-green-500" : "text-red-500"}>{instrument.is_new ? "New" : "Used"}</span></p>
            <p>Likes: <span className="font-bold">{instrument.like}</span></p>
            <button className="mt-4 p-2 bg-red-500 rounded text-white">
                <a href="/">Go Back</a>
            </button>
        </div>
    );
}
