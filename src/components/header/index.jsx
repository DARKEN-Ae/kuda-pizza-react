import { Link, NavLink } from "react-router-dom";
// icons import
import LogoBrend from "../../assets/icons/LogoBrend.png";
import LocationIcon from "../../assets/icons/Location.png";
import indicatorIcon from "../../assets/icons/indicator.png";
import Accaount from "../../assets/icons/Account.png";
import shopCardIcon from "../../assets/icons/shoppingCard.png";
import menuIcon from "../../assets/icons/Menu.svg";
// styles import
import "../sass/Header.scss";
import { useState } from "react";

const Header = () => {
  // 650px da nav ichidagi ul lar paydo bo'ladi
  const [showSection, setShowSection] = useState(false);
  window.onscroll = () => {
    if (window.scrollY > 600) {
      setShowSection(true);
    } else {
      setShowSection(false);
    }
  };
  // id bo'yicha tushish
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  // back-top
  const backTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  // menu-toggle
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  // const toggleMenu = () => {
  //   const menu = document.querySelector(".menu-toggle");
  //   menu.classList.toggle("active");
  // };
  // done
  return (
    <header>
      {showSection || (
        <div className="container">
          <div className="menu-toggle menu-btn" onClick={toggleMenu}>
            <img src={menuIcon} alt="" />
          </div>
          <div className="header-one">
            <div id="header-one" className={`menu ${isOpen ? "open" : ""}`}>
              <div className="left">
                <div className="location">
                  <img src={LocationIcon} alt="LocationIcon" />
                  Москва
                  <img src={indicatorIcon} alt="indicatorIcon" />
                </div>
                <p>Проверить адрес</p>
                <p>
                  Среднее время доставки*: <span>00:24:19</span>
                </p>
              </div>
              <div className="right">
                <p>Время работы: 11:00 до 23:00</p>
                <div className="sign-in">
                  <Link to={"/"}>
                    <img src={Accaount} alt="Accaount" />
                    Войти в аккаунт
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {showSection || <hr />}
      <div className="container">
        <nav>
          <img src={LogoBrend} alt="LogoBrend" />
          {showSection && (
            <ul>
              <li>
                <NavLink to={"/"}>Акции</NavLink>
              </li>
              <li>
                <NavLink onClick={() => handleScroll("pizza")} to={"/"}>
                  Пицца
                </NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Суши</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Напитки</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Закуски</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Комбо</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Десерты</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Соусы</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Другое</NavLink>
              </li>
            </ul>
          )}
          <div className="count">
            <img src={shopCardIcon} alt="shopCardIcon" />
            <p>0₽</p>
          </div>
        </nav>
        <div className="back-top">
          <button className="btn-shine" onClick={backTop}>
            <span>BACK TOP</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
