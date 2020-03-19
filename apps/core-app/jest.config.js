module.exports = {
  name: 'core-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/core-app',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
