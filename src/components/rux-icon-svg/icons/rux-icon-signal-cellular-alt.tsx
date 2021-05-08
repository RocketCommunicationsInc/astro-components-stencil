import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/signal-cellular-alt.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-signal-cellular-alt',
  shadow: false,
})
export class RuxIconSignalCellularAlt {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#signal-cellular-alt`}></use>
      </svg>
    );
  }
}
