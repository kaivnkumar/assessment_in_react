import React, {useEffect,useState} from 'react'

function FetchApi() {
    const [details, setDetails] = useState(JSON.parse(localStorage.getItem('personData')||"[]"));
    useEffect(()=> {
        fetch('https://randomuser.me/api/?results=10')
            .then((info) => {
                info.json().then((details) => {
                    console.log(details.results);
                    setDetails(details.results);
                    localStorage.setItem('personInfo',JSON.stringify(details.results))

                })
            });
        },[]
    );
  return (
    <div>
        {
            (details.length > 0) && details.map((object,index)=>(
                <div key={index}>
                    <img src={object.picture.large} /><br />
                    <span>{object.name.first}</span><br />
                    <span>{object.dob.date}</span><br />
                    <span>{object.gender}</span><br />
                    <span>{object.phone}</span><br />
                    <span>{object.email}</span><br />
                </div>
            ))
        }
    </div>
  )
}

export default FetchApi