import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/check-circle-outline.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-check-circle-outline',
  shadow: false,
})
export class RuxIconCheckCircleOutline {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#check-circle-outline`}></use>
      </svg>
    );
  }
}
