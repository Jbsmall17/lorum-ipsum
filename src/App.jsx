import React, { useState } from 'react'
import data from "./data"

function App() {
  const [count,setCount] = useState(0)
  const [paragraphs,setParagraphs] = useState([])
  const handleSubmit = (e) =>{
    e.preventDefault()
    let amount = parseInt(count)
    if(amount < 0){
      amount = 1 
    }
    else if(amount > data.length){
      amount = data.length
    }
    setParagraphs(data.slice(0,amount))
  }
  return (
    <section className="section-center">
      <h3>TIRED OF BORING LOREM IPSUM? </h3>
      <form onSubmit={handleSubmit} className="lorem-form">
        <label htmlFor='amount'>Paragraphs:</label>
        <input 
          type="number" 
          id="amount"
          value = {count}
          onChange={(e)=>{setCount(e.target.value)}}
          ></input>
        <button type='submit' className='btn'>generate</button>
      </form>
      <article className="lorem-text">
          {
            paragraphs.map((paragraph,index)=>{
              return <p key={index}>{paragraph}</p>
            })
          }
        </article>
    </section>
  )
}

export default App
