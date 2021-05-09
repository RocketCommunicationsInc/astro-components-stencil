import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/web.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-web',
  shadow: false,
})
export class RuxIconWeb {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#web`}></use>
      </svg>
    );
  }
}
