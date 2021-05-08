import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/hot-tub.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-hot-tub',
  shadow: false,
})
export class RuxIconHotTub {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#hot-tub`}></use>
      </svg>
    );
  }
}
