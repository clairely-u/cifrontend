import axios from "axios";
import Item, { Accessory, Top, Bottom, Shoes } from "./item-interfaces/iteminterface";

const baseUrl = "http://localhost:5001/clothesinventoryfb/us-central1/api";

//hopefully this will post a new item to the database, lol
export function postNewItem( newItem: Item ): Promise<Item>{
    return axios.post(baseUrl, newItem)
    .then(response => response.data)
}