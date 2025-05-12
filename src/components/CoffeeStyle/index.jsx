import img01 from '../../assets/img/section2-01.jpg';
import img02 from '../../assets/img/section2-02.jpg';
import img03 from '../../assets/img/section2-03.jpg';
import img04 from '../../assets/img/section2-04.jpg';

import './style.scss';

export const CoffeeStyle = () => {
  return (
    <div className="coffee-style">
      <h2 className="title">Enjoy a new blend of coffee style</h2>
      <p className="text-bottom">
        Explore all flavours of coffee with us. There is always a new cup worth
        experiencing
      </p>
      <ul className="coffee-style__list">
        <li className="coffee-style__item">
          <img src={img01} alt="cup coffee" />
          <div className="descriptions">
            <h4>Cappuccino</h4>
            <p className="description-sub">Coffee 50% | Milk 50%</p>
            <p className="description-price">$8.50</p>
          </div>
          <button className="coffee-style__btn button">Order Now</button>
        </li>
        <li className="coffee-style__item">
          <img src={img02} alt="cup coffee" />
          <div className="descriptions">
            <h4>Chai Latte</h4>
            <p className="description-sub">Coffee 50% | Milk 50%</p>
            <p className="description-price">$8.50</p>
          </div>
          <button className="coffee-style__btn button">Order Now</button>
        </li>
        <li className="coffee-style__item">
          <img src={img03} alt="cup coffee" />
          <div className="descriptions">
            <h4>Macchiato</h4>
            <p className="description-sub">Coffee 50% | Milk 50%</p>
            <p className="description-price">$8.50</p>
          </div>
          <button className="coffee-style__btn button">Order Now</button>
        </li>
        <li className="coffee-style__item">
          <img src={img04} alt="cup coffee" />
          <div className="descriptions">
            <h4>Expresso</h4>
            <p className="description-sub">Coffee 50% | Milk 50%</p>
            <p className="description-price">$8.50</p>
          </div>
          <button className="coffee-style__btn button">Order Now</button>
        </li>
      </ul>
    </div>
  );
};
