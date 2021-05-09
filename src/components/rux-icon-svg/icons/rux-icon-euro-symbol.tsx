import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/euro-symbol.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-euro-symbol',
  shadow: false,
})
export class RuxIconEuroSymbol {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#euro-symbol`}></use>
      </svg>
    );
  }
}
