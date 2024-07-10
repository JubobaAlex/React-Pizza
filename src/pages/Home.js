import Order from './Order'
import { Route, Routes ,  BrowserRouter } from 'react-router-dom';
export default function Home() {
    return(
        <div >
            <span className="advertisement">
                <h3 >React Pizza - ТВОЯ ПЛАНЕТА Пицц Доставка по +79787777777 </h3>
            </span>
            <div>
                <b className="choose">Часто выбирают</b>
                <div className='status' id='0001'>
        <br />
      <div  title='tovarOne'>
        
        <div className='wrapper'>
         <div className='card'>
          <img className='card-img' src={'./img/Pepirone.jpg'} width={190} height={150} ></img>
          <div className='card-title'>пицца "Пепперони"</div>
          <div className='card-sub'>Салями пепперони, маслины, соус томатный, сыр моцарелла <bt /><br/></div>
          <div className='btn-keeper'>
            <a className="btn" href="/order">Заказать</a>
          </div>
         </div>
        </div>
        </div>

        <div className='tovar' title='tovarTwo' id='0002'>
        
        <div className='wrapper'>
         <div className='card'>
          <img className='card-img' src={'./img/2.jpg'} width={190} height={150} ></img>
          <div className='card-title'>Стол</div>
          <div className='card-sub'>Описание</div>
          <div className='btn-keeper'>
            <a  className="btn" href="/order">Заказать</a>
          </div>
         </div>
        </div>
        </div>
        <div className='tovar' title='tovarTree' id='0003'>
        
        <div className='wrapper'>
         <div className='card'>
          <img className='card-img' src={'./img/3.jpg'} width={190} height={150} ></img>
          <div className='card-title'>Шкаф</div>
          <div className='card-sub'>Описание</div>
          <div className='btn-keeper'>
            <a className="btn" href="/order">Заказать</a>
          </div>
         </div>
        </div>
        </div>
        <div className='tovar' title='tovarFour' id='0004'>
        
        <div className='wrapper'>
         <div className='card'>
          <img className='card-img' src={'./img/4.png'} width={190} height={150} ></img>
          <div className='card-title'>Кровать</div>
          <div className='card-sub'>Описание</div>
          <div className='btn-keeper'>
            <a  className="btn" href="/order">Заказать</a>
          </div>
         </div>
         
        </div>
        </div>

        <div className='tovar' title='tovarFive' id='0005'>
        
        <div className='wrapper'>
         <div className='card'>
          <img className='card-img' src={'./img/5.jpg'} width={190} height={150} ></img>
          <div className='card-title'>Тумбочка</div>
          <div className='card-sub'>Описание</div>
          <div className='btn-keeper'>
            <a  className="btn" href="/order">Заказать</a>
          </div>
         </div>
         
        </div>
        </div>
        <div className='tovar' title='tovarFive' id='0005'>
        
        <div className='wrapper'>
         <div className='card'>
          <img className='card-img' src={'./img/6.jpg'} width={190} height={150} ></img>
          <div className='card-title'>Диван</div>
          <div className='card-sub'>Описание</div>
          <div className='btn-keeper'>
            <a  className="btn" href="/order">Заказать</a>
          </div>
         </div>
         
        </div>
        </div>
  </div>
            </div>
        </div>
    )
}