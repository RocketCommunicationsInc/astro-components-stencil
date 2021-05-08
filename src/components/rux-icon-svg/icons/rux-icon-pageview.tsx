import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/pageview.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-pageview',
  shadow: false,
})
export class RuxIconPageview {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#pageview`}></use>
      </svg>
    );
  }
}
