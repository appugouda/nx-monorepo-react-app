import { render } from '@testing-library/react';

import SmartGrid from './smart-grid';

describe('SmartGrid', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< SmartGrid />);
    expect(baseElement).toBeTruthy();
  });
});
