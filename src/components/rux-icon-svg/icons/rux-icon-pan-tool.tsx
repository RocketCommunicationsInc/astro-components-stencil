import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/pan-tool.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-pan-tool',
  shadow: false,
})
export class RuxIconPanTool {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#pan-tool`}></use>
      </svg>
    );
  }
}
