
import './App.css';
import { useState } from 'react';

function App() {
  const [events, setEvents] = useState([
    {title: "akhror's birthday party", id: 1},
    {title: "doniyor's live stream", id: 2},
    {title: "match: manchester united vs barcelona", id: 3}
  ])

  let [name, setName] = useState('My name is Jenish')

  const handleDelet = (id)=> {
    setEvents((prev)=>{
      return prev.filter((event)=>{
        return event.id !== id
      })

    })
  }
  
  
  const addClic = () =>{
    setName('My name is Kenesh')
    console.log(name)
  }

  const adres = "https://studio.youtube.com/channel/UCoAVxWLM7WuPv0kjOIgXSww"
  


  return (
    <div className="App">
      {events.map((event)=>{
        return(
          <div key={event.id}>
            <h2>{event.title}</h2>
            <button onClick={()=> handleDelet(event.id)}>Delete</button>
          </div>

        )
      })
      }


      <h1>{name}</h1>
      <p>Random namber:{Math.floor(Math.random() * 100)}</p>
      <a href={adres}>My web site</a>
      <button onClick={addClic}>add</button>
      <br />
      <button onClick={() => {console.log('va aleykum assalam')}}>clic</button>
      <button onClick={()=> console.log('rahmatullohi va baracatu')}>alic</button>
      


    </div>
  );
}

export default App;
