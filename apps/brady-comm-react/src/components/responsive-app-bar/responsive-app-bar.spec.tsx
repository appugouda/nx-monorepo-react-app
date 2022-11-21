import { render } from '@testing-library/react';

import ResponsiveAppBar from './responsive-app-bar';

describe('ResponsiveAppBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ResponsiveAppBar />);
    expect(baseElement).toBeTruthy();
  });
});
