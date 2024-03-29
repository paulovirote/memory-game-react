import { transparentize } from 'polished';

export const COLORS = Object.freeze({
  transparent: 'rgba(0,0,0,0)',
  black: '#000000',
  white: '#ffffff',
  blue: '#007bff',
  indigo: '#6610f2',
  purple: '#6f42c1',
  pink: '#e83e8c',
  red: '#dc3545',
  orange: '#fd7e14',
  yellow: '#ffc107',
  green: '#28a745',
  teal: '#20c997',
  cyan: '#17a2b8',
  gray100: '#f8f9fa',
  gray200: '#e9ecef',
  gray300: '#dee2e6',
  gray400: '#ced4da',
  gray500: '#adb5bd',
  gray600: '#6c757d',
  gray700: '#495057',
  gray800: '#343a40',
  gray900: '#212529',
});

export const TRANSPARENT_BLACK = Object.freeze({
  soft: transparentize(0.8, COLORS.black),
  normal: transparentize(0.5, COLORS.black),
  hard: transparentize(0.3, COLORS.black),
});
