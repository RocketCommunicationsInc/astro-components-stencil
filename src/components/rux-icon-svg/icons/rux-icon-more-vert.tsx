import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/more-vert.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-more-vert',
  shadow: false,
})
export class RuxIconMoreVert {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#more-vert`}></use>
      </svg>
    );
  }
}
