import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/add-alarm.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-add-alarm',
  shadow: false,
})
export class RuxIconAddAlarm {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#add-alarm`}></use>
      </svg>
    );
  }
}
