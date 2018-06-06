function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function (value) {
  if (value <= this.value) {
    if (!this.left) {
      this.left = new BST(value);
    } else {
      this.left.insert(value);
    }
  } else if (value > this.value) {
    if (!this.right) {
      this.right = new BST(value);
    } else {
      this.right.insert(value);
    }
  }
};

BST.prototype.contains = function (value) {
  let result = false;
  if (value === this.value) result = true;
  else if (value < this.value) {
    if (!this.left) return result;
    return this.left.contains(value);
  } else if (value > this.value) {
    if (!this.right) return result;
    return this.right.contains(value);
  }
  return result;
};

/**
 * @description обходит все ветки последовательно, каждую до конца
 * @param {Function} iteratorFunc функция, выполняемая на каждом узле
 */
BST.prototype.deepFirstTraverse = function (iteratorFunc, order) {
  if (order === 'pre-order') iteratorFunc(this.value);
  if (this.left) this.left.deepFirstTraverse(iteratorFunc, order);
  if (order === 'in-order') iteratorFunc(this.value);
  if (this.right) this.right.deepFirstTraverse(iteratorFunc, order);
  if (order === 'past-order') iteratorFunc(this.value);
};

BST.prototype.levelTraverse = function (iteratorFunc) {
  const queue = [this];
  while (queue.length) {
    const node = queue.shift();
    iteratorFunc(node);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
};


const tree = new BST(50);
tree.insert(55);
tree.insert(45);
tree.insert(40);
tree.insert(47);
tree.insert(70);
tree.insert(15);
tree.levelTraverse(val => {console.log(val.value)});


module.exports = BST;

