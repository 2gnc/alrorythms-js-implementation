const BST = require('./02-binary-search-tree');

describe('Добавление узлов', () => {
  it('меньший узел добавляется влево', () => {
    const tree = new BST(50);
    tree.insert(10);
    expect(tree.left.value).toBe(10);
  });
  it('больший узел добавляется вправо', () => {
    const tree = new BST(50);
    tree.insert(60);
    expect(tree.right.value).toBe(60);
  });
  it('узел добавляется влево рекурсивно', () => {
    const tree = new BST(50);
    tree.insert(10);
    tree.insert(9);
    expect(tree.left.left.value).toBe(9);
  });
  it('узел добавляется вправо рекурсивно', () => {
    const tree = new BST(50);
    tree.insert(60);
    tree.insert(65);
    expect(tree.right.right.value).toBe(65);
  });
});

describe('проверка contains', () => {
  it('в дереве нет элемента - вернет false', () => {
    const tree = new BST(50);
    tree.insert(55);
    tree.insert(45);
    tree.insert(40);
    tree.insert(47);
    tree.insert(70);
    tree.insert(15);
    const x = tree.contains(10);
    expect(x).toBeFalsy();
  });
  it('в дереве нет элемента - вернет false', () => {
    const tree = new BST(50);
    tree.insert(55);
    tree.insert(45);
    tree.insert(40);
    tree.insert(47);
    tree.insert(70);
    tree.insert(15);
    const x = tree.contains(71);
    expect(x).toBeFalsy();
  });
  it('в дереве есть элемет в первом узле - вернет true', () => {
    const tree = new BST(50);
    tree.insert(55);
    tree.insert(45);
    tree.insert(40);
    tree.insert(47);
    tree.insert(70);
    tree.insert(15);
    const x = tree.contains(50);
    expect(x).toBeTruthy();
  });
  it('в дереве есть элемет не в первом узле - вернет true', () => {
    const tree = new BST(50);
    tree.insert(55);
    tree.insert(45);
    tree.insert(40);
    tree.insert(47);
    tree.insert(70);
    tree.insert(15);
    const x = tree.contains(15);
    expect(x).toBeTruthy();
  });
});

describe('обход в глубину от меньшего к большему', () => {
  it('обойти дерево из 5 узлов - число вызовов 5', () => {
    const mock = jest.fn();
    const tree = new BST(50);
    tree.insert(55);
    tree.insert(45);
    tree.insert(40);
    tree.insert(47);
    tree.deepFirstTraverse(mock, 'pre-order');
    expect(mock.mock.calls.length).toBe(5);
  });
});

describe('обход в ширину', () => {
  it('обойти дерево из 5 узлов - число вызовов 5', () => {
    const mock = jest.fn();
    const tree = new BST(50);
    tree.insert(55);
    tree.insert(45);
    tree.insert(40);
    tree.insert(47);
    tree.levelTraverse(mock, 'pre-order');
    expect(mock.mock.calls.length).toBe(5);
  });
});

describe('максимальное и минимальное значение', () => {
  it('минимальное', () => {
    const tree = new BST(50);
    tree.insert(55);
    tree.insert(45);
    tree.insert(40);
    tree.insert(47);
    expect(tree.getMin()).toBe(40);
  });
  it('максимальное', () => {
    const tree = new BST(50);
    tree.insert(55);
    tree.insert(45);
    tree.insert(40);
    tree.insert(47);
    expect(tree.getMax()).toBe(55);
  });
});