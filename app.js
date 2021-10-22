// JSX
const rezult = 5 * 43;

const App = (
  <div className='container'>
    <h1 className='kazkas'>Hello, React!</h1>
    <h2>Calculations: 5 * 43 = {rezult}</h2>
  </div>
);

ReactDOM.render(App, document.getElementById('root'));
