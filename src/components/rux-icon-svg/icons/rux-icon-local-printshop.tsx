import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/local-printshop.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-local-printshop',
  shadow: false,
})
export class RuxIconLocalPrintshop {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#local-printshop`}></use>
      </svg>
    );
  }
}
