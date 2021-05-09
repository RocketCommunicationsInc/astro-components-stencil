import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/layers-clear.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-layers-clear',
  shadow: false,
})
export class RuxIconLayersClear {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#layers-clear`}></use>
      </svg>
    );
  }
}
