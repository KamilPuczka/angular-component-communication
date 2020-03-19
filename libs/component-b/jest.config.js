module.exports = {
  name: 'component-b',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/component-b',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
