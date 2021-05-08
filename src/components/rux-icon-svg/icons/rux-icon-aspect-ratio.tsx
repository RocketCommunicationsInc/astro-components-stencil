import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/aspect-ratio.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-aspect-ratio',
  shadow: false,
})
export class RuxIconAspectRatio {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#aspect-ratio`}></use>
      </svg>
    );
  }
}
