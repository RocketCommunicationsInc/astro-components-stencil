import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/delete-sweep.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-delete-sweep',
  shadow: false,
})
export class RuxIconDeleteSweep {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#delete-sweep`}></use>
      </svg>
    );
  }
}
