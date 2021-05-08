import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/translate.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-translate',
  shadow: false,
})
export class RuxIconTranslate {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#translate`}></use>
      </svg>
    );
  }
}
