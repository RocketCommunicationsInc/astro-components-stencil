import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/blur-on.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-blur-on',
  shadow: false,
})
export class RuxIconBlurOn {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#blur-on`}></use>
      </svg>
    );
  }
}
