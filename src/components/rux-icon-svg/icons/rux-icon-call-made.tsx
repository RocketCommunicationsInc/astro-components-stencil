import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/call-made.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-call-made',
  shadow: false,
})
export class RuxIconCallMade {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#call-made`}></use>
      </svg>
    );
  }
}
