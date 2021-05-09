import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/signal-cellular-0-bar.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-signal-cellular-0-bar',
  shadow: false,
})
export class RuxIconSignalCellular0Bar {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#signal-cellular-0-bar`}></use>
      </svg>
    );
  }
}
