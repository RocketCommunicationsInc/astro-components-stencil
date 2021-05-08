import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/cast.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-cast',
  shadow: false,
})
export class RuxIconCast {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#cast`}></use>
      </svg>
    );
  }
}
