import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import Input from './Input';

describe('Input Component', () => {
  it('renders with default props', () => {
    const { getByRole } = render(<Input />);
    const input = getByRole('textbox');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
  });

  it('handles onChange event', () => {
    const handleChange = vi.fn();
    const { getByRole } = render(<Input onChange={handleChange} />);
    const input = getByRole('textbox');
    
    fireEvent.change(input, { target: { value: 'test' } });
    expect(handleChange).toHaveBeenCalled();
  });

  it('renders with placeholder', () => {
    const placeholder = 'Enter text';
    const { getByPlaceholderText } = render(<Input placeholder={placeholder} />);
    expect(getByPlaceholderText(placeholder)).toBeInTheDocument();
  });
});