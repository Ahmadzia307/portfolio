import { useEffect, useState } from 'react';
import type { Mode } from './theme';

export type ThemeSetting = 'light' | 'dark' | 'system';

const STORAGE_KEY = 'theme';

function getStoredSetting(): ThemeSetting {
  const v = localStorage.getItem(STORAGE_KEY);
  return v === 'light' || v === 'dark' || v === 'system' ? v : 'system';
}

function getSystemMode(): Mode {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/**
 * Three-way theme control: the user picks Light, Dark, or System.
 * "System" follows the OS preference and updates live when it changes.
 * The chosen setting is persisted; the *resolved* mode is what the theme uses.
 */
export function useThemeMode() {
  // Read synchronously on first render so there's no flash of the wrong theme.
  const [setting, setSettingState] = useState<ThemeSetting>(getStoredSetting);
  const [systemMode, setSystemMode] = useState<Mode>(getSystemMode);

  // Keep tracking the OS preference for when the setting is "system".
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e: MediaQueryListEvent) => setSystemMode(e.matches ? 'dark' : 'light');
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const setSetting = (next: ThemeSetting) => {
    setSettingState(next);
    localStorage.setItem(STORAGE_KEY, next);
  };

  const resolvedMode: Mode = setting === 'system' ? systemMode : setting;

  return { setting, setSetting, resolvedMode };
}
