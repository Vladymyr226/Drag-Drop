const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
}


// dragstart - cрабатывает когда элемент начал перемещаться.
// Может быть использован для сохранения информации о перемещаемом объекте
function dragstart(event) {
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add('hide'), 0)
}

function dragend(event) {
    event.target.className = 'item'
}

// dragover
// Данное событие срабатывает каждые несколько сотен миллисекунд,
// когда перемещаемый элемент оказывается над зоной,
// принимающей перетаскиваемые элементы
function dragover(event) {
    event.preventDefault()
}

// dragenter
// Срабатывает, когда перемещаемый элемент попадает на элемент-назначение.
// Обработчик этого события показывает, что элемент находится над объектом на который он может быть перенесён.
function dragenter(event) {
    event.target.classList.add('hovered')
}
// dragleave
// Это событие запускается в момент перетаскивания,
// когда курсор мыши выходит за пределы элемента.
function dragleave(event) {
    event.target.classList.remove('hovered')
}
function dragdrop(event) {
    event.target.classList.remove('hovered')
    //конкретный placeholder, с которым мы работаем
    event.target.append(item)
}