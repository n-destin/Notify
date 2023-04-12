// eslint-disable-next-line no-unused-vars
import $ from 'jquery';
// eslint-disable-next-line import/no-unresolved
import './style.css';

// $('#main').html(`Count: ${update()}`);

let num = 0;

const secondIncrease = () => {
  const main = document.getElementById('main');
  main.innerHTML = `You've been on this page for ${num} seconds`;
  num += 1;
};

setInterval(secondIncrease, 1000);
