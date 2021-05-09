import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/gradient.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-gradient',
  shadow: false,
})
export class RuxIconGradient {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#gradient`}></use>
      </svg>
    );
  }
}
