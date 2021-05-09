import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/phonelink.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-phonelink',
  shadow: false,
})
export class RuxIconPhonelink {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#phonelink`}></use>
      </svg>
    );
  }
}
