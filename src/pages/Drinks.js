export default function Drinks() {
    return(
        <div>
                    <div className='status' id='0019'>
        <br />
      <div  title='tovar10'>
        
        <div className='wrapper'>
         <div className='card'>
          <img className='card-img' src={'./img/sok-dobryj.jpg'} width={190} height={150} ></img>
          <div className='card-title'>сок "Добрый" 1 л.</div>
          <div className='card-sub'>Освежающий сок "Добрый" 1 л.<br/><br /></div> <br /> <br />
          <div className='cena'>Цена: 120 RUB</div>
          <div className='btn-keeper'>
            <a className="btn" href="/order">Заказать</a>
          </div>
         </div>
        </div>
        </div>

        <div className='tovar' title='tovar20' id='0020'>
        
        <div className='wrapper'>
         <div className='card'>
          <img className='card-img' src={'./img/fanta-1.jpg'} width={190} height={150} ></img>
          <div className='card-title'>Добрый "Апельсин" 1 л.</div>
          <div className='card-sub'>Освежающий прохладный напиток Добрый "Апельсин" 1 л.</div> <br /> <br />
          <div className='cena'>Цена: 120 RUB</div>
          <div className='btn-keeper'>
         <a  className="btn" href="/order">Заказать</a>
          </div>
         </div>
        </div>
        </div>
        <div className='tovar' title='tovar21' id='0021'>
        
        <div className='wrapper'>
         <div className='card'>
          <img className='card-img' src={'./img/kola-1.jpg'} width={190} height={150} ></img>
          <div className='card-title'>Добрый "cola" 1 л.</div>
          <div className='card-sub'>Освежающий прохладный напиток Добрый "cola" 1л.</div> <br /> <br />
          <div className='cena'>Цена: 120 RUB</div>
          <div className='btn-keeper'>
            <a className="btn" href="/order">Заказать</a>
          </div>
         </div>
        </div>
        </div>
        </div>
        </div>
    )
}