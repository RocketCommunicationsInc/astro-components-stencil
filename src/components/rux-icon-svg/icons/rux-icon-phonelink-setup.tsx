import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/phonelink-setup.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-phonelink-setup',
  shadow: false,
})
export class RuxIconPhonelinkSetup {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#phonelink-setup`}></use>
      </svg>
    );
  }
}
