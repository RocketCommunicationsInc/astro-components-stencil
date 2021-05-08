import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/forward-10.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-forward-10',
  shadow: false,
})
export class RuxIconForward10 {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#forward-10`}></use>
      </svg>
    );
  }
}
