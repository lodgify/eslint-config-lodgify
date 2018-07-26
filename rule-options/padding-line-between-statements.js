module.exports = [
  { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
  {
    blankLine: 'any',
    prev: ['const', 'let', 'var'],
    next: ['const', 'let', 'var'],
  },
];
