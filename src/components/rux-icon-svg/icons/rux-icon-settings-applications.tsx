import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/settings-applications.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-settings-applications',
  shadow: false,
})
export class RuxIconSettingsApplications {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#settings-applications`}></use>
      </svg>
    );
  }
}
