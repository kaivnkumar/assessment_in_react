import React, {useEffect,useState} from 'react'

import './FetchApi.css';

function FetchApi() {
    const [details, setDetails] = useState(JSON.parse(localStorage.getItem('personData')||"[]"));
    const [searchCharacter, setsearchCharacter] = useState("");
    useEffect(()=> {
        fetch('https://randomuser.me/api/?results=10')
            .then((info) => {
                info.json().then((details) => {
                    setDetails(details.results);
                    localStorage.setItem('personInfo',JSON.stringify(details.results))

                })
            });
        },[]
    );
    const searchPerson =() =>{
        let searchedData = details.filter((item)=>item.name.first===searchCharacter)
        setDetails(searchedData);
        localStorage.setItem('details',JSON.stringify(searchedData));
    }
  return (
    <div>
        <div>
            <br /><input type="text" onChange={(e) => setsearchCharacter(e.target.value)} placeholder="search a Chracter"></input>
            <button onClick={() => searchPerson()}>search</button><br /><br />
        </div>
        <div className='Content'>
        {
            (details.length > 0) && details.map((object,index)=>(
                <div className='employees' key={index}>
                    <div class="card">
                        <img src={object.picture.large} />
                        <div class="container">
                            <h4><b>{object.name.first}</b></h4>
                            <p>{object.dob.date}</p>
                            <p>{object.gender}</p>
                            <p>{object.phone}</p>
                            <p>{object.email}</p>
                            <p>Salary : $100000</p>
                        </div>
                    </div>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default FetchApi