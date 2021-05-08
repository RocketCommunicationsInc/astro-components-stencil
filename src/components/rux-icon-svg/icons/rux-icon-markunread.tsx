import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/markunread.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-markunread',
  shadow: false,
})
export class RuxIconMarkunread {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#markunread`}></use>
      </svg>
    );
  }
}
