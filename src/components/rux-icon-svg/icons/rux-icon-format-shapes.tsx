import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/format-shapes.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-format-shapes',
  shadow: false,
})
export class RuxIconFormatShapes {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#format-shapes`}></use>
      </svg>
    );
  }
}
