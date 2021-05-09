import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/rv-hookup.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-rv-hookup',
  shadow: false,
})
export class RuxIconRvHookup {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#rv-hookup`}></use>
      </svg>
    );
  }
}
