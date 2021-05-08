import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/child-care.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-child-care',
  shadow: false,
})
export class RuxIconChildCare {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#child-care`}></use>
      </svg>
    );
  }
}
