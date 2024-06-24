import React,{useState} from 'react'
import Boxes from './Boxes'
import download from './assets/download.png'
import download1 from './assets/download1.png'
import download2 from './assets/download2.png'
const Home = () => {
    const data=[{
        name:"sattwik",
        surn:"das"
    },{
        name:"aarti",
        surn:"rathore"
    },{
        name:"amisha",
        surn:"singh"
    }];

    const [notes,setNotes]=useState(
        [
            {
                name:"sattwik",
                surn:"das"
            },
            {
                name:"aarti",
                surn:"rathore"
            },
            {
                name:"amisha",
                surn:"singh"
            }
        ]);
    const [namee,setName]=useState("");
    const [sur,setSur]=useState("");
    function nameChange(e){
        console.log(e.target.value)
        setName(e.target.value)
    }
    function surChange(e){
        console.log(e.target.value)
        setSur(e.target.value)
    }
    function changeNotes(){
        var newobj=
        {
            name:namee,
            surn:sur
        }
        setNotes([...notes,newobj])
        console.log(notes)
        
    }
    
    
  return (
    <div>
        {
            notes.map((i)=>{
                return(
                    <>
                        <Boxes helu={i.name} helo={i.surn} />
                    </>
                )
            })
        }
        <input onChange={nameChange} type="text" placeholder='enter name' />
        <input onChange={surChange} type="text" placeholder="enter surname" />
        <button onClick={changeNotes}>Submit</button>
        
    </div>
  )
}

export default Home