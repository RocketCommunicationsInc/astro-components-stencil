import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/directions-bus.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-directions-bus',
  shadow: false,
})
export class RuxIconDirectionsBus {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#directions-bus`}></use>
      </svg>
    );
  }
}
