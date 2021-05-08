import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/dock.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-dock',
  shadow: false,
})
export class RuxIconDock {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#dock`}></use>
      </svg>
    );
  }
}
