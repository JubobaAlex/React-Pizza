import './Style.css'
export default function Pizza() {
    return(
        <div>
            <div className='status' id='0001'>
        <br />
      <div  title='tovarOne'>
        
        <div className='wrapper'>
         <div className='card'>
          <img className='card-img' src={'./img/Pepirone.jpg'} width={190} height={150} ></img>
          <div className='card-title'>пицца "Пепперони"</div>
          <div className='card-sub'>Салями пепперони, маслины, соус томатный, сыр моцарелла <br/><br /></div> <br /> <br />
           <div className='cena'>Цена: 350 RUB</div>
          <div className='btn-keeper'>
            <a className="btn" href="/order">Заказать</a>
          </div>
         </div>
        </div>
        </div>

        <div className='tovar' title='tovarTwo' id='0002'>
        
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
        <div className='tovar' title='tovarTree' id='0003'>
        
        <div className='wrapper'>
         <div className='card'>
          <img className='card-img' src={'./img/font.jpg'} width={190} height={150} ></img>
          <div className='card-title'>пицца "Фонтанна"</div>
          <div className='card-sub'>Лосось, мидии, маслины, зелень, лук ялта, сыр моцарелла, соус сливочный</div> <br /> <br />
          <div className='cena'>Цена: 470 RUB</div>
          <div className='btn-keeper'>
            <a className="btn" href="/order">Заказать</a>
          </div>
         </div>
        </div>
        </div>
        <div className='tovar' title='tovarFour' id='0004'>
        
        <div className='wrapper'>
         <div className='card'>
          <img className='card-img' src={'./img/mec.jpg'} width={190} height={150} ></img>
          <div className='card-title'>пицца "Мясное ассорти"</div>
          <div className='card-sub'>Соус, охотничьи колбаски, салями, курица, шампиньоны, болгарский перец, сыр моцарелла</div> <br /> <br />
          <div className='cena'>Цена: 350 RUB</div>
          <div className='btn-keeper'>
            <a  className="btn" href="/order">Заказать</a>
          </div>
         </div>
         
        </div>
        </div>

        <div className='tovar' title='tovarFive' id='0005'>
        
        <div className='wrapper'>
         <div className='card'>
          <img className='card-img' src={'./img/chi.jpg'} width={190} height={150} ></img>
          <div className='card-title'>пицца "Чикаго"</div>
          <div className='card-sub'>Салями пепперони, курица, томаты, сыр моцарелла, соус томатный, соус макси, укроп</div> <br /> <br />
          <div className='cena'>Цена: 350 RUB</div>
          <div className='btn-keeper'>
            <a  className="btn" href="/order">Заказать</a>
          </div>
         </div>
         
        </div>
        </div>
        <div className='tovar' title='tovarFive' id='0006'>
        
        <div className='wrapper'>
         <div className='card'>
          <img className='card-img' src={'./img/mex.jpg'} width={190} height={150} ></img>
          <div className='card-title'>пицца "Мексиканская"</div>
          <div className='card-sub'>Соус, перец болгарский, салями, перец халапеньо, шампиньоны, куриное филе, маслины</div> <br /> <br />
          <div className='cena'>Цена: 400 RUB</div>
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