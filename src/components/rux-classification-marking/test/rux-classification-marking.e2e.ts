import { newE2EPage } from '@stencil/core/testing';

describe('rux-classification-markings', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rux-classification-markings></rux-classification-markings>');

    const element = await page.find('rux-classification-markings');
    expect(element).toHaveClass('hydrated');
  });
});
