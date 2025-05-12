import './style.scss';

export const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="subscribe-box">
        <h2 className="title">Subscribe to get the Latest News</h2>
        <p className="text-bottom">
          Don’t miss out on our latest news, updates, tips and special offers
        </p>

        <form className="form">
          <input type="text" placeholder="Enter your mail" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
};
