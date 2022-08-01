import React, { useEffect } from 'react'

function FetchApi() {
    useEffect(()=> {
        fetch('https://randomuser.me/api/?results=10')
            .then((info) => {
                info.json().then((data)=> {
                    console.log(data);
                })
            });
        },[]
    );

  return (
    <div>FetchApi</div>
  )
}

export default FetchApi