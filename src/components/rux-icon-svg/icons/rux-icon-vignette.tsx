import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/vignette.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-vignette',
  shadow: false,
})
export class RuxIconVignette {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#vignette`}></use>
      </svg>
    );
  }
}
