import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/enhanced-encryption.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-enhanced-encryption',
  shadow: false,
})
export class RuxIconEnhancedEncryption {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#enhanced-encryption`}></use>
      </svg>
    );
  }
}
