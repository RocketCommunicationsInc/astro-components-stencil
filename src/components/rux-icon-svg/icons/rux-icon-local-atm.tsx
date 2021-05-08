import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/local-atm.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-local-atm',
  shadow: false,
})
export class RuxIconLocalAtm {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#local-atm`}></use>
      </svg>
    );
  }
}
