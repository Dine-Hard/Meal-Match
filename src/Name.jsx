import React, {useState} from 'react';

function Name() {
  const [ name, setName ] = useState('')
  const [ meal, setMeal ] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target;
    setName(value)
  }
  const handleClick = async (name) => {
    try {
      console.log(name)
      const response = await fetch('http://localhost:3000/api/people', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name})
      })
      if (response.ok) {
        console.log('Able to post')
      }
    } catch(error) {
      console.log('Error, unable to post name', error)
    }
  }

  return (
    <div>
      <div className='inputBoxContainer'>
        <label>Enter your name: </label>
        <input className='nameInput' type='text' name='name' value={name} onChange={handleChange}/>
        <div>
          <label>Select your Cuisine: </label>
          <select className='dropDown' name="Cuisine">
            <option value="Italian" >Italian</option>
            <option value="Mexican" >Mexican</option>
            <option value="Thai" >Thai</option>
            <option value="Korean" >Korean</option>
          </select>
        <button className='cuisineButton' onClick={() => handleClick(name, meal)}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Name
