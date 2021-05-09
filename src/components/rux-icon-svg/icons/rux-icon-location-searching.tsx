import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/location-searching.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-location-searching',
  shadow: false,
})
export class RuxIconLocationSearching {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#location-searching`}></use>
      </svg>
    );
  }
}
