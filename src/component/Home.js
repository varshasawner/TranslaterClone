// import {useLocation} from 'react-router-dom'
export default function Home(abc) {
  
	// const location  = useLocation();
	// console.log(location);
	// console.log(abc)
	return (
		<>
			<h1>Home Component {abc.msg}</h1>
			<p>{abc.fun}</p>
		</>
	)
}