import React from "react";
import SecretLogo from "../../assets/images/pic.svg";
import DodoText from "../../assets/images/dodotext.svg";
import FacebookIcon from "../../assets/images/facebook.svg";
import YoutubeIcon from "../../assets/images/youtube.svg";
import InstagramIcon from "../../assets/images/insta.svg";

const Footer = () => {
  return (
    <>
      <footer className="main_footer">
        <div className="secret_part container">
          <div className="secret_buyer">
            <img
              src={SecretLogo}
              alt="Secret Buyer Logo"
              className="secret_buyer_logo"
            />
            <div className="secret_buyer_desc">
              Стань тайным покупателем Додо Пиццы и получи пиццу в подарок
            </div>
          </div>
          <a href="http//google.com" className="secret_buyer_btn">
            Заполнить анкету
          </a>
        </div>
        <div className="footer_part nav_links container">
          <div className="link_section">
            <span>Додо Пицца</span>
            <a href="http//google.com">О нас</a>
            <a href="http//google.com">Додо-книга</a>
            <a href="http//google.com">Блог «Сила ума»</a>
            <a href="http//google.com">Додо ИС</a>
          </div>

          <div className="link_section">
            <span>Работа</span>
            <a href="http//google.com">В пиццерии</a>
          </div>

          <div className="link_section">
            <span>Партнерам</span>
            <a href="http//google.com">Франшиза</a>
            <a href="http//google.com">Инвестиции</a>
            <a href="http//google.com">Поставщикам</a>
          </div>

          <div className="link_section">
            <span>Это интересно</span>
            <a href="http//google.com">Почемы мы готовим без перчаток?</a>
            <a href="http//google.com">Экскурсии и мастер-классы</a>
          </div>

          <div className="footer_part  right_side">
            <div className="  contacts">
              <span>звонок бесплатный</span>
              <a href="tel:1168" className="call">
                1168
              </a>
              <a href="http//google.com" className="footer_email">
                feedback@dodopizza.com
              </a>
            </div>
          </div>

          <div className="link_section ">
            <h2>1 365 066 300 сум</h2>
            <p>
              Выручка узбекской сети в этом месяце.В прошлом — 1 451 669 300 сум
            </p>
          </div>

          <div className="link_section">
            <h2>738 пиццерий</h2>
            <p>в 15 странах, от Великобритании до Нигерии</p>
          </div>
        </div>

        <hr className=" footer_line container" />

        <div className="footer_copyright container">
          <div className=" copyright">
            <a href="http//google.com">
              <img src={DodoText} alt="Dodo Pizza" className="dodo_text_icon" />
              <span className="footer_copyright_text">
                © 2021 Правовая информация
              </span>
            </a>
          </div>

          <div className=" social_links">
            <a href="http//google.com">
              <img src={FacebookIcon} alt="Facebook" />
            </a>
            <a href="http//google.com">
              <img src={InstagramIcon} alt="Instagram" />
            </a>
            <a href="http//google.com">
              <img src={YoutubeIcon} alt="You-Tube" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
