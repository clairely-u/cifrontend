import React, { useState, useSyncExternalStore } from "react";
import { signOut } from "../firebaseConfig"
import AddToWardrobe from "./AddWardrobe";
import { postNewItem } from "../APIservices";
import { Link } from "react-router-dom";

export default function WhatDo() {
    const [showATW, setShowATW] = useState(false);


    return(
        <div className="WhatDo">

            <div className="ActionNavText">
                What would you like to do? 
            </div>

            <div className="ActionNavButtons">

                <button id="actionbutton">Generate Outfit</button>
                

                <div className="Show__ATW">
                {showATW? 
                <div className = "ATW__shown">
               <AddToWardrobe onSubmit={postNewItem}/>
               <button onClick ={() => setShowATW(false)}>Nvm!</button>
               </div>
               :
                <button id="actionbutton" onClick={() => {setShowATW(true)}}>Add to your Wardrobe</button>
                }
                </div>
                
                <button id="actionbutton">VIew Wardrobe</button>

            </div>

            <div className="SignOutButton">
                <button onClick={signOut}>sign out?</button>
            </div>

        </div>
    )
}