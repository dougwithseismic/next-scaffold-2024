import "@testing-library/jest-dom";
import { render } from '@testing-library/react';
import RootLayout from '../app/layout';

describe('RootLayout', () => {
  it('renders children correctly', () => {
    const children = <div>Test Children</div>;
    const { getByText } = render(<RootLayout>{children}</RootLayout>);
    expect(getByText('Test Children')).toBeInTheDocument();
  });
});