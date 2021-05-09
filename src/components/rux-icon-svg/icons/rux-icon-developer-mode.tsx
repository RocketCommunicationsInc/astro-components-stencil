import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/developer-mode.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-developer-mode',
  shadow: false,
})
export class RuxIconDeveloperMode {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#developer-mode`}></use>
      </svg>
    );
  }
}
