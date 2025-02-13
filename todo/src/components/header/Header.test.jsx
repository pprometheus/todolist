import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
  it('renders title correctly', () => {
    const title = 'Welcome';
    const { getByText } = render(<Header title={title} />);
    expect(getByText(title)).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<Header title="Test" className="custom-header" />);
    expect(container.firstChild).toHaveClass('custom-header');
  });
});

