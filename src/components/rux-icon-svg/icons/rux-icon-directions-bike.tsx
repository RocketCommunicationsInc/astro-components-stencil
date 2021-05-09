import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/directions-bike.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-directions-bike',
  shadow: false,
})
export class RuxIconDirectionsBike {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#directions-bike`}></use>
      </svg>
    );
  }
}
