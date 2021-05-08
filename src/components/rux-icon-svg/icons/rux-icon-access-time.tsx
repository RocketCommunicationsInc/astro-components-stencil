import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/access-time.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-access-time',
  shadow: false,
})
export class RuxIconAccessTime {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#access-time`}></use>
      </svg>
    );
  }
}
