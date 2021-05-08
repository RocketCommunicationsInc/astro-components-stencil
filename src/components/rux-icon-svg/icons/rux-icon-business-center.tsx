import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/business-center.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-business-center',
  shadow: false,
})
export class RuxIconBusinessCenter {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#business-center`}></use>
      </svg>
    );
  }
}
