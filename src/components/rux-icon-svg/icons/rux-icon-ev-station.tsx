import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/ev-station.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-ev-station',
  shadow: false,
})
export class RuxIconEvStation {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#ev-station`}></use>
      </svg>
    );
  }
}
