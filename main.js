// console.log( getDeclOfNum(44, ['минута', 'минуты', 'минут']) )



document.addEventListener('DOMContentLoaded', function () {
  try {



    let cartCount = document.querySelector('.cart-count');
    let cartCountNum = cartCount.querySelector('.cart-count__num').textContent;
    let cartCountWord = cartCount.querySelector('.cart-count__word');

    cartCountWord.textContent = getDeclOfNum(cartCountNum, ['товар', 'товара', 'товаров']);



  } catch (err) {
    console.error(err)
  } finally {}
})