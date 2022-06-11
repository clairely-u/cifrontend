import React from "react";
import { signOut } from "../firebaseConfig"

export default function WhatDo() {


    return(
        <div className="WhatDo">

            <div className="ActionNavText">
                What would you like to do? 
            </div>

            <div className="ActionNavButtons">
                <button id="actionbutton">Generate Outfit</button>
                <button id="actionbutton">Add to your Wardrobe</button>
                <button id="actionbutton">VIew Wardrobe</button>
            </div>

            <div className="SignOutButton">
                <button onClick={signOut}>sign out?</button>
            </div>

        </div>
    )
}