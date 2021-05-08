import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/arrow-right-alt.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-arrow-right-alt',
  shadow: false,
})
export class RuxIconArrowRightAlt {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#arrow-right-alt`}></use>
      </svg>
    );
  }
}
