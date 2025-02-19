import "../sass/Footer.scss";
import logoBrend from "../../assets/icons/logoBrend.png";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="copyright">
            <img src={logoBrend} alt="logoBrend" />
            <p>© Copyright 2021 — Куда Пицца</p>
          </div>
          <div className="one">
            <ul>
              Куда пицца
              <li>О компании</li>
              <li>Пользовательское соглашение</li>
              <li>Условия гарантии</li>
            </ul>
          </div>
          <div className="two">
            <ul>
              Помощь
              <li>Ресторан</li>
              <li>Контакты</li>
              <li>Поддержка</li>
              <li>Отследить заказ</li>
            </ul>
          </div>
          <div className="three">
            <ul>
              Контакты
              <li>+7 (926) 223-10-11</li>
              <li>Пользовательское соглашение</li>
              <li>Москва, ул. Юных Ленинцев, д.99</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
