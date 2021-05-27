import { Component, h, Prop, Watch } from '@stencil/core';
import { Status } from '../../common/commonTypes.module'
import { collapseNotifications } from '../../utils/utils'

@Component({
  tag: 'rux-monitoring-icon',
  styleUrl: 'rux-monitoring-icon.scss',
  shadow: true,
})
export class RuxMonitoringIcon {
  /*
  * Styles the icon according to the Astro Status colors. 
  * Valid options are the Astro statuses `critical`, `serious`, `caution`, `normal`, `standby` and `off`
  */
  @Prop({reflect: true}) status: Status = 'normal';
  /*
  * Displays a label below the icon
  */
  @Prop() label: string;
  /*
  * Displays a smaller label underneath the icon label 
  */
  @Prop() sublabel: string;
  /*
  * Displays an Astro icon matching this string. For a [full list of available icons, 
  * see the Icons section in Astro UXDS Guidelines](https://astrouxds.com/ui-components/icons-and-symbols)
  */
  @Prop() icon: string;
  /*
  * If provided and greater than `0`, displays an outlined number badge at the bottom right of the icon. 
  * Numbers above `9999` are abbreviated to `'10K'` or `'100K'` for numbers in the thousands, 
  * `'1.5M'` for millions, and `'1.5B'` for billions. The badge uses `'∞'` for one trillion or higher.
  */
  @Prop() notifications: number = 0;

  @Watch('status')
  validateStatus(newValue: string) {
      const statusTypes = {
          off: true,
          standby: true,
          normal: true,
          caution: true,
          serious: true,
          critical: true,
      }
      if (!statusTypes[newValue]) { throw new Error('valid status required') }
  }

  private _iconTemplate() {
    return (
      <rux-icon icon={this.icon} class={`rux-status--${this.status}`}></rux-icon>
    )
  }

  private _badgeTemplate() {
    return (
      <div class={`rux-advanced-status__badge ${!this.notifications && 'rux-advanced-status__hidden'}`}>
        {collapseNotifications(this.notifications)}
      </div>
    )
  }

  private _labelTemplate() {
    return (
      <div class="rux-advanced-status__label">
        {this.label}
        <span class={`rux-advanced-status__sublabel ${!this.sublabel && 'rux-advanced-status__hidden'}`}>{this.sublabel}</span>
      </div>
    );
  }


  render() {
    return (
      <div
        id="rux-advanced-status__icon"
        class="rux-advanced-status"
        title={`${this.notifications} ${this.label} ${this.sublabel}`}
      >
        <div class="rux-advanced-status__icon-group">
          <rux-status status={this.status}></rux-status>

          {this._iconTemplate()} {this._badgeTemplate()}
        </div>

        {this._labelTemplate()}
      </div>
    );
  }
}