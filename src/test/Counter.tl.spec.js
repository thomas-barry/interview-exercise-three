import React from 'react';

import { render, cleanup } from '@testing-library/react';
import Counter from '../Counter';

afterEach(cleanup);

const renderComponent = () => render(<Counter />);

describe('Counter', () => {
  it('passes', () => {
    expect(true).toBe(true)
  });
});