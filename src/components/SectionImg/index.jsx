import img from '../../assets/img/section4-cup.png';

import './style.scss';

export const SectionImg = () => {
  return (
    <div className="section-img">
      <div className="section-img__box">
        <h2 className="title">Get a chance to have an Amazing morning</h2>
        <p className="text-bottom">
          We are giving you are one time opportunity to experience a better life
          with coffee.
        </p>
        <button className="button">Order Now</button>
      </div>
      <div className="section-img__cup">
        <img src={img} alt="cup" />
      </div>
    </div>
  );
};
