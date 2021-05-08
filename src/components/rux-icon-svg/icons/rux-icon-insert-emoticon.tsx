import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/insert-emoticon.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-insert-emoticon',
  shadow: false,
})
export class RuxIconInsertEmoticon {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#insert-emoticon`}></use>
      </svg>
    );
  }
}
