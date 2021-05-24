import { Component, Host, Prop, h } from '@stencil/core';

export type Classification =
    | "controlled"
    | "confidential"
    | "secret"
    | "top-secret"
    | "top-secret-sci"
    | "unclassified";

@Component({
  tag: 'rux-classification-marking',
  styleUrl: 'rux-classification-marking.scss',
  shadow: true,
})  
  
export class RuxClassificationMarking {
  @Prop() classification: Classification = "unclassified"
  @Prop() label: string 
  @Prop({ reflect: true }) tag: boolean = false

  _getDisplayData() {
    const displayData = { text: '', label: this.label }
    
    if (!this.tag) {
      switch (this.classification) {
        case "controlled":
          displayData.text = "cui"
          break;
        case "confidential":
          displayData.text = "confidential"
          break;
        case "secret":
          displayData.text = "secret"
          break;
        case "top-secret":
          displayData.text = "top secret"
          break;
        case "top-secret-sci":
          displayData.text = "top secret//sci"
          break;
        case "unclassified":
          displayData.text = "unclassified"
          break;
        default:
          displayData.text = "Select a Classification Marking"
          break;
      }
    }

    if (this.tag) {
      switch (this.classification) {
        case "controlled":
          displayData.text = "cui"
          break;
        case "confidential":
          displayData.text = "c"
          break;
        case "secret":
          displayData.text = "s"
          break;
        case "top-secret":
          displayData.text = "ts"
          break;
        case "top-secret-sci":
          displayData.text = "TS//SCI"
          break;
        case "unclassified":
          displayData.text = "u"
          break;
        default:
          displayData.text = "Select a Classification Marking"
          break;
      }
    }

    return displayData
  }

  render() {
    const {text, label} = this._getDisplayData()

    return (
      <Host>
        <div>
          {text}
          {label}
        </div>
      </Host>
    );
  }
}




