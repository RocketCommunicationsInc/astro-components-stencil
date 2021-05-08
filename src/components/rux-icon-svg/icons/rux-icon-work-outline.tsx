import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/work-outline.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-work-outline',
  shadow: false,
})
export class RuxIconWorkOutline {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#work-outline`}></use>
      </svg>
    );
  }
}
