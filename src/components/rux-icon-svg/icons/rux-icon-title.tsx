import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/title.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-title',
  shadow: false,
})
export class RuxIconTitle {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#title`}></use>
      </svg>
    );
  }
}
