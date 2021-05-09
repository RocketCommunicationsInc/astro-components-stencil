import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/business.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-business',
  shadow: false,
})
export class RuxIconBusiness {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#business`}></use>
      </svg>
    );
  }
}
