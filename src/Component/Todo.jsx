import React, { useState } from "react"


const Todo =()=>{

    const [input ,setinput ]=useState("")
    const [item , setitem] = useState([])

    

    const Add= ()=>{
        if(!input){
            alert("write something")
        }
        else{
            setitem([ ...item,input])
        setinput("")

        }
        
    }

    const del =(ids)=>{
        console.log(ids);
        const update= item.filter((arr ,inde) => {
            return inde !== ids ;

        })

        setitem(update)
    }
    const remove =()=>{
        setitem([])
    }

  
    const img = "https://img.pngio.com/gta-wikito-do-list-rename-gta-wiki-fandom-powered-by-wikia-to-do-png-300_300.png"
    return(
        <>
        <div className= "main">
            <div className = "card">
                <figure >
                    <img src={img} alt="" />
                    <figcaption> Add your List here ✋</figcaption>
                </figure>
                 <div className="additem">
                <input type="text" placeholder="Add items....." 
                   value={input}  onChange={(event)=>{
                       setinput(event.target.value)
                   }}/>
                <button className="input_btn" onClick={Add}>+</button>
                </div>
                <div className= "someitem">
                    {
                        item.map((element , index) =>{

                            return(
                                <div className="each_item" key= {index}>
                                <h3>{element}</h3>
                                <button className="input_btn" onClick={ ()=>del(index)}>-</button>
                            </div>
                            )

                        })
                    }
                   
                    <div className="last">
                        <button className="lst_btn" onClick={remove}>check List</button>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
    
}
export default Todo
