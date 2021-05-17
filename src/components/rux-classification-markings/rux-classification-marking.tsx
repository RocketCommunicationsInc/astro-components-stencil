import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'rux-classification-markings',
  styleUrl: 'rux-classification-markings.scss',
  shadow: true,
})
export class RuxClassificationMarking {
  @Prop() classification: string = "unclassified";
  @Prop({reflect: true}) tag: boolean = false
  @Prop() label: string = ""

  _slugFilter(label) {
        let slug = label.toLowerCase()

        slug = label
            .replace(/^\s+|\s+$/g, '') // trim
            .replace(/[^a-z0-9 -]/g, '') // remove invalid chars like //
            .replace(/\s+/g, '') // collapse whitespace
            .replace(/-+/g, '') // collapse dashes to whitespace

        return slug
  }
  
  _setClassificationMarking(marker) {
        const markingClass = this._slugFilter(this.classification)
        const markingLabel = this._slugFilter(marker)
        let bannerLabel
        let tagLabel
        let markingStyle

        if (markingClass == markingLabel) {
            switch (markingLabel) {
                case 'controlled':
                    bannerLabel = 'cui'
                    tagLabel = 'cui'
                    markingStyle = 'controlled'
                    break
                case 'confidential':
                    bannerLabel = 'confidential'
                    tagLabel = 'c'
                    markingStyle = 'confidential'
                    break
                case 'secret':
                    bannerLabel = 'secret'
                    tagLabel = 's'
                    markingStyle = 'secret'
                    break
                case 'topsecret':
                    bannerLabel = 'top secret'
                    tagLabel = 'ts'
                    markingStyle = 'top secret'
                    break
                case 'topsecretsci':
                    bannerLabel = 'top secret//sci'
                    tagLabel = 'TS//SCI'
                    markingStyle = 'top secret//sci'
                    break
                default:
                    bannerLabel = 'unclassified'
                    tagLabel = 'u'
                    markingStyle = 'unclassified'
            }
        } else {
            bannerLabel = 'Select a Classification Marking type'
            tagLabel = bannerLabel
        }

        const markingData = {
            label: bannerLabel,
            labelTag: tagLabel,
            style: markingStyle,
        }

        return markingData
    }

  render() {
    const classificationTag = this._setClassificationMarking(this.classification).labelTag
    const classificationLabel = this._setClassificationMarking(this.classification).label

    return (
      <Host>
        <div class="rux-classification-marking">
          {this.tag
            ? { classificationTag }
            : { classificationLabel }
          }
          {this.label}
        </div>
      </Host>
    );
  }

}




