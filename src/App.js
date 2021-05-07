import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import './App.css';

function App() {
  const [balance, setBalance] = useState(0)
  const [value, setValue] = useState('')
  const [transaction, setTransaction] = useState([])

  const handleBalance = (e) => {
    console.log(e.target.value);
    setValue(e.target.value)
  }

  const handleAdd = () => {
    setBalance(Number(balance) + Number(value))
    let latestValue = new Date().toISOString() + ' - ' + value + ' - Add'
    console.log(latestValue);
    let newState = [latestValue, ...transaction]
    setTransaction(newState)
    setValue('')
    console.log(transaction);
  }

  const handleRemove = () => {
    if (balance > 0) {
      setBalance(Number(balance) - Number(value))
      let latestValue = new Date().toISOString() + ' - ' + value + ' - Remove'
      console.log(latestValue);
      let newState = [latestValue, ...transaction]
      setTransaction(newState)
      setValue('')
      console.log(transaction);
    }
  }

  useEffect(() => {

  }, [transaction])


  return (
    <div className="App">
      <header className="App-header">
        <div className="outer">
          <div className="calculation">
            <div className="balance">
              Balance: {balance}
            </div>
            <div>
              <input type="number" value={value} onChange={handleBalance} />
            </div>
            <div className="button">
              <Button variant="success" onClick={handleAdd}>Add</Button>
              <Button style={{marginLeft:"10px"}} variant="warning" onClick={handleRemove}>Remove</Button>
            </div>
          </div>
          <div className="transactions">
            <span>Transactions: </span>
            {
              transaction.map((el, index) => {
                console.log(el);
                return <div key={index}>{el}</div>
              })
            }
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
