import { Component, Host, Prop, h } from '@stencil/core';
import { Classification, Markings } from './rux-classification-marking.model'
@Component({
  tag: 'rux-classification-marking',
  styleUrl: 'rux-classification-marking.scss',
  shadow: true,
})  
  
export class RuxClassificationMarking {
  @Prop() classification: Classification = "unclassified"
  @Prop() label?: string 
  @Prop({ reflect: true }) tag: boolean = false

  get type(): 'tag' | 'banner' {
    return this.tag ? 'tag' : 'banner'
  }
  _getDisplayData() {
    const text = Markings[this.type][this.classification]
    if (!text) { return 'Select a Classification Marking'}
    return text
  }

  render() {
    return (
      <Host>
        <div>
          {this._getDisplayData()}
          {this.label}
        </div>
      </Host>
    );
  }
}




