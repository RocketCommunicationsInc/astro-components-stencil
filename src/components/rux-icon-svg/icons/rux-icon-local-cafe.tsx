import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/local-cafe.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-local-cafe',
  shadow: false,
})
export class RuxIconLocalCafe {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#local-cafe`}></use>
      </svg>
    );
  }
}
