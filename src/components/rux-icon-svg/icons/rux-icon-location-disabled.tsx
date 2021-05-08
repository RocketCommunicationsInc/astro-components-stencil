import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/location-disabled.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-location-disabled',
  shadow: false,
})
export class RuxIconLocationDisabled {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#location-disabled`}></use>
      </svg>
    );
  }
}
