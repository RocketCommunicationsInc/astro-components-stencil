import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/wb-incandescent.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-wb-incandescent',
  shadow: false,
})
export class RuxIconWbIncandescent {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#wb-incandescent`}></use>
      </svg>
    );
  }
}
