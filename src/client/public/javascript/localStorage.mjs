import { getProductId as itemInfo } from './item.mjs';

export function addToBasket(productId) {
  const quantityField = document.querySelector('#quantityField');
  const itemId = productId.split(':')[1];
  const quantityValue = quantityField.value;

  const itemToAdd = {
    product_id: itemId,
    quantity: quantityValue,
  };

  localStorage.setItem(itemId, JSON.stringify(itemToAdd));
  console.log(quantityValue);
}

export function clearBasket() {
  localStorage.clear();
}


/*
localStorage.setItem('penis', 'penis1');

localStorage.getItem('penis');
console.log(localStorage.getItem('penis'));

localStorage.removeItem('penis');

console.log(localStorage.legnth);
*/
