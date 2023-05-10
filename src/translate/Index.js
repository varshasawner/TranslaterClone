import { useEffect, useState } from "react";

export default function Translate() {
  const [list, setList] = useState([]);
	const [from, setFrom] = useState("");
	const [to, setTo] = useState("");
	const [input, setInput] = useState("");
	const [output, setOutput] = useState("");

  useEffect(() => {
    fetch("https://libretranslate.de/languages")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setList(res);
      });
  }, []);

	const translate = () => {
    const params = new URLSearchParams();
    params.append('q', input);
    params.append('source', from);
    params.append('target', to);
    params.append('api_key', 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');

		fetch("https://libretranslate.de/translate",{
			method: "POST",
			headers :{
				'Accept' : 'application/json',
				'Content-Type' : 'application/x-www-form-urlencoded'
			},
      body : { params }
		})
		.then((res) => {
      console.log(res);
			// return res.json();
		})
		// .then((res) => {
		// 	console.log(res.translatedText);
		// 	// setOutput(res)
		// });
	}

  return (
    <>
      <div>
        From {from}:
        <select onChange={(e)=>{setFrom(e.target.value)}}>
          <option>FROM</option>
          {list.map((value, i) => {
            return (
              <option value={value.code} key={i}>
                {value.name}
              </option>
            );
          })}
        </select>
        To: {to}
        <select onChange={(e)=>{setTo(e.target.value)}}>
          <option>TO</option>
          {list.map((value, i) => {
            return (
              <option value={value.code} key={i}>
                {value.name}
              </option>
            );
          })}
        </select>
        <br />
        <br />
        <br />
        <br />
        <textarea onChange={(e)=>{setInput(e.target.value)}} rows={10} cols={50}></textarea>
        <textarea value={output} rows={10} cols={50}></textarea><br/><br/>

				<button onClick={translate}>Translate</button>
      </div>
    </>
  );
}
