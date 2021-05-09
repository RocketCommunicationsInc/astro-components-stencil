import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/transfer-within-a-station.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-transfer-within-a-station',
  shadow: false,
})
export class RuxIconTransferWithinAStation {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#transfer-within-a-station`}></use>
      </svg>
    );
  }
}
