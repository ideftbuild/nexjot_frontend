import React from 'react';
import '@testing-library/jest-dom/';
import { render, screen, fireEvent } from '@testing-library/react';
import DropdownMenu from '../DropdownMenu';
import { MemoryRouter } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('DropdownMenu component', () => {
  it('renders the dropdown button', () => {
    render(<DropdownMenu />, {
      wrapper: MemoryRouter,
    });
    const button = screen.getByLabelText(/toggle dropdown/i);
    expect(button).toBeInTheDocument();
  });

  it('opens the menu when clicked', () => {
    render(<DropdownMenu />, {wrapper: MemoryRouter});
    const button = screen.getByLabelText(/toggle dropdown/i);
    fireEvent.click(button);
    expect(screen.getByText(/New Document/i)).toBeInTheDocument();
  });

  it('navigates when an option is clicked', () => {
    const navigate = useNavigate();
    render(<DropdownMenu />, {wrapper: MemoryRouter});
    fireEvent.click(screen.getByLabelText(/toggle dropdown/i));
    fireEvent.click(screen.getByText(/New Document/i));
    expect(navigate).toHaveBeenCalledWith('/new');
  });
});
