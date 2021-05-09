import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/security.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-security',
  shadow: false,
})
export class RuxIconSecurity {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#security`}></use>
      </svg>
    );
  }
}
