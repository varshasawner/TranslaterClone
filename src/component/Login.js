import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Login(){
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const sendData = () => {
        if(userName === "varsha" && password === "123"){
                navigate("/user");
        }else{
            navigate('/')
        }
    }
    return (
        <>
            <form onSubmit={sendData}> 
                <input type="text" onChange={(e)=>setUserName(e.target.value)} value={userName}/><br></br><br></br>
                <input type="text" onChange={(e)=>setPassword(e.target.value)} value={password}/><br></br><br></br>
                <input type="submit" />
            </form>
        </>
    )
}