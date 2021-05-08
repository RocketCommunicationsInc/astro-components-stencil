import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/call-missed.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-call-missed',
  shadow: false,
})
export class RuxIconCallMissed {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#call-missed`}></use>
      </svg>
    );
  }
}
