module.exports = {
  name: 'message-bus',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/message-bus',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
