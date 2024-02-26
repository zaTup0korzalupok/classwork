# classwork
classwork
ar books = [
ar books = [
    {
        "title": "Властелин колец",
        "author": "Дж. Р. Р. Толкин",
        "price": "500"
    }, {
        "title": "Гарри Поттер и философский камень",
        "author": "Дж. К. Роулинг",
        "price": "400"
    }, {
        "title": "1984",
        "author": "Джордж Оруэлл",
        "price": "300"
    }
];
books.sort(function(a, b) {
  return b.price - a.price;
});
. Сортировка объектов по свойству: Создайте функцию 
sortObjectsByProperty, которая принимает массив объектов и имя 
свойства, по которому нужно отсортировать объекты, и возвращает новый 
массив объектов, отсортированный по этому свойству

const sortObjectsByProperty = (objects, property) => {
  return Object.assign([], objects).sort((a, b) => (a[property] < b[property]) ? -1 : 1);
}
///////////////////////
function sortObjectsByProperty(objects, property){
    return objects.sort((a, b) => a[property] - b[property]);
}
