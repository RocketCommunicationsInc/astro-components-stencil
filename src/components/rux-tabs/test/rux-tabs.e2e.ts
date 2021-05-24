import { newE2EPage } from '@stencil/core/testing';

describe('rux-tabs', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rux-tabs></rux-tabs>');

    const element = await page.find('rux-tabs');
    expect(element).toHaveClass('hydrated');
  });
});
