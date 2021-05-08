import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/colorize.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-colorize',
  shadow: false,
})
export class RuxIconColorize {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#colorize`}></use>
      </svg>
    );
  }
}
