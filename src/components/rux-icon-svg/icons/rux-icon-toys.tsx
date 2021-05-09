import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/toys.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-toys',
  shadow: false,
})
export class RuxIconToys {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#toys`}></use>
      </svg>
    );
  }
}
