import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/mail-outline.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-mail-outline',
  shadow: false,
})
export class RuxIconMailOutline {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#mail-outline`}></use>
      </svg>
    );
  }
}
