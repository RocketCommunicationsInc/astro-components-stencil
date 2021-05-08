import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/tv.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-tv',
  shadow: false,
})
export class RuxIconTv {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#tv`}></use>
      </svg>
    );
  }
}
