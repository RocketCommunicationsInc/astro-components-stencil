import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/arrow-drop-down-circle.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-arrow-drop-down-circle',
  shadow: false,
})
export class RuxIconArrowDropDownCircle {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#arrow-drop-down-circle`}></use>
      </svg>
    );
  }
}
