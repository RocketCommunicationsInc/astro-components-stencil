import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/pages.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-pages',
  shadow: false,
})
export class RuxIconPages {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#pages`}></use>
      </svg>
    );
  }
}
