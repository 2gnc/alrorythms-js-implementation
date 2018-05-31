const p = require('./03-is-palindrome');

describe('Палиндром версия 2', () => {
  it('level', () => {
    expect(p.v2('level')).toBe(true);
  });

  it('Level', () => {
    expect(p.v2('Level')).toBe(true);
  });

  it('leve', () => {
    expect(p.v2('leve')).toBe(false);
  });

  it('leel', () => {
    expect(p.v2('leel')).toBe(true);
  });

  it('le3el', () => {
    expect(p.v2('le3el')).toBe(true);
  });

  it('le33el', () => {
    expect(p.v2('le33el')).toBe(true);
  });

  it('1', () => {
    expect(p.v2('1')).toBe(true);
  });

  it('А Лида гадила', () => {
    expect(p.v2('А Лида гадила')).toBe(true);
  });

  it('race car', () => {
    expect(p.v2('race car')).toBe(true);
  });

  it('Madam, I`m Adam', () => {
    expect(p.v2('Madam, I`m Adam')).toBe(true);
  });
});


describe('Палиндром версия 1', () => {
  it('level', () => {
    expect(p.v1('level')).toBe(true);
  });

  it('Level', () => {
    expect(p.v1('Level')).toBe(true);
  });

  it('leve', () => {
    expect(p.v1('leve')).toBe(false);
  });

  it('leel', () => {
    expect(p.v1('leel')).toBe(true);
  });

  it('le3el', () => {
    expect(p.v1('le3el')).toBe(true);
  });

  it('le33el', () => {
    expect(p.v1('le33el')).toBe(true);
  });

  it('1', () => {
    expect(p.v1('1')).toBe(true);
  });

  it('А Лида гадила', () => {
    expect(p.v1('А Лида гадила')).toBe(true);
  });

  it('race car', () => {
    expect(p.v1('race car')).toBe(true);
  });

  it('Madam, I`m Adam', () => {
    expect(p.v1('Madam, I`m Adam')).toBe(true);
  });
});
