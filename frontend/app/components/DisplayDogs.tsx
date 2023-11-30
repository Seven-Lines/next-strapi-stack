import Link from "next/link";
import { json } from "stream/consumers";

interface Dog { 
  id: number;
  attributes: { 
    Breed: string; 
  };
}

export default function DisplayDogs({
  data: dogs
}: {
  data: Dog[];
}) {
  return (
    <div>
      {dogs && dogs.length > 0 ? (
        dogs.map((dog) => (
          <div key={dog.id}>{dog.attributes.Breed}</div>
        ))
      ) : (
        <p>No dogs yet..</p>
      )}
    </div>
  );
}