import qs from "qs"; 
import { stringify } from "querystring";

export async function fetchData(
    path: string, 
    options = {}
) {
    try {    
        const response = await fetch(`http://localhost:1337/api/dogs`, options); 
        const data = await response.json();

        return data;
    } catch (error) { 
        console.error(error)
    }
}