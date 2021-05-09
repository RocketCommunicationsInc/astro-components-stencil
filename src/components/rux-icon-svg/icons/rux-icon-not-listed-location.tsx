import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/not-listed-location.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-not-listed-location',
  shadow: false,
})
export class RuxIconNotListedLocation {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#not-listed-location`}></use>
      </svg>
    );
  }
}
