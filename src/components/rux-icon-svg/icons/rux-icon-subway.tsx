import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/subway.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-subway',
  shadow: false,
})
export class RuxIconSubway {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#subway`}></use>
      </svg>
    );
  }
}
