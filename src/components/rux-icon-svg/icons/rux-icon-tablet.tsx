import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/tablet.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-tablet',
  shadow: false,
})
export class RuxIconTablet {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#tablet`}></use>
      </svg>
    );
  }
}
