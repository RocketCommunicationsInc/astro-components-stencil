import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/call-to-action.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-call-to-action',
  shadow: false,
})
export class RuxIconCallToAction {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#call-to-action`}></use>
      </svg>
    );
  }
}
