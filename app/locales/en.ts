import type { LocaleType } from "./index";

const en: LocaleType = {
  WIP: "WIP...",
  Error: {
    Unauthorized:
      "If there is no authorization code, please contact wechat icando12138 Remarks Authorization code to get a free authorization code. The validity period of the authorization code is three days. If you think it is OK to use, please support the developer",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} messages`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} messages with ChatGPT`,
    Actions: {
      ChatList: "Go To Chat List",
      CompressedHistory: "Compressed History Memory Prompt",
      Export: "Export All Messages as Markdown",
      Copy: "Copy",
      Stop: "Stop",
      Retry: "Retry",
    },
    Typing: "Typing…",
    Input: (submitKey: string) =>
      `Type something and press ${submitKey} to send`,
    Send: "Send",
  },
  Export: {
    Title: "All Messages",
    Copy: "Copy All",
    Download: "Download",
  },
  Memory: {
    Title: "Memory Prompt",
    EmptyContent: "Nothing yet.",
    Copy: "Copy All",
  },
  Home: {
    NewChat: "New Chat",
    DeleteChat: "Confirm to delete the selected conversation?",
  },
  Settings: {
    Title: "Settings",
    SubTitle: "All Settings",
    Actions: {
      ClearAll: "Clear All Data",
      ResetAll: "Reset All Settings",
      Close: "Close",
    },
    Lang: {
      Name: "语言",
      Options: {
        cn: "中文",
        en: "English",
      },
    },
    Avatar: "Avatar",
    Update: {
      Version: (x: string) => `Version: ${x}`,
      IsLatest: "Latest version",
      CheckUpdate: "Check Update",
      IsChecking: "Checking update...",
      FoundUpdate: (x: string) => `Found new version: ${x}`,
      GoToUpdate: "Update",
    },
    SendKey: "Send Key",
    Theme: "Theme",
    TightBorder: "Tight Border",
    HistoryCount: {
      Title: "Attached Messages Count",
      SubTitle: "Number of sent messages attached per request",
    },
    CompressThreshold: {
      Title: "History Compression Threshold",
      SubTitle:
        "Will compress if uncompressed messages length exceeds the value",
    },
    Token: {
      Title: "API Key",
      SubTitle: "Use your key to ignore access code limit",
      Placeholder: "OpenAI API Key",
    },
    AccessCode: {
      Title: "Access Code",
      SubTitle: "Access control enabled",
      Placeholder: "Need Access Code",
    },
    Model: "Model",
    Temperature: {
      Title: "Temperature",
      SubTitle: "A larger value makes the more random output",
    },
    MaxTokens: {
      Title: "Max Tokens",
      SubTitle: "Maximum length of input tokens and generated tokens",
    },
    PresencePenlty: {
      Title: "Presence Penalty",
      SubTitle:
        "A larger value increases the likelihood to talk about new topics",
    },
  },
  Store: {
    DefaultTopic: "New Conversation",
    BotHello: "Hello! How can I assist you today?",
    Error: "Error, please contact developer icando12138",
    Prompt: {
      History: (content: string) =>
        "This is a summary of the chat history between the AI and the user as a recap: " +
        content,
      Topic:
        "Provide a brief topic of the sentence without explanation. If there is no topic, return 'Chitchat'.",
      Summarize:
        "Summarize our discussion briefly in 50 characters or less to use as a prompt for future context.",
    },
    ConfirmClearAll: "Confirm to clear all chat and setting data?",
  },
  Copy: {
    Success: "Copied to clipboard",
    Failed: "Copy failed, please grant clipboard permission, can not solve please contact the developer icando12138",
  },
};

export default en;
