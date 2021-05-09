import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/http.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-http',
  shadow: false,
})
export class RuxIconHttp {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#http`}></use>
      </svg>
    );
  }
}
