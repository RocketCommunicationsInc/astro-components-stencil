import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/exit-to-app.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-exit-to-app',
  shadow: false,
})
export class RuxIconExitToApp {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#exit-to-app`}></use>
      </svg>
    );
  }
}
