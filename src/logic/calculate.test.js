import calculate from './calculate';

describe('calculate', () => {
  const obj1 = {
    total: null,
    next: null,
    operation: null,
  };

  const obj2 = {
    total: 0,
    next: 0,
    operation: '+',
  };

  const buttonName1 = 'AC';
  const buttonName2 = '0';

  test('AC functionality', () => {
    const vaks = calculate(obj1, buttonName1);
    expect(vaks).toMatchObject({
      total: null,
      next: null,
      operation: null,
    });
  });

  test('zero functionality', () => {
    const vaks = calculate(obj2, buttonName2);
    expect(vaks).toMatchObject({});
  });
});
