import React, {useEffect,useState} from 'react'

function Details() {
    const [details, setDetails] = useState(JSON.parse(localStorage.getItem('personData')||"[]"));
    const [searchCharacter, setsearchCharacter] = useState("");
    const [expenditure, setExpenditure] = useState("")
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
    <>
        <div>
            <br /><label >Enter the Name of The Employee</label>
            <input type="text" onChange={(e) => setsearchCharacter(e.target.value)} placeholder="Name"></input><br /><br />
            <label >Enter the expenditure of The Employee</label>
            <input type="text" onChange={(e) => setExpenditure(e.target.value)} placeholder="Amount"></input><br /><br />
            <button onClick={() => searchPerson()}>Get Details</button><br /><br />
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
                            <p>Credit:${100000-expenditure}</p>
                        </div>
                    </div>
                </div>
            ))
        }
        </div>
    </>
  )
}

export default Details