import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/face.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-face',
  shadow: false,
})
export class RuxIconFace {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#face`}></use>
      </svg>
    );
  }
}
