import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/touch-app.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-touch-app',
  shadow: false,
})
export class RuxIconTouchApp {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#touch-app`}></use>
      </svg>
    );
  }
}
