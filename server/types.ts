export interface VoterMessage {
  userId: string;
  fingerprint: VoterFingerprint;
  vote: Vote;
}

export interface VoterFingerprint {
  userAgent: string;
  screenSize: string;
  language: string;
}

export interface Vote {
  id: string;
  userId: string;
  framework: FrameworkTitle;
  created_at: string;
  voteHistory: string;
}

export type FrameworkTitle =
  "none" |
  "react" |
  "solid" |
  "svelte" |
  "marko" |
  "htmx" |
  "astro" |
  "vue" |
  "angular" |
  "alpine" |
  "preact" |
  "quik" |
  "lit";