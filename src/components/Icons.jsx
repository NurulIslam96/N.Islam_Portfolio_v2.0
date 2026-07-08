const Icon = ({ path, size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {path}
  </svg>
);

export const IconGithub = (p) => (
  <Icon
    {...p}
    path={
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.7 2.8 5.6 3.1 5.6 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.2 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
    }
  />
);

export const IconLinkedin = (p) => (
  <Icon
    {...p}
    path={
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M7 10v7M7 7v.01M12 17v-4a2 2 0 1 1 4 0v4M12 13v4" />
      </>
    }
  />
);

export const IconFacebook = (p) => (
  <Icon {...p} path={<path d="M14 9h3V6h-3a3 3 0 0 0-3 3v2H9v3h2v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z" />} />
);

export const IconMail = (p) => (
  <Icon
    {...p}
    path={
      <>
        <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
        <path d="M3 6l9 7 9-7" />
      </>
    }
  />
);

export const IconPin = (p) => (
  <Icon
    {...p}
    path={
      <>
        <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    }
  />
);

export const IconPhone = (p) => (
  <Icon
    {...p}
    path={<path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v4a2 2 0 0 1-2 2C9.4 21 3 14.6 3 6a2 2 0 0 1 1-2z" />}
  />
);

export const IconArrow = (p) => (
  <Icon
    {...p}
    path={
      <>
        <path d="M5 12h14" />
        <path d="M13 6l6 6-6 6" />
      </>
    }
  />
);

export const IconDownload = (p) => (
  <Icon
    {...p}
    path={
      <>
        <path d="M12 3v12" />
        <path d="M7 10l5 5 5-5" />
        <path d="M5 21h14" />
      </>
    }
  />
);
