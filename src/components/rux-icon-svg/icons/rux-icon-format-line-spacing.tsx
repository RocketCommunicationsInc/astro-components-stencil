import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/format-line-spacing.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-format-line-spacing',
  shadow: false,
})
export class RuxIconFormatLineSpacing {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#format-line-spacing`}></use>
      </svg>
    );
  }
}
