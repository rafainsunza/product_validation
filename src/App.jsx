import "./App.scss";

/*
cardlike or not and side by side on lg screens
price and text of it
Reserve yours? early access? text content and what do the buttons do
li items text?
form title?
footer text?

track button clicks and website traffic
store email? */

function App() {
  return (
    <main>
      <div className="product__validation__wrapper">
        <h1 className="product__validation__title">
          Dry legs. <br className="product__validation__title__breaker" /> No rain pants.
        </h1>
        <h2 className="product__validation__subtitle">Front-leg rain covers for cyclists who hate rain pants.</h2>
        <div className="product__validation__image__wrapper">
          <img src="/cyclist_in_rain.jpeg" alt="" className="product__validation__image" />
        </div>

        <h3 className="product__validation__price">&euro;79 - first batch</h3>
        <button className="product__validation__button">Reserve yours</button>

        <ul className="product__validation__list">
          <li className="product__validation__list__item">On in seconds. Off in seconds</li>
          <li className="product__validation__list__item">No overheating.</li>
          <li className="product__validation__list__item">Covers the splash zone (knees + shins)</li>
        </ul>

        <form action="" className="product__validation__form">
          <h4 className="product__validation__form__title">
            Launching soon. <br className="product__validation__form__title__breaker" /> First batch is limited.
          </h4>
          <input type="email" className="product__validation__form__input" placeholder="Enter your email" />
          <button className="product__validation__form__button">Get early access</button>
        </form>

        <div className="product__validation__footer">Built by cyclists in Amsterdam.</div>
      </div>
    </main>
  );
}

export default App;
