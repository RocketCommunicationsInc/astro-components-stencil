import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/format-textdirection-l-to-r.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-format-textdirection-l-to-r',
  shadow: false,
})
export class RuxIconFormatTextdirectionLToR {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#format-textdirection-l-to-r`}></use>
      </svg>
    );
  }
}
