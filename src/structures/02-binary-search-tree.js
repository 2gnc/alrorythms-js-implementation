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
BST.prototype.deepFirstTraverse = function (iteratorFunc) {
  if (this.left) this.left.deepFirstTraverse(iteratorFunc);
  iteratorFunc(this.value);
  if (this.right) this.right.deepFirstTraverse(iteratorFunc);
};

module.exports = BST;

