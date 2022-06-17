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
    const [printedBox, setPrintedBox] =useState(false);
    const [solidBox, setSolidBox] = useState(false);

    //primary color check boxes
    const [redBox, setRedBox] = useState(false);
    const [pinkBox, setPinkBox] = useState(false);
    const [orangeBox, setOrangeBox] = useState(false);
    const [yellowBox, setYellowBox] = useState(false);
    const [greenBox, setGreenBox] = useState(false);
    const [blueBox, setBlueBox] = useState(false);
    const [purpleBox, setPurpleBox] = useState(false);

    //secondary color checkboxes/check for nullish?

    const handleTypeSet = (e: any) => {
        const typeValue = e.target.value;
        const typeChecked = e.target.checked;

        if(typeChecked) {
            setItemType(prev => [...prev, typeValue])
        }  else {
            setItemType(itemType.filter(t => t! == typeValue))
        }
        // check for item type
        if(typeValue === "Accessory") {
            setAccessoryBox(e.target.checked);
        }
        if(typeValue === "Top") {
            setTopBox(e.target.checked);
        }
        if(typeValue === "Bottom") {
            setBottomBox(e.target.checked)
        }
        if(typeValue === "Shoes") {
            setShoeBox(e.target.checked);
        }
    }

    //check whether or not printed
    const handlePrintSet = (e:any) => {
        const printValue = e.target.value;
        const printChecked = e.target.checked;

        if (printChecked) {
            setItemPrinted(true);
        } //item printed true means that it IS printed/textured
    }

    //input primary color
    const handlePColorSet = (e:any) => {
        const pColorValue = e.target.value;
        const pColorChecked = e.target.checked;

        if (pColorChecked) {
            setItemColor(prev => [...prev, pColorValue])
        } else {
            setItemColor(itemColor.filter(p => p! == pColorValue))
        }

        //
        if(pColorValue === "Red") {
            setRedBox(e.target.checked);
        }
        if (pColorValue === "Pink") {
            setPinkBox(e.target.checked);
        }
        if(pColorValue === "Orange") {
            setOrangeBox(e.target.checked);
        }
        if(pColorValue === "Yellow") {
            setYellowBox(e.target.checked);
        }
        if(pColorValue === "Green") {
            setGreenBox(e.target.checked);
        }
        if(pColorValue === "Blue") {
            setBlueBox(e.target.checked);
        }
        if(pColorValue === "Purple") {
            setPurpleBox(e.target.checked);
        }
    }

    //
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
                <div className="ATW__boxes">
                    <input type="checkbox" value="Accessory" onChange={handleTypeSet} checked={accessoryBox}/> Accessory
                    <input type="checkbox" value="Top" onChange={handleTypeSet} checked={topBox}/>Top
                    <input type="checkbox" value="Bottom" onChange={handleTypeSet} checked={bottomBox}/>Bottom
                    <input type="checkbox" value="Shoes" onChange={handleTypeSet} checked={shoeBox}/>Shoes
                </div>

                <label>Check here if the item is printed/multicolored or textured. If it is solid, leave the checkbox empty.</label>
                <div className="ATW__primarycolor">
                    <input type="checkbox"/>
                </div>

                <input className='submit' type="submit"value ="Submit"/>

            </form>
        </div>
    )
}