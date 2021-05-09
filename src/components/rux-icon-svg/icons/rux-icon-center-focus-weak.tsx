import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/center-focus-weak.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-center-focus-weak',
  shadow: false,
})
export class RuxIconCenterFocusWeak {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#center-focus-weak`}></use>
      </svg>
    );
  }
}
