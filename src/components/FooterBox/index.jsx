import facebook from '../../assets/img/svgicons/facebook.svg';
import inst from '../../assets/img/svgicons/inst.svg';
import youTube from '../../assets/img/svgicons/youTube.svg';
import twit from '../../assets/img/svgicons/twit.svg';

import './style.scss';
import { Link } from 'react-router-dom';

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
            <Link href="#" className="social-link">
              <img src={facebook} alt="" />
            </Link>
            <Link href="#" className="social-link">
              <img src={inst} alt="" />
            </Link>
            <Link href="#" className="social-link">
              <img src={youTube} alt="" />
            </Link>
            <Link href="#" className="social-link">
              <img src={twit} alt="" />
            </Link>
          </div>
        </div>
        <div className="footer__info-item">
          <dt>
            <Link>About</Link>
          </dt>
          <dd>
            <Link>Menu</Link>
          </dd>
          <dd>
            <Link>FeLinktures</Link>
          </dd>
          <dd>
            <Link>News & Blogs</Link>
          </dd>
          <dd>
            <Link>Help & Supports</Link>
          </dd>
        </div>

        <div className="footer__info-item">
          <dt>
            <Link>Company</Link>
          </dt>
          <dd>
            <Link>How we work</Link>
          </dd>
          <dd>
            <Link>Terms of service</Link>
          </dd>
          <dd>
            <Link>Pricing</Link>
          </dd>
          <dd>
            <Link>FAQ</Link>
          </dd>
        </div>

        <ul className="footer__info-item">
          <li className="footer__item-title">
            <Link>ContLinkct Us</Link>
          </li>
          <li className="footer__item-text">
            <Link>
              <span> Akshya Nagar 1st Block 1st Cross,</span>
              Rammurthy nagar, Bangalore-560016
            </Link>
          </li>
          <li className="footer__item-text">
            <Link href="tel:+12029182132">+1 202-918-2132</Link>
          </li>
          <li className="footer__item-text">
            <Link href="email:beLinknscene@mLinkil.com">
              beLinknscene@mLinkil.com
            </Link>
          </li>
          <li className="footer__item-text">
            <Link href="email:www.beLinknscene.com">www.beLinknscene.com</Link>
          </li>
        </ul>
      </dl>
    </div>
  );
};
