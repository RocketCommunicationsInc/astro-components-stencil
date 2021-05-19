import { newSpecPage } from '@stencil/core/testing';
import { RuxClassificationMarking } from '../rux-classification-marking';

describe('rux-classification-marking', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RuxClassificationMarking],
      html: `<rux-classification-marking></rux-classification-marking>`,
    });
    expect(page.root).toEqualHtml(`
      <rux-classification-markings>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rux-classification-markings>
    `);
  });

  // Write test for _getDisplayData to return proper data for all classifications and error state
  // test('getDisplayData', () => {
  //   const getDisplayDataMock = RuxClassificationMarking.
  //   expect(getDisplayDataMock).toMatchObject({text: "",label: ""})
  // })


});


