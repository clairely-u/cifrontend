import { type } from "@testing-library/user-event/dist/type";
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
    //type check boxes
    const [accessoryBox, setAccessoryBox] = useState(false);
    const [topBox, setTopBox] = useState(false);
    const [bottomBox, setBottomBox] = useState(false);
    const [shoeBox, setShoeBox] = useState(false);

    //printed check boxes

    //color check boxes

    //secondary color checkboxes/check for nullish?

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

    function handleSubmit(e:FormEvent) {
        e.preventDefault();
        const CurrentItem: Item = {
            type: itemType,
            printed: itemPrinted,
            primaryColor: itemColor,
            secondaryColor: secondaryColor,
        }
        onSubmit(CurrentItem);
        //probably here the addtowardrobe component will close/return to main screen
        // display a message that says if the item was added successfully or not
    }

    return (
        <div className = "AddToWardrobe">
            <form onSubmit={handleSubmit}>
                <label className = "ATW__question">What would you like to add?</label>
                <div className="ATW__input">
                    <input type="checkbox" value="Accessory" onChange={handleTypeSet} checked={accessoryBox}>Accessory</input>
                    <input type="checkbox" value="Top" onChange={handleTypeSet} checked={topBox}>Top</input>
                    <input type="checkbox" value="Bottom" onChange={handleTypeSet} checked={bottomBox}>Bottom</input>
                    <input type="checkbox" value="Shoes" onChange={handleTypeSet} checked={shoeBox}>Shoes</input>
                </div>

                <label>Is this item printed, textured, or solid?</label>
                <div className="ATW__primarycolor">
                    <input type="checkbox"></input>
                </div>


            </form>
        </div>
    )
}