import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/subdirectory-arrow-right.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-subdirectory-arrow-right',
  shadow: false,
})
export class RuxIconSubdirectoryArrowRight {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#subdirectory-arrow-right`}></use>
      </svg>
    );
  }
}
