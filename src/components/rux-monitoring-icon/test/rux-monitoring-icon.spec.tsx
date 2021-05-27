import { newSpecPage } from '@stencil/core/testing';
import { RuxMonitoringIcon } from '../rux-monitoring-icon';

describe('rux-monitoring-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RuxMonitoringIcon],
      html: 
      `<rux-monitoring-icon
        icon="altitude"
        label="Altitude for satellite X"
        sublabel="100000m"
        status="standby"
        notifications="10210"
      ></rux-monitoring-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <rux-monitoring-icon icon="altitude" label="Altitude for satellite X" notifications="10210" status="standby" sublabel="100000m">
        <mock:shadow-root>
         <div class="rux-advanced-status" id="rux-advanced-status__icon" title="10210 Altitude for satellite X 100000m">
           <div class="rux-advanced-status__icon-group">
             <rux-status status="standby"></rux-status>
             <rux-icon class="rux-status--standby" icon="altitude"></rux-icon>
             <div class="rux-advanced-status__badge">
               10K
             </div>
           </div>
           <div class="rux-advanced-status__label">
             Altitude for satellite X
             <span class="rux-advanced-status__sublabel">
               100000m
             </span>
           </div>
         </div>
        </mock:shadow-root>
      </rux-monitoring-icon>
    `);
  });

  it('errors with invalid status', async () => {
    const monitorIcon = new RuxMonitoringIcon()

    expect(() => {
      monitorIcon.validateStatus('')
    }).toThrowError('valid status required')
  })
});
