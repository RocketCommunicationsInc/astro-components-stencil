import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/stop.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-stop',
  shadow: false,
})
export class RuxIconStop {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#stop`}></use>
      </svg>
    );
  }
}
