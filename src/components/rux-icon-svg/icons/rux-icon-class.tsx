import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/class.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-class',
  shadow: false,
})
export class RuxIconClass {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#class`}></use>
      </svg>
    );
  }
}
