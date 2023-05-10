import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import Input from './Input';
import Draggable from 'react-draggable';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

export default function About() {
	const [time, setTime] = useState(new Date());

	useEffect(()=>{
		setInterval(()=>{
			setTime(new Date())
		}, 1000)
	}, [])

	const input = useRef(null);
	const navigation = useNavigate();
	const location  = useLocation();
  console.log(location);

	const handleInput = () => {
		input.current.value = "100";
		input.current.style.color = "red";
		input.current.style.border = "blue 2px solid";
	}

	const switchMe = () => {
		if(false){
			navigation('/contact')
		}else{
			navigation('/');
		}
		
	}
	return (
		<>
			<h1>About Component</h1>
			<Link to="profile">Profile</Link>
			<Link to="company">Company</Link>
			<Link to="user">User</Link>
			<Outlet />
			<br></br><br></br><br></br>

			<Input ref={input}/>
			<button onClick={handleInput}>CLick Me</button>

			<button onClick={switchMe}>Switch me another component</button>

			<h1>{location.pathname}</h1>
			<h1>{location.search}</h1>

			<Draggable>
				<h2>draggable text.........</h2>
			</Draggable>

			<div style={{ background:"pink"}}>
			<Clock value={time}></Clock>
			</div>

			<div className='bg'>
				<h1>Hello bg</h1>
			</div>
		
		</>
	)
}