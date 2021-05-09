import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/rotate-90-degrees-cc.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-rotate-90-degrees-cc',
  shadow: false,
})
export class RuxIconRotate90DegreesCc {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#rotate-90-degrees-cc`}></use>
      </svg>
    );
  }
}
