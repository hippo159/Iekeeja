import { useState } from 'react';
import FurnitureItem from './FurnitureItem';

const [savedItems , setItems] = useState([]);
const SaveItem = (props) => {
    const saveHandler = () => {
    setItems(currentItems => [...savedItems, currentItems]);
    console.log(savedItems);
    }
}
export default SaveItem;