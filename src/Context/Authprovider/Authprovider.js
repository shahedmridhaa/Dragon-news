import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.config";

export const Authcontext = createContext();
const auth = getAuth(app);


const Authprovider = ({ children }) => {
    const [loading, setLoading] = useState(true)

    // ===Create Google Account===
    const userLogin = (provider) =>{
        return signInWithPopup(auth, provider)
    }

    // ===Create account with email and password===
    const regester =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }


    //==== Login with email and password===
    const UserLogin = ( email, password) => {
       return signInWithEmailAndPassword(auth, email, password)
    }
    


    //====UpdetProfile=====
    const updateUserProfile = (profile) =>{
        return updateProfile(auth.currentUser, profile)
    }

   

    // ====Verify email address====
    const verifyemail = () =>{
       return sendEmailVerification(auth.currentUser)
    }


    // ===User LogOut====
    const logout =() =>{
       return signOut(auth)
    }
   

    //==== User Control====
    const [user, setUser] = useState(null)
    useEffect(() =>{      
      const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser)
            setLoading(false)
            console.log(currentUser);
        })
        return () =>{
            unsubscribe()
        }
    },[])


  const authInfo = {userLogin, user, logout, regester, UserLogin, loading, updateUserProfile, verifyemail };
  return (
    <Authcontext.Provider value={authInfo}>
        {children}
    </Authcontext.Provider>
  );
};

export default Authprovider;
