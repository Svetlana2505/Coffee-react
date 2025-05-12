import img from '../../assets/img/section1.jpg';
import './style.scss';

export const BestCoffee = () => {
  return (
    <div className="best-coffee">
      <div className="best-coffee__text">
        <h2 className="title">Discover the best coffee</h2>
        <p className="text-bottom">
          Bean Scene is a coffee shop that provides you with quality coffee that
          helps boost your productivity and helps build your mood. Having a cup
          of coffee is good, but having a cup of real coffee is greater. There
          is no doubt that you will enjoy this coffee more than others you have
          ever tasted.
        </p>
        <button className="button">Learn More</button>
      </div>
      <div className="best-coffe__img">
        <img src={img} alt="cup coffe" />
      </div>
    </div>
  );
};
