import React,{useEffect, useState} from 'react'
import { GoogleGenerativeAI } from "@google/generative-ai";//importing the google generative ai
import { VscPerson } from "react-icons/vsc";//importing the react icons
import { VscCopilot } from "react-icons/vsc";//importing the react icons
import './chat.css'
function Chat() {
  const [total,settotal]=useState([])//state for storing the total data of the chat
    const [messages, setMessages] = useState("")//state for storing the messages
    const [question, setquestion] = useState("")//state for storing the question
    const apikey=import.meta.env.GEMINI_API;//getting the api key from the environment variable
    const genAI = new GoogleGenerativeAI("AIzaSyAilZxzsRunURHeZqxnBdIaEjvq7j2YXjI");//creating the object of the google generative ai
    const [flag,setflag] = useState(false);//state for storing the flag
    const [data,setdata]=useState("...")//state for storing the data
    
    useEffect(()=>{//useEffect for getting the data from the local storage
      var dataa=localStorage.getItem('amisha')//getting the data from the local storage
      if(dataa)
        {
          var newd=JSON.parse(dataa)
          settotal(newd)
          setflag(true);
        }
    },[])
    async function run() {
      setflag(true)
      // For text-only input, use the gemini-pro model
      const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    
    
      const result = await model.generateContent(messages);
      const response = await result.response;
      const text = response.text();
      console.log(text);
      var newobj={
        question:messages,
        answer:text
      }
      var totalda=[...total,newobj]
      localStorage.setItem('amisha',JSON.stringify(totalda))
      settotal([...total,newobj])

    }
    
    function f1(e){
        console.log(e.target.value)
        setMessages(e.target.value)
    }
    
  return (
    <div className='chatout'>
        <div className='chatin'>
          {
              (flag===true)?<>
                  {/* CONDITION TRUE AREA */}
                  {
                    total.map((obj)=>{
                      return(
                        <div>
                          <h3> <VscPerson style={{color:"purple"}} /> <br/> {obj.question} </h3>
                          <h3> <VscCopilot style={{color:"purple"}} /> <br/> {obj.answer}</h3>
                          <hr/>
                        </div>
                      )
                    })
                  }
              </>:
                <>
                  {/* CONDITION FALSE AREA */}
                 
                </>
            }


        </div>
        <div className='chatsearch'>
        <input onChange={f1}  placeholder="Enter your message" />
        <button onClick={run}>Send</button>
        </div>
    </div>
  )
}

export default Chat