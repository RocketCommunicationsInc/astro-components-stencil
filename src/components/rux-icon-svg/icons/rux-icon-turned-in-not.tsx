import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/turned-in-not.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-turned-in-not',
  shadow: false,
})
export class RuxIconTurnedInNot {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#turned-in-not`}></use>
      </svg>
    );
  }
}
