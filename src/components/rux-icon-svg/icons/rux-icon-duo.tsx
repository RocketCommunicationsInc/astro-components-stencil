import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/duo.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-duo',
  shadow: false,
})
export class RuxIconDuo {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#duo`}></use>
      </svg>
    );
  }
}
