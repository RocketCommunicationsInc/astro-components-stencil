import { newE2EPage } from '@stencil/core/testing';

describe('rux-switch', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rux-switch></rux-switch>');

    const element = await page.find('rux-switch');
    expect(element).toHaveClass('hydrated');
  });
});
