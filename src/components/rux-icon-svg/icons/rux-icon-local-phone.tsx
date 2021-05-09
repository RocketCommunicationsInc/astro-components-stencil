import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/local-phone.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-local-phone',
  shadow: false,
})
export class RuxIconLocalPhone {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#local-phone`}></use>
      </svg>
    );
  }
}
