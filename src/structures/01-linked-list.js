/**
 * @description создает связанный список
 */
function LinkedList() {
  this.head = null;
  this.tail = null;
}

/**
 * @description создает узел связанного списка
 * @param {*} value содержимое узла
 * @param {Object.Node} next следующий узел
 * @param {Object.Node} prev предыдущий узел
 */
function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

/**
 * @description добавляет новый узел в начало списка
 * @param {*} value содержимое узла
 */
LinkedList.prototype.addToHead = function (value) {
  const newNode = new Node(value, this.head, null);
  if (this.head) {
    this.head.prev = newNode;
  } else {
    this.tail = newNode;
  }
  this.head = newNode;
};

/**
 * @description добавляет новый узел в конец списка
 * @param {*} value содержимое узла
 */
LinkedList.prototype.addToTail = function (value) {
  const newNode = new Node(value, null, this.tail);
  if (this.tail) {
    this.tail.next = newNode;
  } else {
    this.head = newNode;
  }
  this.tail = newNode;
};

/**
 * @description удаляет узел из начала списка
 * @returns значение удаленного узла
 */
LinkedList.prototype.removeHead = function () {
  if (!this.head) return null;
  const oldVal = this.head.value;
  this.head = this.head.next;
  if (this.head) {
    this.head.prev = null;
  } else {
    this.tail = null;
  }
  return oldVal;
};

/**
 * @description удаляет узел с конца списка
 * @returns значение удаленного узла
 */
LinkedList.prototype.removeTail = function () {
  if (!this.tail) return null;
  const oldVal = this.tail.value;
  this.tail = this.tail.prev;
  if (this.tail) {
    this.tail.next = null;
  } else {
    this.head = null;
  }
  return oldVal;
};

/**
 * @description ищет указанное значение в узлах списка с начала
 * @param {*} searchValue что нужно найти
 * @returns {searchValue||null}
 */
LinkedList.prototype.search = function (searchValue) {
  let currentNode = this.head;
  while (currentNode) {
    if (currentNode.value === searchValue) return currentNode.value;
    currentNode = currentNode.next;
  }
  return null;
};

/**
 * @description выводит в консоль все значения узлов начиная с головы
 */
LinkedList.prototype.print = function () {
  let current = this.head;
  while (current) {
    console.log(current.value);
    current = current.next;
  }
};

/**
 * @description разворачивает список
 */
LinkedList.prototype.reverse = function () {
  const tmpVal = this.head.value;
  this.head.value = this.tail.value;
  this.tail.value = tmpVal;
  let currentNode = this.head.next;
  while (currentNode.next.next) {
    const tmp = currentNode.value;
    currentNode.value = currentNode.next.value;
    currentNode.next.value = tmp;
    currentNode = currentNode.next;
  }
};

/**
 * @description находит индексы указанного значения
 * @param {*} val что ищем
 * @returns {Array.<Number>} массив с номерами индексов найденных ключей
 * или пустой массив если ничего не найдено
 */
LinkedList.prototype.idxOf = function (val) {
  const arr = [];
  let index = 0;
  let curNode = this.head;
  while (curNode) {
    if (curNode.value === val) arr.push(index);
    curNode = curNode.next;
    index++;
  }
  return arr;
};

module.exports.List = LinkedList;
module.exports.Node = Node;
