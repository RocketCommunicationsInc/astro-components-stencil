export type Classification =
    | "controlled"
    | "confidential"
    | "secret"
    | "top-secret"
    | "top-secret-sci"
    | "unclassified";

export const Markings = {
    banner: {
        controlled: 'cui',
        confidential: 'confidential',
        secret: 'secret',
        'top-secret': 'top secret',
        'top-secret-sci': 'top secret//sci',
        unclassified: 'unclassified'
    },
    tag: {
        controlled: 'cui',
        confidential: 'c',
        secret: 's',
        'top-secret': 'ts',
        'top-secret-sci': 'TS//SCI',
        unclassified: 'u'
    }
    }