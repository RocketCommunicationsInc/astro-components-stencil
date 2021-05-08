import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/arrow-forward.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-arrow-forward',
  shadow: false,
})
export class RuxIconArrowForward {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#arrow-forward`}></use>
      </svg>
    );
  }
}
