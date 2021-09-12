import React ,{useState} from 'react'
import "./signup.css"
import {  useHistory } from "react-router-dom";
import {auth,db} from "./firebase"


export default function Signin() {
    const [email ,setEmail] =useState("");
    const [password,setPassword]=useState("");
    const history=useHistory();


    function submit(e){
      e.preventDefault();
      auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        if (result) {
          console.log(auth);
          alert("signin success");
        } else {
          alert(result.user);
        }
      })
      .catch((error) => alert(error.message));
    }

    return (
        <>
            <div className="container">
             <form className="signupform">
               <div className="email">
                  <label className="label"> Email </label> 
                  <input type ="text"  className="input"
                   onChange={(e) =>setEmail(e.target.value)}
                  />   
                </div> 
                <div className="password">
                  <label className="label"> Password</label> 
                  <input type ="password"  className="input"
                   onChange={(e) =>setPassword(e.target.value)}
                  />   
                </div> 

                <div className="button"> 
                    <button id="but" onClick={submit}> Sign in </button>    
                </div>
            </form>   
            </div>
        </>
    )
}