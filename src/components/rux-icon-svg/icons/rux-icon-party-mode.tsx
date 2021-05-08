import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/party-mode.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-party-mode',
  shadow: false,
})
export class RuxIconPartyMode {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#party-mode`}></use>
      </svg>
    );
  }
}
