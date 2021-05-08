import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/brightness-1.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-brightness-1',
  shadow: false,
})
export class RuxIconBrightness1 {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#brightness-1`}></use>
      </svg>
    );
  }
}
