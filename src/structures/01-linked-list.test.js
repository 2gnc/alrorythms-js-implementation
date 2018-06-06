const ll = require('./01-linked-list');

describe('Связанные списки добавление головы', () => {
  it('добавление к пустому списку - голова', () => {
    const list = new ll.List();
    list.addToHead(100);
    expect(list.head.value).toBe(100);
  });
  it('добавление к пустому списку - хвост', () => {
    const list = new ll.List();
    list.addToHead(100);
    expect(list.tail.value).toBe(100);
  });
  it('добавление к непустому списку - голова', () => {
    const list = new ll.List();
    list.addToHead(100);
    list.addToHead(200);
    expect(list.head.value).toBe(200);
  });
  it('добавление к непустому списку - хвост', () => {
    const list = new ll.List();
    list.addToHead(100);
    list.addToHead(200);
    expect(list.tail.value).toBe(100);
  });
});

describe('Связанные списки добавление хвоста', () => {
  it('добавление к пустому списку - голова', () => {
    const list = new ll.List();
    list.addToTail(100);
    expect(list.head.value).toBe(100);
  });
  it('добавление к пустому списку - хвост', () => {
    const list = new ll.List();
    list.addToTail(100);
    expect(list.tail.value).toBe(100);
  });
  it('добавление к непустому списку - голова', () => {
    const list = new ll.List();
    list.addToTail(100);
    list.addToTail(200);
    expect(list.head.value).toBe(100);
  });
  it('добавление к непустому списку - хвост', () => {
    const list = new ll.List();
    list.addToTail(100);
    list.addToTail(200);
    expect(list.tail.value).toBe(200);
  });
});

describe('Связанные списки удаление головы', () => {
  it('удаление из пустого списка - голова', () => {
    const list = new ll.List();
    const x = list.removeHead();
    expect(x).toBe(null);
  });
  it('удаление из пустого списка - хвост', () => {
    const list = new ll.List();
    const x = list.removeHead(100);
    expect(x).toBe(null);
  });
  it('удаление из непустого списка - вернется значение', () => {
    const list = new ll.List();
    list.addToTail(100);
    const x = list.removeHead();
    expect(x).toBe(100);
  });
  it('удаление из непустого списка - хвост сместится', () => {
    const list = new ll.List();
    list.addToTail(100);
    list.addToTail(100);
    list.removeHead();
    expect(list.tail.value).toBe(100);
  });
});

describe('Связанные списки удаление хвоста', () => {
  it('удаление из пустого списка - голова', () => {
    const list = new ll.List();
    const x = list.removeTail();
    expect(x).toBe(null);
  });
  it('удаление из пустого списка - хвост', () => {
    const list = new ll.List();
    const x = list.removeTail(100);
    expect(x).toBe(null);
  });
  it('удаление из непустого списка - вернется значение', () => {
    const list = new ll.List();
    list.addToTail(100);
    const x = list.removeTail();
    expect(x).toBe(100);
  });
  it('удаление из непустого списка - хвост сместится', () => {
    const list = new ll.List();
    list.addToTail(100);
    list.addToTail(100);
    list.removeTail();
    expect(list.tail.value).toBe(100);
  });
});

describe('поиск в связанном списке', () => {
  it('поиск того, чего нет вернет null', () => {
    const list = new ll.List();
    list.addToTail(1);
    list.addToTail(2);
    list.addToTail(3);
    const result = list.search(4);
    expect(result).toBe(false);
  });
  it('поиск того, чего есть', () => {
    const list = new ll.List();
    list.addToTail(1);
    list.addToTail(2);
    list.addToTail(3);
    const result = list.search(3);
    expect(result).toBe(true);
  });
});

describe('разворот списка', () => {
  it('список развернут', () => {
    const list = new ll.List();
    list.addToHead(1);
    list.addToHead(2);
    list.addToHead(3);
    list.reverse();
    expect(list.head.value).toBe(1);
  });
});

describe('поиск индексов', () => {
  it('должен вернуть пустой массив', () => {
    const list = new ll.List();
    list.addToHead(1);
    list.addToHead(2);
    const x = list.idxOf(3);
    expect(x).toEqual([]);
  });
  it('должен вернуть массив с 1', () => {
    const list = new ll.List();
    list.addToHead(1);
    list.addToHead(2);
    const x = list.idxOf(2);
    expect(x).toEqual([0]);
  });
  it('должен вернуть массив с 1 0', () => {
    const list = new ll.List();
    list.addToHead(2);
    list.addToHead(2);
    const x = list.idxOf(2);
    expect(x).toEqual([0, 1]);
  });
});

describe('добавление в середину', () => {
  it('вставка в хвост', () => {
    const list = new ll.List();
    list.addToHead(1);
    list.addToHead(2);
    list.addToHead(3);
    const node = list.nodeAt(2);
    list.addAfter(node, 55);
    expect(list.tail.value).toEqual(55);
  });
});

describe('узел по номеру', () => {
  it('узел есть', () => {
    const list = new ll.List();
    list.addToHead(1);
    list.addToHead(2);
    list.addToHead(3);
    expect(list.nodeAt(0).value).toBe(3);
  });
});
