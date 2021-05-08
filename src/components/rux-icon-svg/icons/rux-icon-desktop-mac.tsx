import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/desktop-mac.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-desktop-mac',
  shadow: false,
})
export class RuxIconDesktopMac {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#desktop-mac`}></use>
      </svg>
    );
  }
}
