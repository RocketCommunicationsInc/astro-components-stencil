import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/desktop-access-disabled.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-desktop-access-disabled',
  shadow: false,
})
export class RuxIconDesktopAccessDisabled {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#desktop-access-disabled`}></use>
      </svg>
    );
  }
}
