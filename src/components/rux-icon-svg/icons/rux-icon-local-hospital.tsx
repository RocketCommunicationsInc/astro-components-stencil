import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/local-hospital.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-local-hospital',
  shadow: false,
})
export class RuxIconLocalHospital {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#local-hospital`}></use>
      </svg>
    );
  }
}
