import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/signal-cellular-off.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-signal-cellular-off',
  shadow: false,
})
export class RuxIconSignalCellularOff {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#signal-cellular-off`}></use>
      </svg>
    );
  }
}
