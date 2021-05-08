import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/arrow-back-ios.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-arrow-back-ios',
  shadow: false,
})
export class RuxIconArrowBackIos {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#arrow-back-ios`}></use>
      </svg>
    );
  }
}
