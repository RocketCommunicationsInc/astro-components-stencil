import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/info.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-info',
  shadow: false,
})
export class RuxIconInfo {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#info`}></use>
      </svg>
    );
  }
}
