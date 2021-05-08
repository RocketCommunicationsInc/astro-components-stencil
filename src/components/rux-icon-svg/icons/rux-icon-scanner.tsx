import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/scanner.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-scanner',
  shadow: false,
})
export class RuxIconScanner {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#scanner`}></use>
      </svg>
    );
  }
}
