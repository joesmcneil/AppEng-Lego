import * as pageCreate from './pageCreation.mjs';

// window.addEventListener('load', () => {
// fetch url pass id into fetch}
//
// )

const mainSection = document.querySelector('.mainSection');
const containerDiv = pageCreate.createDiv('itemDetailContainerDiv');
mainSection.appendChild(containerDiv);

const imageContainerDiv = pageCreate.createDiv('imageContainerDiv');
containerDiv.appendChild(imageContainerDiv);
const itemDetailImage = pageCreate.createImage('../public/images/legoBonzaiTree.jpg', 'itemDetailsImage');
imageContainerDiv.appendChild(itemDetailImage);

const itemDetailContent = pageCreate.createDiv('itemDetailContentContainer');
containerDiv.appendChild(itemDetailContent);

const itemDescriptionContainer = pageCreate.createDiv('itemDescriptionContainer');
const itemDetailDescText = pageCreate.createParagraph('Description', 'itemDetailDescText');
itemDetailContent.appendChild(itemDescriptionContainer);
itemDescriptionContainer.appendChild(itemDetailDescText);

const itemPriceContainer = pageCreate.createDiv('itemPriceContainer');
const itemPriceText = pageCreate.createParagraph('Price', 'itemPriceText');
itemDetailContent.appendChild(itemPriceContainer);
itemPriceContainer.appendChild(itemPriceText);

const itemDetailQuantity = pageCreate.createDiv('itemQuantityContainer');
const minusButton = pageCreate.createButton('minusButton', 'button', '-');
const additionButton = pageCreate.createButton('addButton', 'button', '+');
const quantityField = pageCreate.createQuantityField('number', 'quantityField', '1');
itemDetailContent.appendChild(itemDetailQuantity);
itemDetailQuantity.appendChild(minusButton);
itemDetailQuantity.appendChild(quantityField);
itemDetailQuantity.appendChild(additionButton);

const stockStatus = pageCreate.createDiv('stockStatus');
itemDetailContent.appendChild(stockStatus);

const itemAddToBasket = pageCreate.createDiv('itemAddToBasket');
itemDetailContent.appendChild(itemAddToBasket);
