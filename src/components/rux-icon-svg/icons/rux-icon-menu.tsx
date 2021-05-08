import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/menu.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-menu',
  shadow: false,
})
export class RuxIconMenu {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#menu`}></use>
      </svg>
    );
  }
}
