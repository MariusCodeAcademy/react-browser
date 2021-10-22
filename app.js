// JSX
const rezult = 5 * 43;

const topSecionData = {
  title: 'The band!',
  subTitle: 'We love music',
};

const App = (
  <div className=''>
    <section className='top container'>
      <h1 className='title title--main'>{topSecionData.title}</h1>
      <h6 className='title title--sub'>We love music</h6>
      <p className='text--main'>
        We have created a fictional band website. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <div className='people-container d-flex justify-around'>
        <article className='people-card'>
          <p>Name</p>
          <img src='img/cart.jpg' alt='cart' />
        </article>
        <article className='people-card'>
          <p>Name</p>
          <img src='img/cart.jpg' alt='cart' />
        </article>
        <article className='people-card'>
          <p>Name</p>
          <img src='img/cart.jpg' alt='cart' />
        </article>
      </div>
    </section>
    <section className='black'>
      <div className='container'>
        <h2 className='title--main'>Tour dates</h2>
        <h6 className='title title--sub'>Remember to book your tickets</h6>
        <div className='tour-cards-container d-flex justify-around'>
          <article className='tour-card'>
            <img src='img/desert.jpg' alt='cart' />
            <p className='title--card'>New York</p>
            <p className='tour__date'>Fri 27 Nov 2016</p>
            <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
            <button className='btn--black'>Buy Tickets</button>
          </article>
          <article className='tour-card'>
            <img src='img/desert.jpg' alt='cart' />
            <p className='title--card'>New York</p>
            <p className='tour__date'>Fri 27 Nov 2016</p>
            <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
            <button className='btn--black'>Buy Tickets</button>
          </article>
          <article className='tour-card'>
            <img src='img/desert.jpg' alt='cart' />
            <p className='title--card'>New York</p>
            <p className='tour__date'>Fri 27 Nov 2016</p>
            <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
            <button className='btn--black'>Buy Tickets</button>
          </article>
        </div>
      </div>
    </section>
  </div>
);

ReactDOM.render(App, document.getElementById('root'));
