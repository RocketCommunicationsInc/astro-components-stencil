import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/border-all.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-border-all',
  shadow: false,
})
export class RuxIconBorderAll {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#border-all`}></use>
      </svg>
    );
  }
}
