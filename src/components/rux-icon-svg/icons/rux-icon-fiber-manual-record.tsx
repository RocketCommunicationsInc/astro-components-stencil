import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/fiber-manual-record.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-fiber-manual-record',
  shadow: false,
})
export class RuxIconFiberManualRecord {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#fiber-manual-record`}></use>
      </svg>
    );
  }
}
