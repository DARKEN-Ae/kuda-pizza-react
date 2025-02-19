// need codes
import { Link, NavLink } from "react-router-dom";
import { products } from "../data/products";
import { categories } from "../data/categories";
// icons import
// import FireIcon from "../assets/icons/fire.png";
// import PizzaIcon from "../assets/icons/Pizza.png";
// import SushiIcon from "../assets/icons/Sushi.png";
// import DrinkIcon from "../assets/icons/Drink.png";
// import PotetoFreeIcon from "../assets/icons/path4528.png";
// import ComboIcon from "../assets/icons/Combo.png";
// import DessertIcon from "../assets/icons/Dessert.png";
// import SouceIcon from "../assets/icons/Sauce.png";
import LocationIcon from "../assets/icons/Location.png";
import filterIcon from "../assets/icons/filter.png";
// imgs import
import leftPizza from "../assets/imgs/pizzaLeft.png";
import centerPizza from "../assets/imgs/pizzaCenter.png";
import rightPizza from "../assets/imgs/pizzaRight.png";
import openPizza from "../assets/imgs/openPizza.png";
// style import
import "./sass/Home.scss";

const HomePage = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <main>
      <div className="container">
        {/* 1 */}
        <div className="category-section">
          {categories.map((cat, index) => (
            <NavLink
              key={index}
              to={"/"}
              onClick={() => handleScroll(cat.name)}
            >
              <div className="food">
                <img src={cat.image} alt={cat.name} />
                <p>{cat.name}</p>
              </div>
            </NavLink>
          ))}
        </div>
        {/* 2 */}
        <div className="side-bar">
          <div className="slider">
            <div className="imgs">
              <img className="leftPizza" src={leftPizza} alt="" />
              <img className="centerPizza" src={centerPizza} alt="" />
              <img className="rightPizza" src={rightPizza} alt="rightPizza" />
            </div>
            <h3>3 средние пиццы от 999 рублей</h3>
          </div>
          <div className="slider-two">
            <img src={openPizza} alt="openPizza" />
            <h3>Кэшбек 10% на самовывоз (доставка)</h3>
          </div>
          <div className="slider">
            <div className="imgs">
              <img className="leftPizza" src={leftPizza} alt="" />
              <img className="centerPizza" src={centerPizza} alt="" />
              <img className="rightPizza" src={rightPizza} alt="rightPizza" />
            </div>
            <h3>3 средние пиццы от 999 рублей</h3>
          </div>
          <div className="slider-two">
            <img src={openPizza} alt="openPizza" />
            <h3>Кэшбек 10% на самовывоз (доставка)</h3>
          </div>
        </div>
        {/* 3 */}
        <div className="location-search">
          <p>Проверить адрес доставки</p>
          <div className="search">
            <img src={LocationIcon} alt="LocationIcon" />
            <input type="text" placeholder="Адрес" />
            <button>Проверить</button>
          </div>
        </div>
        {/* 4 */}
        <div id="pizza" className="pizza-section">
          <div className="pizza">
            <h3>{products.category}</h3>
            <div className="filter">
              <img src={filterIcon} alt="filterIcon" />
              <p>Фильтры</p>
            </div>
          </div>
          <div className="pizza-list">
            {products.map((pizza) => (
              <div key={pizza.id} className="pizza-card">
                {pizza.filter && <span className="tag">{pizza.filter}</span>}
                <img
                  src={pizza.image}
                  alt={pizza.name}
                  className="pizza-image"
                />
                <h3>{pizza.name}</h3>
                <p>{pizza.description}</p>
                <div className="ot-price-btn">
                  <button className="select-button">Выбрать</button>
                  <div className="price">от {pizza.price} ₽</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* 5 */}
        <div className="down-section">
          <div className="finished">
            <h2>Доставка пиццы в Москве</h2>
            <p>
              Захотелось чего-то вкусного и сытного? Желание простое и понятное,
              только в холодильнике все не то, и до магазина идти лень. Все
              пропало? Нет. Недорого заказать пиццу в Москве очень просто! Вам
              на помощь спешит супергерой – Domino’s Pizza! Как у всякого
              супергероя, у Domino’s Pizza есть свои суперсилы: восхитительный
              вкус продукции из отборных ингредиентов; широкий ассортимент,
              включающий легендарные, фирменные и классические виды, для
              вегетарианцев и любителей экспериментировать; быстрая и бесплатная
              доставка пиццы в течение 30 минут, чтобы вкусное и ароматное блюдо
              не успевало остыть. Как сделать заказ Доставка пиццы от Domino’s –
              это когда Вам не нужно никуда ехать или звонить, ведь есть
              Интернет. Никогда еще заказ пиццы на дом в Москве не был таким
              простым! Чтобы заказать пиццу онлайн, Вам необходимо: выбрать
              понравившийся вариант и количество порций; положить желаемое в
              «Корзину»; не уходить далеко, так как вкусная пицца на заказ с
              доставкой уже мчится к Вам из ближайшей пиццерии Domino’s. И не
              забудьте оплатить заказ курьеру!
            </p>
            <Link to={"/"}>Показать полностью</Link>
          </div>
        </div>
        {/* done */}
      </div>
    </main>
  );
};

export default HomePage;
