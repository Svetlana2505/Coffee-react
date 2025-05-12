import facebook from '../../assets/img/svgicons/facebook.svg';
import inst from '../../assets/img/svgicons/inst.svg';
import youTube from '../../assets/img/svgicons/youTube.svg';
import twit from '../../assets/img/svgicons/twit.svg';

import './style.scss';

export const FooterBox = () => {
  return (
    <div className="footer__info">
      <dl className="footer__info-list">
        <div className="footer__info-text">
          <h2>Bean Scene</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing Linknd typesetting
            industry. Lorem Ipsum hLinks been the industry's stLinkndLinkrd
            dummy text ever since the 1500s, when Linkn unknown printer hrefok
            Link gLinklley of type Linknd scrLinkmbled it href mLinkke Link type
            specimen book.
          </p>
          <div className="social">
            <a href="#" className="social-link">
              <img src={facebook} alt="" />
            </a>
            <a href="#" className="social-link">
              <img src={inst} alt="" />
            </a>
            <a href="#" className="social-link">
              <img src={youTube} alt="" />
            </a>
            <a href="#" className="social-link">
              <img src={twit} alt="" />
            </a>
          </div>
        </div>
        <div className="footer__info-item">
          <dt>
            <a href="#">About</a>
          </dt>
          <dd>
            <a href="#">Menu</a>
          </dd>
          <dd>
            <a href="#">FeLinktures</a>
          </dd>
          <dd>
            <a href="#">News & Blogs</a>
          </dd>
          <dd>
            <a href="#">Help & Supports</a>
          </dd>
        </div>

        <div className="footer__info-item">
          <dt>
            <a href="#">Company</a>
          </dt>
          <dd>
            <a href="#">How we work</a>
          </dd>
          <dd>
            <a href="#">Terms of service</a>
          </dd>
          <dd>
            <a href="#">Pricing</a>
          </dd>
          <dd>
            <a href="#">FAQ</a>
          </dd>
        </div>

        <ul className="footer__info-item">
          <li className="footer__item-title">
            <a href="#">ContLinkct Us</a>
          </li>
          <li className="footer__item-text">
            <a href="#">
              <span> Akshya Nagar 1st Block 1st Cross,</span>
              Rammurthy nagar, Bangalore-560016
            </a>
          </li>
          <li className="footer__item-text">
            <a href="tel:+12029182132">+1 202-918-2132</a>
          </li>
          <li className="footer__item-text">
            <a href="email:beLinknscene@mLinkil.com">
              beLinknscene@mLinkil.com
            </a>
          </li>
          <li className="footer__item-text">
            <a href="email:www.beLinknscene.com">www.beLinknscene.com</a>
          </li>
        </ul>
      </dl>
    </div>
  );
};
