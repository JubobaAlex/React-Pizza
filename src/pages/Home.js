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
          <div className='card-sub'>Салями пепперони, маслины, соус томатный, сыр моцарелла <br/></div> <br /> <br />
          <div className='cena'>Цена: 350 RUB</div>
          <div className='btn-keeper'>
            <a className="btn" href="/order">Заказать</a>
          </div>
         </div>
        </div>
        </div>

        <div className='tovar' title='tovar8' id='0008'>
        
        <div className='wrapper'>
         <div className='card'>
          <img className='card-img' src={'./img/chizburger.jpg'} width={190} height={150} ></img>
          <div className='card-title'>Чизбургер</div>
          <div className='card-sub'>Булочка бриошь, котлета из телятины, 3 сыра чедр, томаты, солёный огурец, салат, соус</div> <br /> <br />
          <div className='cena'>Цена: 150 RUB</div>
          <div className='btn-keeper'>
            <a  className="btn" href="/order">Заказать</a>
          </div>
         </div>
        </div>
        </div>
        <div className='tovar' title='tovarTree' id='0003'>
        
        <div className='wrapper'>
         <div className='card'>
          <img className='card-img' src={'./img/mec.jpg'} width={190} height={150} ></img>
          <div className='card-title'>пицца "Мясное ассорти"</div>
          <div className='card-sub'>Соус, охотничьи колбаски, салями, курица, шампиньоны, болгарский перец, сыр моцарелла</div> <br /> <br />
          <div className='cena'>Цена: 350 RUB</div>
          <div className='btn-keeper'>
            <a className="btn" href="/order">Заказать</a>
          </div>
         </div>
        </div>
        </div>
        <div className='tovar' title='tovar2' id='0002'>
        
        <div className='wrapper'>
         <div className='card'>
          <img className='card-img' src={'./img/4se.jpg'} width={190} height={150} ></img>
          <div className='card-title'>пицца "4 сыра"</div>
          <div className='card-sub'>Моцарелла, гауда, сливочно-творожный, чеддер, томаты, соус сливочный</div> <br /> <br />
          <div className='cena'>Цена: 450 RUB</div>
          <div className='btn-keeper'>
            <a  className="btn" href="/order">Заказать</a>
          </div>
         </div>
         
        </div>
        </div>

        <div className='tovar' title='tovar11' id='0011'>
        
        <div className='wrapper'>
         <div className='card'>
          <img className='card-img' src={'./img/bugt.jpg'} width={190} height={150} ></img>
          <div className='card-title'>Биг Тести</div>
          <div className='card-sub'>Булочка бриошь, 2 котлеты из телятины, сыр чедр, томаты, солёный огурец, салат, маринованный лук, соус</div> <br/> <br/>
          <div className='cena'>Цена: 210 RUB</div>
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