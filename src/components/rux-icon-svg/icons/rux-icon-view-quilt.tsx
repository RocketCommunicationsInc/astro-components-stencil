import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/view-quilt.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-view-quilt',
  shadow: false,
})
export class RuxIconViewQuilt {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#view-quilt`}></use>
      </svg>
    );
  }
}
