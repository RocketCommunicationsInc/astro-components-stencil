import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/tv-off.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-tv-off',
  shadow: false,
})
export class RuxIconTvOff {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#tv-off`}></use>
      </svg>
    );
  }
}
