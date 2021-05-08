import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/person-pin.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-person-pin',
  shadow: false,
})
export class RuxIconPersonPin {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#person-pin`}></use>
      </svg>
    );
  }
}
