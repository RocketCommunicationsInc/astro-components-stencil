import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/wb-iridescent.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-wb-iridescent',
  shadow: false,
})
export class RuxIconWbIridescent {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#wb-iridescent`}></use>
      </svg>
    );
  }
}
