
import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'


function App() {
  // updating coin
  const [coin, setCoin] =useState(0);
  const [isActive, setIsActive] =useState({
    available:true 
   
  })
  const [players, setPlayers] =useState([])
  const [selectPlayer, setSelectPlayer] =useState([])

  const addCoin=()=>{
    setCoin(coin+50000)
    
  }

  //button toggling
  
  const handleisActiveState =(status)=>{
   if(status== 'available'){
    setIsActive({
      available:true, 
      })
   }
   else{
    setIsActive({available:false})
   }
  }

  // fetching players
  useEffect(()=>{
    fetch('players.json')
    .then(res =>res.json())
    .then(data=>setPlayers(data))

    
  },[])

  // player selection
  const playerSelection =(player)=>{
    // console.log(player)
    // console.log('player is added')
    // adding money in acc
    if(player.price > coin){
      alert('please add some money first')
    }
    else if(selectPlayer.length == 6){
      alert('you cannot add more than 6 players.')
    }
    
    else{
      // unique player add in array
      const checkPlayers =selectPlayer.find(checkPlayer =>checkPlayer.playerid === player.playerid)
      if(checkPlayers){
        alert('you already added in our team')
      }

      else{
      const newPlayer =[...selectPlayer, player]
      setSelectPlayer(newPlayer)
      console.log(newPlayer)
      setCoin(coin-player.price)
      alert('congrates you r added in our team')
      }
    }

  }

  // remove player from selection tab
  const removePlayer =(player)=>{
    const remove =selectPlayer.filter(removeId =>removeId.playerid !== player)
    setSelectPlayer(remove)
    
    alert('this player removed  successfully')
    
    
  }

  

  return (
    <>
      <Header coin={coin} addCoin={addCoin}></Header>
      <Main isActive={isActive} handleisActiveState={handleisActiveState} players={players} playerSelection={playerSelection} selectPlayer={selectPlayer} removePlayer={removePlayer}></Main>
      
    </>
  )
}

export default App
