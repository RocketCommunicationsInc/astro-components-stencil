import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/spellcheck.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-spellcheck',
  shadow: false,
})
export class RuxIconSpellcheck {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#spellcheck`}></use>
      </svg>
    );
  }
}
