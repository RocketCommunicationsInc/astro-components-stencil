import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/fingerprint.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-fingerprint',
  shadow: false,
})
export class RuxIconFingerprint {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#fingerprint`}></use>
      </svg>
    );
  }
}
