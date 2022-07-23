import { render, fireEvent, getByText } from '@testing-library/react';
import App from './App';
import { getSum } from './api';

it('input check', (): void => {
  const { getByPlaceholderText, getByText } = render(<App />);
  const input1: any = getByPlaceholderText('First Number');
  const input2: any = getByPlaceholderText('Second Number');
  fireEvent.change(input1, { target: { value: 123 } });
  fireEvent.change(input2, { target: { value: 2 } });
  expect(parseInt(input1.value)).toBe(123);
  expect(parseInt(input2.value)).toBe(2);
});

it('api check', async () => {
  let result: Number = await getSum({ firstNumber: 1, secondNumber: 2 });
  expect(result).toBe(3);
})
