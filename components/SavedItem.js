import { useState } from 'react';
//import FurnitureItem from './FurnitureItem';

const savedItems = [];
const SavedItem = (itemId) => {
    savedItems.push(itemId);
    console.log(savedItems);
   
}
export default SavedItem;