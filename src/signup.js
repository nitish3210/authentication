import React ,{useState} from 'react'
import "./signup.css"
import {  useHistory } from "react-router-dom";
import {auth,db} from "./firebase"


export default function Signup() {
    const [email ,setEmail] =useState("");
    const [firstname ,setFirstname] =useState("");
    const [password,setPassword]=useState("");
    const history=useHistory();


    function submit(e){
      e.preventDefault();
     auth.createUserWithEmailAndPassword(email,password)
    .then((userCredential) => {
     db.collection("users").doc(userCredential.user.uid).add({
       uid  : userCredential.uid,
       email: email,
       name : firstname,
       createdAt :new Date()
      })
    });  

      alert("you signup successfully");  
    //   history.push("/signin");
    }

    return (
        <>
            <div className="container">
             <form className="signupform">
               <div className="first">
                 <label className="label"> First name </label>
                  <input type ="text"  className="input"
                   onChange={(e) =>setFirstname(e.target.value)}
                  />  
               </div>  
           
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
                    <button id="but" onClick={submit}> Sign Up </button>    
                </div>
            </form>   
            </div>
        </>
    )
}