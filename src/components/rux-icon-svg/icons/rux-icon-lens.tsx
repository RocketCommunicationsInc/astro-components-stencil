import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/lens.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-lens',
  shadow: false,
})
export class RuxIconLens {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#lens`}></use>
      </svg>
    );
  }
}
