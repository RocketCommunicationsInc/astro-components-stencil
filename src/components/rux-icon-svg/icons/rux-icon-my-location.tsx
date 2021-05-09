import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/my-location.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-my-location',
  shadow: false,
})
export class RuxIconMyLocation {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#my-location`}></use>
      </svg>
    );
  }
}
