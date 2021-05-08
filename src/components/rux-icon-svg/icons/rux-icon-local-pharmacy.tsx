import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/local-pharmacy.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-local-pharmacy',
  shadow: false,
})
export class RuxIconLocalPharmacy {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#local-pharmacy`}></use>
      </svg>
    );
  }
}
