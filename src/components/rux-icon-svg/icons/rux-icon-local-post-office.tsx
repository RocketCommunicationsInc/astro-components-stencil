import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/local-post-office.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-local-post-office',
  shadow: false,
})
export class RuxIconLocalPostOffice {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#local-post-office`}></use>
      </svg>
    );
  }
}
