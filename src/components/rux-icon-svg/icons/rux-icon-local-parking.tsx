import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/local-parking.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-local-parking',
  shadow: false,
})
export class RuxIconLocalParking {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#local-parking`}></use>
      </svg>
    );
  }
}
