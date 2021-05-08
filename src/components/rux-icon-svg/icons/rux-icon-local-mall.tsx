import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/local-mall.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-local-mall',
  shadow: false,
})
export class RuxIconLocalMall {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#local-mall`}></use>
      </svg>
    );
  }
}
