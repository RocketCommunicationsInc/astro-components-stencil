import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/space-bar.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-space-bar',
  shadow: false,
})
export class RuxIconSpaceBar {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#space-bar`}></use>
      </svg>
    );
  }
}
