import React, {useState, useContext} from "react";
import WhatDo from "./WhatDo";
import AuthContext from "../context/AuthContext";
import { signInWithGoogle, signOut } from "../firebaseConfig";

export default function Home() {
    const {user} = useContext(AuthContext);



    return (
        <div className="Home">
             <WhatDo/>                
        </div>
    )
}
