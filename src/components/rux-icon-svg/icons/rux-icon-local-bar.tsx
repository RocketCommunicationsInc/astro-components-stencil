import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/local-bar.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-local-bar',
  shadow: false,
})
export class RuxIconLocalBar {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#local-bar`}></use>
      </svg>
    );
  }
}
