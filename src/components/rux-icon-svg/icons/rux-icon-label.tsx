import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/label.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-label',
  shadow: false,
})
export class RuxIconLabel {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#label`}></use>
      </svg>
    );
  }
}
