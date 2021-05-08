import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/access-alarms.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-access-alarms',
  shadow: false,
})
export class RuxIconAccessAlarms {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#access-alarms`}></use>
      </svg>
    );
  }
}
