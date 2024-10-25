import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {};
  return (
    <div className="header">
      <h1 style={style}>Fast React pizza company</h1>
    </div>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <div className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic italian cuisine , 6 creative dishes to choose from. All
            from our stone oven, all organic , all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza.name} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}

      {/* {numPizzas > 0 && (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      )} */}

      {/* <ul className="pizzas">
        {pizzas.map((pizza) => (
          <Pizza
            pizzaObj={pizza} key={pizza.name}
          />
        ))}
      </ul> */}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredient="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizza/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Fungi"
        ingredient="Tomato, mushrooms"
        photoName="pizza/funghi.jpg"
        price={12}
      /> */}
    </div>
  );
}

function Pizza({ pizzaObj }) {
  console.log(pizzaObj);

  // if (pizzaObj.soldOut) return null;

  return (
    <li className={ `pizza ${pizzaObj.soldOut ? "sold-out" :  ""}` }>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>

        {/* {pizzaObj.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span>{pizzaObj.price}</span>
        )} */}

        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );

  //   return (
  //     <li className="pizza">
  //       <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
  //       <div>
  //         <h3>{props.pizzaObj.name}</h3>
  //         <p>{props.pizzaObj.ingredients}</p>
  //         <span>{props.pizzaObj.price + 3}</span>
  //       </div>
  //     </li>
  //   );
}

function Footer(props) {
  console.log(props);
  const hour = new Date().getHours();
  const openHour = 8;
  const closehour = 22;

  const isopen = hour >= openHour && hour <= closehour;
  console.log(isopen);

  // if(hour >= openHour && hour <= closehour) {
  //     alert("We're currently open")
  // } else {
  //     alert("Sorry We're closed ")
  // }

  return (
    <footer className="footer">
      {isopen ? (
        <Order closehour={closehour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00. and {closehour}:00.
        </p>
      )}

      {/* {isopen && (
        <div className="order">
          <p>
            We're open until until {closehour}:00. Come visit us or Order Online
          </p>
          <button className="btn">Order</button>
        </div>
      )} */}
    </footer>
  );
}

function Order({ closehour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}.00 to {closehour}:00. Come visit us or Order
        Online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
