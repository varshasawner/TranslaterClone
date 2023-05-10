import { useEffect, useState } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";
import { FaBeer } from "react-icons/fa";

export default function TimeClock() {
  const [time, setTime] = useState(new Date());
	const [digi, setDigi] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

	useEffect(()=>{
		setInterval(()=>{
			setDigi(new Date().toLocaleTimeString())
		})
	}, [])

  return (
    <>
      <Clock value={time} />
			<h1>{digi}</h1>
			Lets go for a <FaBeer />
    </>
  );
}
