import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/phone-missed.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-phone-missed',
  shadow: false,
})
export class RuxIconPhoneMissed {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#phone-missed`}></use>
      </svg>
    );
  }
}
