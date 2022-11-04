import { render, screen } from '@testing-library/react';
import { ScreenReaderOnly } from '.';

describe('ScreenReaderOnly', () => {
  it('should have proper style', () => {
    const { getByTestId } = render(<ScreenReaderOnly data-testid="fixture">토스</ScreenReaderOnly>);
    const fixture = getByTestId('fixture');

    expect(fixture).toHaveStyle({
      position: 'absolute',
      width: '1px',
      height: '1px',
      padding: '0px',
      margin: '-1px',
      borderWidth: '0px',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
    });

    expect(fixture).not.toHaveStyle({
      position: 'relative',
    });
  });

  it('should render children well', () => {
    render(<ScreenReaderOnly>토스</ScreenReaderOnly>);

    expect(screen.getByText('토스')).toBeInTheDocument();
    expect(screen.queryByText('toss')).not.toBeInTheDocument();
  });

  it('should receive other props', () => {
    const { getByTestId } = render(
      <ScreenReaderOnly color="white" data-testid="fixture">
        토스
      </ScreenReaderOnly>
    );
    const fixture = getByTestId('fixture');
    expect(fixture.getAttribute('color')).toEqual('white');
    expect(fixture.getAttribute('color')).not.toEqual('black');
  });
});
