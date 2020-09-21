import React , {useState} from 'react'
import axios from "axios"
var URLConnexion = "http://localhost:8080/connexion"
const Connexion=()=>{
    const[name, setName]=useState("")
    const [password, setPassword]= useState("")
    const check=()=>{
        console.log(name)
        console.log(password)
        let request= {userName:name, password:password}
        axios.post(URLConnexion , request).then(resp=>{alert(resp.data.message)}).catch(err=>{console.log(err)})
    //     fetch('https://localhost:8080/connexion', {
    //     method: 'POST',
    //     // We convert the React state to JSON and send it as the POST body
    //     body: {"UserName": UserName, "Password":password}
    //   }).then(function(response) {
    //     console.log(response)
    //     return response.json();
    //   });
    }
    return(
        <div>
            <input  placeholder="UserName" onChange={(e)=>{setName(e.target.value)}}/>
            <input type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} />
            <button  onClick={check}>connexion</button>

        </div>
    )
}
export default Connexion