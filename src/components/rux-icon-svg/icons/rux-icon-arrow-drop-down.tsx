import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/arrow-drop-down.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-arrow-drop-down',
  shadow: false,
})
export class RuxIconArrowDropDown {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#arrow-drop-down`}></use>
      </svg>
    );
  }
}
