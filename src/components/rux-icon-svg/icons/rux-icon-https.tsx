import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/https.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-https',
  shadow: false,
})
export class RuxIconHttps {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#https`}></use>
      </svg>
    );
  }
}
