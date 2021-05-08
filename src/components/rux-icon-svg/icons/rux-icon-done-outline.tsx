import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/done-outline.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-done-outline',
  shadow: false,
})
export class RuxIconDoneOutline {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#done-outline`}></use>
      </svg>
    );
  }
}
