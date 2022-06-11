import { FormEvent, useEffect, useState } from "react";
import Item, { Accessory, Top, Bottom, Shoes } from "../item-interfaces/iteminterface";

interface Props {
    onSubmit:(Item: Item) => void;
}

export default function  AddToWardrobe({onSubmit}: Props) {
    const [itemType, setItemType] = useState<string[]>([]);
    const [itemPrinted, setItemPrinted] = useState(false);
    const [itemColor, setItemColor] = useState<string[]>([]);
    const [secondaryColor, setSecondaryColor] = useState<string[]>([]);

    const handleTypeSet = (e: any) => {
        const typeValue = e.target.value;
        
        // check for item type
        if(typeValue === "Accessory") {
            setItemType(e.target.checked);
        }
        if(typeValue === "Top") {
            setItemType(e.target.checked);
        }
        if(typeValue === "Bottom") {
            setItemType(e.target.checked)
        }
        if(typeValue === "Shoes") {
            setItemType(e.target.checked);
        }
    }

    //check whether or not printed
    const handlePrintChange = (e: any) => {
        const printValue = e.target.value;

        if (printValue === true) {
            setItemPrinted(e.target.checked);
        } // else false, I guess?
    }
}