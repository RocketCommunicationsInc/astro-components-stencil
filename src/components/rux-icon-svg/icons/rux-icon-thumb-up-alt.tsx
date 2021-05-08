import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/thumb-up-alt.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-thumb-up-alt',
  shadow: false,
})
export class RuxIconThumbUpAlt {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#thumb-up-alt`}></use>
      </svg>
    );
  }
}
