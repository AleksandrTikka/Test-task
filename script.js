const products = document.querySelector('.products-list');
const select_form = document.querySelector('select');
//categories
const handleSelectForm = e => {
  const selected_value = e.target.value; //current value from select
  let cards = [...products.querySelectorAll('.products-item')]; //array of all cards obj
  switch (selected_value) {
    case 'electronics':
      cards.forEach(el => {
        el.dataset.category === selected_value
          ? (el.style.display = 'block')
          : (el.style.display = 'none');
      });
      break;
    case 'fashion':
      cards.forEach(el => {
        el.dataset.category === selected_value
          ? (el.style.display = 'block')
          : (el.style.display = 'none');
      });
      break;
    case 'home':
      cards.forEach(el => {
        el.dataset.category === selected_value
          ? (el.style.display = 'block')
          : (el.style.display = 'none');
      });
      break;
    case 'books':
      cards.forEach(el => {
        el.dataset.category === selected_value
          ? (el.style.display = 'block')
          : (el.style.display = 'none');
      });
      break;
    default:
      cards.forEach(el => (el.style.display = 'block'));
  }
};
select_form.addEventListener('change', handleSelectForm);

//search
const search_input = document.querySelector('.filter-input');
const handleInputSearchForm = e => {
  const search_data = e.target.value; //get data
  let cards = [...products.querySelectorAll('.products-item')]; //array of all cards obj
  cards.forEach(el => {
    el.textContent.toLowerCase().includes(search_data.toLowerCase())
      ? (el.style.display = 'block')
      : (el.style.display = 'none');
  });
};
search_input.addEventListener('input', handleInputSearchForm);

//reset
const reset_button = document.querySelector('.filter-reset');

const handleClick = () => {
  search_input.value = '';
  let cards = [...products.querySelectorAll('.products-item')]; //array of all cards obj
  cards.forEach(el => {
    el.style.display = 'block';
  });
};
reset_button.addEventListener('click', handleClick);
