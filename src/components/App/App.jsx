import './_vars.scss';
import './_reset.scss';
import './_base.scss';
import './_utils.scss';
import './_containers.scss';
import './_title.scss';
import './_text-bottom.scss';
import './_button.scss';

import img from '../../assets/img/section4-coffee_bean.png';

import { BestCoffee } from 'components/Best-coffee';
import { HeaderRow } from 'components/HeaderRow';
import { Headertext } from 'components/HeaderText';
import { CoffeeStyle } from 'components/CoffeeStyle';
import { Advantages } from 'components/Advantages';
import { SectionImg } from 'components/SectionImg';
import { SwiperFeedback } from 'components/SwiperFeedback';
import { Subscribe } from 'components/Subscride';
import { FooterBox } from 'components/FooterBox';

export const App = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <HeaderRow />
          <Headertext />
        </div>
      </header>
      <main className="main">
        <section className="section section-best-coffee">
          <div className="container">
            <BestCoffee />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <CoffeeStyle />
          </div>
        </section>

        <section className="section section-advantages">
          <div className="container">
            <Advantages />
          </div>
        </section>

        <section className="section section-images">
          <div className="section-img__coffee">
            <img src={img} alt="coffee" />
          </div>

          <div class="container">
            <SectionImg />
          </div>
        </section>

        <section className="section section-feebdack">
          <div className="container">
            <SwiperFeedback />
          </div>
          <Subscribe />
        </section>
      </main>

      <footer className="footer section section-footer">
        <div className="container">
          <FooterBox />
        </div>
      </footer>
    </>
  );
};
