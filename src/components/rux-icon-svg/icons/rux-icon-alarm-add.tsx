import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/alarm-add.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-alarm-add',
  shadow: false,
})
export class RuxIconAlarmAdd {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#alarm-add`}></use>
      </svg>
    );
  }
}
