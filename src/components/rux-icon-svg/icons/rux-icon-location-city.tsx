import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/location-city.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-location-city',
  shadow: false,
})
export class RuxIconLocationCity {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#location-city`}></use>
      </svg>
    );
  }
}
