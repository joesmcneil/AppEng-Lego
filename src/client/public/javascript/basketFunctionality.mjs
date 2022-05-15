// addToBasket adds the relevant items to localStorage

export function addToBasket(productId) {
  const quantityField = document.querySelector('#quantityField');
  // Taking the element containing productId and splitting it to get the id only
  const itemId = productId.split(':')[1];
  console.log(window.location.href);

  // If the user is on the store, increment by 1 when clicking add to basket
  // If they are not (they are in the item details page), increment by the value in the relevant quantity field
  let itemToAdd = {};
  if (window.location.href === 'http://localhost:8080/store/') {
    itemToAdd = {
      product_id: itemId,
      quantity: 1,
    };
  } else {
    const quantityValue = quantityField.value;
    itemToAdd = {
      product_id: itemId,
      quantity: quantityValue,
    };
  }
  // Add the item to local storage
  localStorage.setItem(itemId, JSON.stringify(itemToAdd));
  console.log(itemToAdd);
}


export function addToBasketListener(button) {
  const id = button.id;
  button.addEventListener('click', () => {
    addToBasket(id);
  });
}

export function clearBasket() {
  localStorage.clear();
}


export async function findBasketItems() {
  const basketItemsArr = [];
  for (let i = 0; i < localStorage.length; i++) {
    let basketItem = localStorage.getItem(localStorage.key(i));
    basketItem = JSON.parse(basketItem);
    // (Flaschen, 2010) -- loop through local storage
    const response = await fetch(`/getItemById/${basketItem.product_id}`);
    const item = response.json();
    await item.then(obj => {
      for (const item of obj) {
        basketItemsArr.push(item);
      }
    });
  }
  console.log(basketItemsArr);
  return basketItemsArr;
}

// Adding event listeners for the buttons to adjust the item quantity selector.

export function addQuantityButtonListeners() {
  const addButton = document.querySelector('.addButton');
  const minusButton = document.querySelector('.minusButton');
  const quantityField = document.querySelector('#quantityField');

  addButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(quantityField.value) || 0;
    quantityField.value = currentValue + 1;
  });

  minusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(quantityField.value) || 0;
    if (currentValue === 0 || currentValue === 1) {
      console.log('Value already 0, no subtracting!');
    } else quantityField.value = currentValue - 1;
  });
  // Interpreted from: https://stackoverflow.com/questions/52125163/how-to-create-a-minus-and-plus-button-to-update-a-field
}

export function removeItemFromBasket() {
  const removeButton = document.querySelector('.removeBasketItem');
  const itemId = removeButton.id.split(':')[1];
  console.log(itemId);
  const parentElem = document.getElementById(`item:${itemId}`);
  console.log(parentElem);

  parentElem.remove();

  localStorage.removeItem(itemId);
  console.log(removeButton);
}
