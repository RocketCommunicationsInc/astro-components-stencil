import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/format-textdirection-r-to-l.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-format-textdirection-r-to-l',
  shadow: false,
})
export class RuxIconFormatTextdirectionRToL {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#format-textdirection-r-to-l`}></use>
      </svg>
    );
  }
}
