import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/wb-sunny.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-wb-sunny',
  shadow: false,
})
export class RuxIconWbSunny {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#wb-sunny`}></use>
      </svg>
    );
  }
}
