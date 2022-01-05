import React from 'react';
import { render } from '@testing-library/react';
import ProvideContext from '../../context/ProvideContext';
import Login from './Login';
import { MemoryRouter } from 'react-router-dom';

it('Should login', () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/login']}>
      <ProvideContext>
        <Login />
      </ProvideContext>
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
