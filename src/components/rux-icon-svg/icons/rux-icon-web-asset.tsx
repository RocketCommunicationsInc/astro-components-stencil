import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/web-asset.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-web-asset',
  shadow: false,
})
export class RuxIconWebAsset {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#web-asset`}></use>
      </svg>
    );
  }
}
