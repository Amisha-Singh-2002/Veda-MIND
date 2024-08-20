import React,{useState} from 'react'
import './Form.css'
const Form = () => {
    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[roll, setRoll] = useState('')
    const[department, setDepartment] = useState('')
    function f1(e){
        setName(e.target.value)
    }
    function f2(e){
        setEmail(e.target.value)
    }   
    function f3(e){
        setRoll(e.target.value)
    }       
    function f4(e){
        setDepartment(e.target.value)
    }   
    function f5(){
        var obj = {
            name: name,
            email: email,
            roll: roll,
            department: department
        }
        alert("Form submitted successfully"+ "\n" + "Name: " + name + "\n" + "Email: " + email + "\n" + "Roll: " + roll + "\n" + "Department: " + department)   
        // console.log(name)
        // console.log(email)
        // console.log(roll)
        // console.log(department)
    }
  return (
    <div className="formout">
        <h1>Form</h1>
        <input  type="text" placeholder="Enter your name" />
        <input onChange={f2} type="email" placeholder="Enter your email" />
        <input onChange={f3} type="number" placeholder="Enter your roll" />
        <input onChange={f4} type="text" placeholder="Enter your department" />
        <button onClick={f5} >Submit</button>
    </div>
  )
}

export default Form