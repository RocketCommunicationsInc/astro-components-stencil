import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/signal-cellular-3-bar.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-signal-cellular-3-bar',
  shadow: false,
})
export class RuxIconSignalCellular3Bar {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#signal-cellular-3-bar`}></use>
      </svg>
    );
  }
}
