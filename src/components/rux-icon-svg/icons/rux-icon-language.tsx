import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/language.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-language',
  shadow: false,
})
export class RuxIconLanguage {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#language`}></use>
      </svg>
    );
  }
}
