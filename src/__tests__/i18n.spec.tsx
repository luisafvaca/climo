import { describe, it, expect, vi } from "vitest";

describe("i18n", () => {
  vi.mock('i18next', () => ({
      use: () => ({ 
          t: () => 'text',
      }),
      init: () => {},
  }));
  vi.mock('react-i18next', () => ({
    initReactI18next: () => ({ t: () => 'text' }),
  }));
});
