import React, { useEffect, useState,useRef } from 'react'

function Table() {

    const [games,setGames] = useState([]);
    const gamesData = useRef(games);

    

    useEffect(()=>{
        const getData = async()=>{
            let response = await fetch("https://jsonmockserver.herokuapp.com/games");
            let data = await response.json();
            setGames(data)
            gamesData.current = data;
            console.log(gamesData.current);
        }
        getData()
    },[])
    
    const sortName = ()=>{
        let sortData = games.sort((a,b)=> a.gamename - b.gamename);
        
        // console.log(sortData);
    }

    const sortPrice = ()=>{
        let sortData = games.sort((a,b)=>a.gameprice - b.gameprice);
        gamesData.current = sortData;
        // window.location.reload();
    }

   
  return (
    <div >
       <table id='table'>
           <thead>
               <th>game name
                   <button onClick={()=>sortName}>Sort by Alphabetically</button>
               </th>
               <th>game author</th>
               <th>game tags</th>
               <th>game price
                   <button id='sortbyprice' onClick={()=>sortPrice()}>Sort Price</button>
               </th>
               <th>is for kids</th>
               <th>rating
                   <button id='sortbyrating'>Sort Rating</button>
               </th>
           </thead>
           <tbody>
                {
                    games.map((currentGame)=>{
                        return (
                            <tr className='gamerow'>
                                <td className='gamename'>{currentGame.gamename}</td>
                                <td>{currentGame.gameauthor}</td>
                                <td>{currentGame.gametags}</td>
                                <td className='gameprice'>{currentGame.gameprice}</td>
                                <td>{currentGame.forkids}</td>
                                <td>{currentGame.gamedese}</td>
                                <td className='gamerating'>{currentGame.gamerating}</td>
                            </tr>
                        )
                    })
                }
           </tbody>
       </table>
    </div>
  )
}

export default Table
