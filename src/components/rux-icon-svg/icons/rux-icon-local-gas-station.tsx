import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/local-gas-station.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-local-gas-station',
  shadow: false,
})
export class RuxIconLocalGasStation {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#local-gas-station`}></use>
      </svg>
    );
  }
}
