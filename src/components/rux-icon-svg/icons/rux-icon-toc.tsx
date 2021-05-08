import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/toc.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-toc',
  shadow: false,
})
export class RuxIconToc {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#toc`}></use>
      </svg>
    );
  }
}
