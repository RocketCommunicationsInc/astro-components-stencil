import { Component, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'rux-monitoring-icon',
  styleUrl: 'rux-monitoring-icon.scss',
  shadow: true,
})
export class RuxMonitoringIcon {
  @Prop({reflect: true}) status: string = 'normal';
  @Prop() label: string;
  @Prop() sublabel: string;
  @Prop() icon: string;
  @Prop() notifications: number = 0;

  _collapseNotification(value: number) {
    const n = Math.floor(value);

    // don't show any values less than 0
    if (n <= 0) return null;

    // get the place value
    const thousand = Math.floor((n / 1000) % 1000); // only return a whole number
    const million = (n / 1000000) % 1000000; // return a decimal value for numbers like 1.2m
    const billion = (n / 1000000000) % 1000000000; // return a decimal value for numbers like 1.2b
    const trillion = (n / 1000000000000) % 1000000000000; // trillion is just to offer an overflow instance

    // set the display to its original state
    let _shorthand = n.toString();

    if (trillion >= 1) {
      _shorthand = '∞';
    } else if (billion >= 1) {
      _shorthand = `${billion.toFixed(1).toString()}B`;
    } else if (million >= 1) {
      _shorthand = `${million.toFixed(1).toString()}M`;
    } else if (thousand >= 1) {
      _shorthand = `${thousand}K`;
    }

    return _shorthand;
  }

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

  iconTemplate() {
    return (
      <rux-icon icon={this.icon} class={`rux-status--${this.status}`}></rux-icon>
    )
  }

  badgeTemplate() {
    return (
      <div class="rux-advanced-status__badge" aria-hidden={!this.notifications}>
        {this._collapseNotification(this.notifications)}
      </div>
    )
  }

  labelTemplate() {
    return (
      <div class="rux-advanced-status__label">
        {this.label}
        <span class="rux-advanced-status__sublabel" aria-hidden={!this.sublabel}>{this.sublabel}</span>
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

          {this.iconTemplate()} {this.badgeTemplate()}
        </div>

        {this.labelTemplate()}
      </div>
    );
  }
