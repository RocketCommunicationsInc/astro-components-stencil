import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/brightness-4.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-brightness-4',
  shadow: false,
})
export class RuxIconBrightness4 {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#brightness-4`}></use>
      </svg>
    );
  }
}
