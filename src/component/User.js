import Draggable from "react-draggable";
import { useLocation, useParams } from "react-router-dom"

export default function User(){
    const userName = useParams();
    const {name} = userName;

    const location = useLocation();
    console.log(location);

    return (
        <>
            <h1>Welcome....{name}</h1>
            <h1>{location.pathname}</h1>


            <Draggable>
                <h1>Hello react js Draggable</h1>
            </Draggable>
           
        </>
    )
}