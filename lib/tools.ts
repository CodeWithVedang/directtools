export interface Faq {
  q: string;
  a: string;
}

export type ToolIconName = 'file' | 'text' | 'screen' | 'webcam' | 'call';

export interface Tool {
  slug: string;
  name: string;
  url: string;
  icon: ToolIconName;
  /** What the person wants to do, in their words. Used in the picker. */
  goal: string;
  /** One short line under the goal. */
  goalHint: string;
  headline: string;
  summary: string;
  seoTitle: string;
  seoDescription: string;
  features: Array<{ title: string; text: string }>;
  useCases: string[];
  steps: string[];
  faqs: Faq[];
}

export const TOOLS: Tool[] = [
  {
    slug: 'file-share',
    name: 'DirectFileShare',
    url: 'https://directfileshare.vercel.app',
    icon: 'file',
    goal: 'Send a file',
    goalHint: 'Any size, straight to the other device',
    headline: 'Send any file to another device. No upload, no account.',
    summary:
      'Pair two browsers with a six-character code and the file travels directly between them over an encrypted connection. Nothing is stored on a server.',
    seoTitle: 'DirectFileShare: Send Files Device to Device, No Upload',
    seoDescription:
      'Send files of any size from one device to another with a six-character code. Peer-to-peer and encrypted, with no upload, no account and no size cap. Free.',
    features: [
      { title: 'No upload step', text: 'The file goes from your device to theirs. It never waits on a server first, so large files start moving at once.' },
      { title: 'Encrypted in transit', text: 'WebRTC encrypts the connection end to end between the two browsers.' },
      { title: 'Works across devices', text: 'Phone to laptop, laptop to tablet, any modern browser. Nothing to install.' },
      { title: 'Nothing left behind', text: 'Close the tab and the transfer is gone. There is no link to expire and no copy to delete.' },
    ],
    useCases: ['Move photos from a phone to a laptop', 'Send a large video without email limits', 'Hand a document to a colleague in the same room', 'Transfer files between your own devices'],
    steps: ['Open DirectFileShare on both devices', 'Type the six-character code, or scan the QR', 'Pick a file and send it'],
    faqs: [
      { q: 'Is there a file size limit?', a: 'No limit is set by DirectFileShare. The file streams between the two devices, so the practical limit is what both devices can handle.' },
      { q: 'Are my files stored anywhere?', a: 'No. Files go directly between the two browsers. There is no server copy.' },
    ],
  },
  {
    slug: 'text-share',
    name: 'DirectTextShare',
    url: 'https://directtextshare.vercel.app',
    icon: 'text',
    goal: 'Send text or a link',
    goalHint: 'Paste on one device, read on the other',
    headline: 'Move text and links between devices in seconds.',
    summary:
      'Open a private channel with a six-character code and send messages both ways. Good for passwords you need once, long links and copied snippets.',
    seoTitle: 'DirectTextShare: Send Text and Links Between Devices',
    seoDescription:
      'Send text, links and snippets between your devices with a six-character code. Peer-to-peer, encrypted, no account and no history stored. Free.',
    features: [
      { title: 'Two-way messages', text: 'Both devices can send and receive, so you can reply without pairing again.' },
      { title: 'No history on a server', text: 'Messages move directly between the browsers. Nothing is saved for later.' },
      { title: 'Safe with links', text: 'Received links are shown as text. They are never opened for you.' },
      { title: 'Instant start', text: 'No sign-up and no app. Open the page and enter the code.' },
    ],
    useCases: ['Send a link from your laptop to your phone', 'Pass a one-time code to another device', 'Copy a long snippet without a chat app', 'Share notes in a meeting room'],
    steps: ['Open DirectTextShare on both devices', 'Enter the six-character code, or scan the QR', 'Type or paste, then send'],
    faqs: [
      { q: 'Can I send links?', a: 'Yes. Links arrive as plain text. You choose whether to open them.' },
      { q: 'Is there a message history?', a: 'No. Messages are not stored on a server, and closing the tab ends the session.' },
    ],
  },
  {
    slug: 'screen-share',
    name: 'DirectScreenShare',
    url: 'https://directscreenshare.vercel.app',
    icon: 'screen',
    goal: 'Show my screen',
    goalHint: 'A window, a tab or the whole screen',
    headline: 'Show your screen to any device. No meeting link.',
    summary:
      'Share a screen, a window or a browser tab with another device using a six-character code. The video flows directly between the two browsers.',
    seoTitle: 'DirectScreenShare: Share Your Screen, No Account, No Link',
    seoDescription:
      'Share your screen, a window or a browser tab with another device using a six-character code. Peer-to-peer, encrypted, nothing stored. Free.',
    features: [
      { title: 'Pick what to show', text: 'Share the whole screen, one window or a single browser tab.' },
      { title: 'Low delay', text: 'Video goes straight to the viewer, with no relay server in the middle.' },
      { title: 'No account for viewers', text: 'The viewer opens the page and enters a code. That is all.' },
      { title: 'Private by design', text: 'The stream is encrypted and is not recorded or stored.' },
    ],
    useCases: ['Show a slide deck on a second device', 'Help a family member with their computer', 'Demo a project to a teammate', 'Watch your laptop screen on your phone'],
    steps: ['Open DirectScreenShare on both devices', 'Enter the six-character code, or scan the QR', 'Choose what to share and start'],
    faqs: [
      { q: 'Can I share just one window?', a: 'Yes. Your browser asks whether to share a screen, a window or a tab.' },
      { q: 'Is the stream recorded?', a: 'No. The video is sent directly between the two browsers and is not stored.' },
    ],
  },
  {
    slug: 'webcam',
    name: 'DirectWebcam',
    url: 'https://directwebcam.vercel.app',
    icon: 'webcam',
    goal: 'Use my phone as a webcam',
    goalHint: 'Also scans documents back to the laptop',
    headline: 'Turn your phone into a webcam and document scanner.',
    summary:
      'Scan a QR code on the laptop and the phone camera streams to it. You can also send full-resolution photos and document scans back. No app needed.',
    seoTitle: 'DirectWebcam: Use Your Phone as a Webcam and Scanner',
    seoDescription:
      'Use your phone as a webcam and document scanner for any computer. Scan a QR, no app, no account. Peer-to-peer, nothing uploaded. Free.',
    features: [
      { title: 'No app to install', text: 'The phone opens a web page. The laptop opens another. They connect.' },
      { title: 'Better than a built-in camera', text: 'Phone cameras are usually sharper than laptop webcams, and you can place them anywhere.' },
      { title: 'Scan documents', text: 'Send full-resolution photos and document scans straight to the computer.' },
      { title: 'Direct and private', text: 'Video and photos go device to device and are not uploaded.' },
    ],
    useCases: ['Use a phone as a better webcam for calls', 'Scan a paper form to your laptop', 'Show a whiteboard or desk from above', 'Add a second camera angle'],
    steps: ['Open DirectWebcam on the laptop and show the QR', 'Scan it with the phone and allow the camera', 'Stream, or capture and send a photo'],
    faqs: [
      { q: 'Do I need to install an app?', a: 'No. Both devices use a normal browser.' },
      { q: 'Can I send photos back?', a: 'Yes. The phone can send full-resolution photos and document scans to the computer.' },
    ],
  },
  {
    slug: 'call',
    name: 'DirectCall',
    url: 'https://directcall.vercel.app',
    icon: 'call',
    goal: 'Make a video call',
    goalHint: 'One to one, with a code instead of a link',
    headline: 'Call anyone with a code. No account, no meeting link.',
    summary:
      'Start a private one-to-one voice or video call. Share a six-character code, and audio and video flow directly over an encrypted connection.',
    seoTitle: 'DirectCall: Free 1:1 Video Calls, No Account, No Link',
    seoDescription:
      'Start a private one-to-one voice or video call with a six-character code. Peer-to-peer WebRTC, encrypted, nothing recorded or stored. Free.',
    features: [
      { title: 'Code instead of a link', text: 'Say the code out loud or scan the QR. There is nothing to schedule.' },
      { title: 'Voice or video', text: 'Join with camera and microphone, or audio only if you prefer.' },
      { title: 'Encrypted and direct', text: 'Media flows between the two browsers. It is not recorded or stored.' },
      { title: 'Mute, flip and hang up', text: 'The controls you expect, with a clear indicator when the other side is muted.' },
    ],
    useCases: ['Quick call with a friend or relative', 'Private talk without creating accounts', 'Check in with a client in one tap', 'Test your camera and microphone with someone'],
    steps: ['Open DirectCall and choose Start a call', 'Share the six-character code or QR', 'Your guest joins and the call begins'],
    faqs: [
      { q: 'Does the other person need an account?', a: 'No. They open the page, enter the code and join.' },
      { q: 'Can more than two people join?', a: 'No. DirectCall is built for private one-to-one calls.' },
    ],
  },
];

export function getTool(slug: string): Tool | undefined {
  return TOOLS.find((t) => t.slug === slug);
}

export const SHARED_FAQS: Faq[] = [
  { q: 'What is DirectTools?', a: 'DirectTools is a family of five free web tools for sharing files, text, screens, cameras and calls directly between two devices. Each tool pairs with a six-character code.' },
  { q: 'Do I need an account?', a: 'No. None of the tools asks you to sign up, log in or give an email address.' },
  { q: 'How are the tools different from file or call services I already use?', a: 'Data goes directly between the two devices over an encrypted WebRTC connection. There is no upload to a server and nothing stored afterwards.' },
  { q: 'Is it really free?', a: 'Yes. All five tools are free to use.' },
  { q: 'Which devices and browsers work?', a: 'Any modern browser on a phone, tablet or computer. There is nothing to install.' },
  { q: 'How do the two devices find each other?', a: 'One device shows a six-character code or QR. The other enters it. A lightweight broker swaps the pairing details, then the devices talk directly.' },
  { q: 'Is my data private?', a: 'Your content travels directly between the two browsers, encrypted. We run no database and no accounts, and we do not use advertising trackers.' },
  { q: 'Which tool should I start with?', a: 'Use DirectFileShare for files, DirectTextShare for text and links, DirectScreenShare to show a screen, DirectWebcam for a phone camera, and DirectCall for a video call.' },
];
