import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/alarm-on.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-alarm-on',
  shadow: false,
})
export class RuxIconAlarmOn {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#alarm-on`}></use>
      </svg>
    );
  }
}
