import './Order.css'
import { useState } from 'react';
export default function Order() {
    
        const [inputValue, setInputValue] = useState('');
        const [inputValueTwo, setInputValueTwo] = useState('');
      
        const handleButtonClick = () => {
          if (inputValue.trim() === '' || inputValueTwo.trim() === '') {
            alert("Вы не указали адрес или номер телефона");
          }
          else {
            alert('Ожидайте заказ ,мы позвоним')
          }
        }  
    return(
        <span>
            <h2 className="orderHeader">Заказ</h2>
            <br />
            <span className="orderMain">
                <h3>Укажите ваш адрес: <input value={inputValue} type="text" id='myInputone' onChange={(e) => setInputValue(e.target.value)}></input></h3>
                <h3>Укажите ваш номер телефона: <input value={inputValueTwo} type="text" id='myInputtwo' onChange={(y) => setInputValueTwo(y.target.value)}></input></h3>
                <div className='orderButtonDiv'>
              <button  className='orderButton' onClick={handleButtonClick} >Заказать</button>
                </div>
            </span>
        </span>
    )
    }