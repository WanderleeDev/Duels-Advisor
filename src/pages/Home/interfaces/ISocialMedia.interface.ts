export interface ISocialMedia {
  [key: string]: string;
  github: string;
  linkedin: string;
  mail: string;
}

export enum SocialMedia {
  github = "github",
  linkedin = "linkedin",
  mail = "mail"
}