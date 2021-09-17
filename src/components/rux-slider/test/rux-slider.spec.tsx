import { newSpecPage } from '@stencil/core/testing'
import { RuxSlider } from '../rux-slider'

describe('rux-slider', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxSlider],
            html: `<rux-slider></rux-slider>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-slider style="--slider-value-percent: 50%;">
        <mock:shadow-root>
          <div class="rux-form-field">
            <div class="rux-slider">
              <input aria-disabled="false" aria-label="slider" id="rux-slider-1" class="rux-range" max="100" min="0" step="1" type="range" value="50">
            </div>
         </div>
         <slot></slot>
        </mock:shadow-root>
        <input class="aux-input" type="hidden" value="50">
      </rux-slider>
    `)
    })
})
