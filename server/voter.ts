/* Client-side voter funcionality */
import { VoterFingerprint, VoterMessage, Vote, FrameworkTitle } from "./types";

const url = document.URL.split(".");
const subDomain = url[1]; // circle back to work on getting subdomain
const ws = new WebSocket(`ws://localhost:8000/`);

// function getVoter() {
//   const data = localStorage.getItem('voter');
//   if (data === null) {
//     // create voter
//   } else {
//     // else combine stashed data with new fingerprint data and send
//     const fingerprint = {
//       userAgent: "",
//       screen: {
//         width: window.screen.width,
//         height: window.screen.height,
//       };
//       timezone: Intl.DateTimeFormat().resolvedOptions().timeZone;
//     };
//     return new Voter(
//       ...fingerprint,
//       ...data
//     );
//   }
// }

class Voter {
  userId: string;
  constructor(userId: string) {
    this.userId = userId;
  }

  /** Sends ws message to add vote to given framework */
  castVote(framework: FrameworkTitle) {
    this._sendMessage({ framework });
  }

  /** Accepts a JSON serializable object and sends to server */
  _sendMessage(data: Object) {
    ws.send(JSON.stringify(data));
  }
}