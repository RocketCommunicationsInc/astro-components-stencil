import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/outlined-flag.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-outlined-flag',
  shadow: false,
})
export class RuxIconOutlinedFlag {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#outlined-flag`}></use>
      </svg>
    );
  }
}
