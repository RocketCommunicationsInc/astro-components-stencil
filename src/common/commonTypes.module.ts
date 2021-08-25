export type Status =
    | 'off'
    | 'standby'
    | 'normal'
    | 'caution'
    | 'serious'
    | 'critical'

export type Classification =
    | 'controlled'
    | 'confidential'
    | 'secret'
    | 'top-secret'
    | 'top-secret-sci'
    | 'unclassified'

export type TagType = 'tag1' | 'tag2' | 'tag3' | 'tag4'

export type StatusTypes = {
    [id: string]: boolean
}
