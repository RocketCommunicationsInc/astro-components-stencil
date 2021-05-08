import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/ac-unit.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-ac-unit',
  shadow: false,
})
export class RuxIconAcUnit {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#ac-unit`}></use>
      </svg>
    );
  }
}
