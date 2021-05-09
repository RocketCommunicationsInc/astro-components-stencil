import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/home.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-home',
  shadow: false,
})
export class RuxIconHome {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#home`}></use>
      </svg>
    );
  }
}
