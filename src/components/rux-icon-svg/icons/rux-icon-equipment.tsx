import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/equipment.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-equipment',
  shadow: false,
})
export class RuxIconEquipment {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#equipment`}></use>
      </svg>
    );
  }
}
