export const MESSAGE_LIMIT = 20;

export const ENVIRONMENT = {
  DEMO: "production",
  ALPHA: "alpha.xmtp.chat",
};

export const RecipientInputMode = {
  InvalidEntry: 0,
  FindingEntry: 1,
  Submitted: 2,
  NotOnNetwork: 3,
  OnNetwork: 4,
};

export const CONVERSATION_CACHE_VERSION = 1;

/* The number below 767 is to match tailwinds breakpoint for md that is of 768 */
export const TAILWIND_MD_BREAKPOINT = 767;

export const ALLOWED_ENS_SUFFIXES = [".eth", ".cb.id"];

export const ALLOWED_UNS_SUFFIXES = [
  ".crypto",
  ".bitcoin",
  ".blockchain",
  ".dao",
  ".nft",
  ".888",
  ".wallet",
  ".x",
  ".klever",
  ".zil",
  ".hi",
  ".kresus",
  ".polygon",
  ".anime",
  ".manga",
  ".binanceus",
];

export const XMTP_FEEDBACK_ADDRESS =
  "0x86f2aD57b59bb5BE8091A0a5fDBecb168b63cA17";

export const ATTACHMENT_ERRORS = {
  FILE_TOO_LARGE: "File too large",
};
