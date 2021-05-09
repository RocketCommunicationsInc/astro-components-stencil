import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/line-weight.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-line-weight',
  shadow: false,
})
export class RuxIconLineWeight {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#line-weight`}></use>
      </svg>
    );
  }
}
