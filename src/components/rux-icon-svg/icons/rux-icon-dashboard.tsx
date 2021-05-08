import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/dashboard.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-dashboard',
  shadow: false,
})
export class RuxIconDashboard {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#dashboard`}></use>
      </svg>
    );
  }
}
