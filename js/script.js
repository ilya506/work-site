/* slider */
var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
});

/* work-tabs */
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.templates__btn').forEach(function (e) {
    e.addEventListener('click', function (e) {
      const tab = e.currentTarget.dataset.path;
      document.querySelectorAll('.tab-content').forEach(function (e) {
        e.classList.remove('tab-content--active')
        document.querySelector(`[data-target='${tab}']`).classList.add('tab-content--active');
      });
    });

    e.addEventListener('click', function (e) {
      const tabDefault = e.currentTarget.dataset.default;
      document.querySelectorAll('.templates__btn').forEach(function (e) {
        e.classList.remove('templates__btn--default')
        document.querySelector(`[data-path='${tabDefault}']`).classList.add('templates__btn--default');
      });
    });

  });
})

// accordion
$( function() {
  $( "#accordion" ).accordion({
    collapsible: true,
    heightStyle: 'content',
  });
});

//bruger
const burgerBtn = document.querySelector('.burger');
const menuClose = document.querySelector('.menu-close');
const menuBurger = document.querySelector('.nav');

burgerBtn.addEventListener('click', () => {
  menuBurger.classList.add('burger-active');
});

menuClose.addEventListener('click', () => {
  menuBurger.classList.remove('burger-active');
});


// pagination: - Пагинация (Pagination) – это порядковая нумерация страниц, которая в основном размещается вверху либо внизу страниц сайта.
// Преимущественно пагинацию используют на основных страницах либо разделах. Всё это выглядит вот так:
// el: - это просто идентификатор, и он ссылается на элемент - элемент DOM, который является соглашением в этой библиотеке.
// clickable: - делает кликабельность элемента
// addEventListener ссылается в библиотеку чтобы оно работала  - теория внизу 
// https://msiter.ru/tutorials/javascript/js_htmldom_eventlistener
// querySelectorAll - Метод querySelectorAll() Document возвращает статический (не динамический) NodeList, содержащий все найденные элементы документа, которые соответствуют указанному селектору.
// forEach-  Метод forEach() выполняет указанную функцию один раз для каждого элемента в массиве.
// currentTarget - Определяет элемент, в котором в данный момент обрабатывается событие, при движении события внутри DOM. Всегда совпадает элементом, на котором обработчик события был назначен, в отличие от свойства event.target, идентифицирующего элемент, на котором событие возникло.
// dataset.path - Используй this либо event.target
// this.dataset.path
// e.target.dataset
// e.target -- означает клик на конкретный элемент, типа тег внутри родителя на котором конкретно сделан клик.
// this -- указывает на родительский элемент на котором произошло событие.
// в случае если будешь использовать this, смени фунцкии на стрелочные чтобы this был доступен.
// Свойство classList возвращает псевдомассив DOMTokenList, содержащий все классы элемента.
// add( String [,String] )
// Добавляет элементу указанные классы
// Метод Element.remove() удаляет элемент из DOM-дерева, в котором он находится.
// HTML5 (en-US) спроектирован с возможностью расширения данных ассоциированных с каким-либо элементом, но в то же время не обязательно имеющих определённое значение. data-* атрибуты позволяют хранить дополнительную информацию в стандартных элементах HTML, без хаков вроде нестандартных атрибутов, лишних DOM-свойств или Node.setUserData().
 
// Синтаксис HTML
// Синтаксис прост — любой атрибут, чьё имя начинается с data-, является data-* атрибутом. Предположим у нас имеется статья и мы хотим сохранить дополнительную информацию без визуального представления. Для этого можно использовать data-атрибуты:
 
// <article
//   id="electriccars"
//   data-columns="3"
//   data-index-number="12314"
//   data-parent="cars">
// ...
// </article>
// accordion - Аккордеон – это вертикально сложенный набор заголовков. Каждый из них может быть развернут, чтобы показать содержимое, связанное с ним. Этот элемент так называется из-за того, что принцип его действия напоминает музыкальный инструмент аккордеон.
// collapsible	Если эта опция равна true, то щелчок на открытой панели приводит к ее закрытию, в результате чего все панели оказываются закрытыми. Значение по умолчанию — false
// В примерах установлен параметр heightStyle: 'content' – устанавливает высоту панелей по содержимому. В отличии от auto, который делает все панели с одинаковой высотой, что не очень удобно.

