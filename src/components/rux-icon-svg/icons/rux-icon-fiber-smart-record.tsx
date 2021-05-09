import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/fiber-smart-record.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-fiber-smart-record',
  shadow: false,
})
export class RuxIconFiberSmartRecord {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#fiber-smart-record`}></use>
      </svg>
    );
  }
}
