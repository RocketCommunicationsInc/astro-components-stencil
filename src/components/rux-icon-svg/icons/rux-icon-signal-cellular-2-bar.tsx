import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/signal-cellular-2-bar.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-signal-cellular-2-bar',
  shadow: false,
})
export class RuxIconSignalCellular2Bar {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#signal-cellular-2-bar`}></use>
      </svg>
    );
  }
}
