import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/thumb-down-alt.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-thumb-down-alt',
  shadow: false,
})
export class RuxIconThumbDownAlt {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#thumb-down-alt`}></use>
      </svg>
    );
  }
}
