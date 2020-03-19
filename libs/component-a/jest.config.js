module.exports = {
  name: 'component-a',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/component-a',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
