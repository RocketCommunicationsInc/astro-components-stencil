import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/tonality.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-tonality',
  shadow: false,
})
export class RuxIconTonality {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#tonality`}></use>
      </svg>
    );
  }
}
