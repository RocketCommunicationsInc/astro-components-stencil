import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/accessible-forward.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-accessible-forward',
  shadow: false,
})
export class RuxIconAccessibleForward {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#accessible-forward`}></use>
      </svg>
    );
  }
}
