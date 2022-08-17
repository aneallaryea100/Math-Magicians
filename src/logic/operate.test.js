import operate from './operate';

describe('test for operation', () => {
  test('addition operation', () => {
    const addOperation = operate(5, 5, '+');
    expect(addOperation).toBe('10');
  });

  test('substract operation', () => {
    const substractOperation = operate(10, 5, '-');
    expect(substractOperation).toBe('5');
  });

  test('multiply operation', () => {
    const substractOperation = operate(10, 5, 'x');
    expect(substractOperation).toBe('50');
  });

  test('divide operation', () => {
    const substractOperation = operate(10, 5, '÷');
    expect(substractOperation).toBe('2');
  });
});
