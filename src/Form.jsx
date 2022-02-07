import React from 'react'
import { useRef } from 'react'

function Form() {
    const gamename = useRef("");
    const gameauthor = useRef("");
    const gametags = useRef("");
    const gameprice = useRef(0);
    const kids = useRef(false);
    const gamedese = useRef("");
    const rating = useRef(0);

    //define formSubmit
    const formSubmit = (event) => {
        event.preventDefault();

        const gameData = {
            gamename: gamename.current.value,
            gameauthor: gameauthor.current.value,
            gameprice: gameprice.current.value,
            gametags: gametags.current.value,
            forkids: kids.current.value,
            gamedesc: gamedese.current.value,
            gamerating: rating.current.value,
        }

        fetch("http://localhost:8000/games", {
            method: "post",
            body: JSON.stringify(gameData),
            headers: {
                "content-type": "application/json"
            }
        }).then(() => {
            console.log("Data Send Successfully");
            window.location.reload();
        }).catch((error) => console.log(error));

        console.log(gameData);
    }
    return (
        <div id="container">

            <form id="addgame" onSubmit={formSubmit}>
                {/* <h1>hello world</h1> */}
                <input type="text" placeholder="Game Name" name="gamename" ref={gamename} />
                <input type="text" placeholder="Game Author" name="gameauthor" ref={gameauthor} />
                <input type="text" placeholder="Game Tags" name="gametags" ref={gametags} />
                <input type="number" placeholder="Enter Price..." name="gameprice" ref={gameprice} />
                <input type="checkbox" name="forkids" ref={kids} />
                {/* <label for="forkids">Kids</label> */}
                <textarea name="gamedesc" cols="30" rows="10" placeholder='Game Description...' ref={gamedese}></textarea>
                <select name="gamerating" ref={rating}>
                    <option value="0">Rating</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Form
