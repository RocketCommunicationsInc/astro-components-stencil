import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/arrow-forward-ios.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-arrow-forward-ios',
  shadow: false,
})
export class RuxIconArrowForwardIos {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#arrow-forward-ios`}></use>
      </svg>
    );
  }
}
