import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/signal-cellular-null.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-signal-cellular-null',
  shadow: false,
})
export class RuxIconSignalCellularNull {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#signal-cellular-null`}></use>
      </svg>
    );
  }
}
