import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/border-horizontal.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-border-horizontal',
  shadow: false,
})
export class RuxIconBorderHorizontal {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#border-horizontal`}></use>
      </svg>
    );
  }
}
