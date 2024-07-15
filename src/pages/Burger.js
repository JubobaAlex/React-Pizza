import './Style.css'
export default function Burger() {
    return(
        <div>
            <div className='status' id='0007'>
        <br />
      <div  title='tovar7'>
        
        <div className='wrapper'>
         <div className='card'>
          <img className='card-img' src={'./img/burger.jpg'} width={190} height={150} ></img>
          <div className='card-title'>Бургер</div>
          <div className='card-sub'>Булочка бриошь, котлета из телятины, сыр чедр, томаты, солёный огурец, салат, соус <br/><br /></div> <br /> <br />
          <div className='cena'>Цена: 100 RUB</div>
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
        <div className='tovar' title='tovar9' id='0009'>
        
        <div className='wrapper'>
         <div className='card'>
          <img className='card-img' src={'./img/chiken.jpg'} width={190} height={150} ></img>
          <div className='card-title'>Чикен Бургер</div>
          <div className='card-sub'>Булочка бриошь, наггетсы, сыр чеддер, томаты, огурец, салат, соус</div> <br /> <br />
          <div className='cena'>Цена: 210 RUB</div>
          <div className='btn-keeper'>
            <a className="btn" href="/order">Заказать</a>
          </div>
         </div>
        </div>
        </div>
        <div className='tovar' title='tovar10' id='0010'>
        
        <div className='wrapper'>
         <div className='card'>
          <img className='card-img' src={'./img/bleckbyl.jpg'} width={190} height={150} ></img>
          <div className='card-title'>Блэк Буфф</div>
          <div className='card-sub'>Булочка бриошь, соус французский, лист салата, котлета, сыр, томаты, солёный огурец, соус макси</div> <br /> <br />
          <div className='cena'>Цена: 250 RUB</div>
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
          <div className='card-sub'>Булочка бриошь, 2 котлеты из телятины, сыр чедр, томаты, солёный огурец, салат, маринованный лук, соус</div> <br /> <br />
          <div className='cena'>Цена: 210 RUB</div>
          <div className='btn-keeper'>
            <a  className="btn" href="/order">Заказать</a>
          </div>
         </div>
         
        </div>
        </div>
        <div className='tovar' title='tovar12' id='0012'>
        
        <div className='wrapper'>
         <div className='card'>
          <img className='card-img' src={'./img/fermer.jpg'} width={190} height={150} ></img>
          <div className='card-title'>Фермер Бургер</div>
          <div className='card-sub'>Булочка бриошь, говяжья котлета, сыр чеддер, томаты, маринованные опята, лук ялта, соус</div> <br /> <br />
          <div className='cena'>Цена: 170 RUB</div>
          <div className='btn-keeper'>
            <a  className="btn" href="/order">Заказать</a>
          </div>
         </div>
         
        </div>
        </div>
  </div>
        </div>
    )
}