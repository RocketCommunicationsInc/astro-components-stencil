import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/hearing.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-hearing',
  shadow: false,
})
export class RuxIconHearing {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#hearing`}></use>
      </svg>
    );
  }
}
