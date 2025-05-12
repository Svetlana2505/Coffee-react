import './style.scss';

import img01 from '../../assets/img/coffee-beans.png';
import img02 from '../../assets/img/badge.png';
import img03 from '../../assets/img/coffee-cup.png';
import img04 from '../../assets/img/best-price.png';

export const Advantages = () => {
  return (
    <div className="advantages">
      <h2 className="title">Why are we different?</h2>
      <p className="text-bottom">
        We don’t just make your coffee, we make your day!
      </p>
      <ul className="advantages-list">
        <li className="advantages-item">
          <div className="advantages-item__box">
            <img src={img01} alt="" />
            <h3>Supreme Beans</h3>
            <p className="advantages-item__box-text">
              Beans that provides great taste
            </p>
          </div>
        </li>
        <li className="advantages-item">
          <div className="advantages-item__box">
            <img src={img02} alt="" />

            <h3>High Quality</h3>
            <p className="advantages-item__box-text">
              We provide the highest quality
            </p>
          </div>
        </li>
        <li className="advantages-item">
          <div className="advantages-item__box">
            <img src={img03} alt="" />
            <h3>Extraordinary</h3>
            <p className="advantages-item__box-text">
              Coffee like you have never tasted
            </p>
          </div>
        </li>
        <li className="advantages-item">
          <div className="advantages-item__box">
            <img src={img04} alt="" />
            <h3>Affordable Price</h3>
            <p className="advantages-item__box-text">
              Our Coffee prices are easy to afford
            </p>
          </div>
        </li>
      </ul>
      <div className="advantages-bottom__text">
        Great ideas start with great coffee, Lets help you achieve that
        <p>Get started today.</p>
      </div>
      <button className="button">Join Us</button>
    </div>
  );
};
