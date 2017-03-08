var assert = require('chai').assert;
var should = require('chai').should();
var gs     = require('../index');

describe('gs', function () {

  describe('#batch', function () {
    it('set batch option', function (done) {
      assert.deepEqual(gs().batch().options, ['-dBATCH']);
      done();
    });
  });

  describe('#input', function () {
    it('set input file', function (done) {
      assert.deepEqual(gs().input('file')._input, 'file');
      done();
    });
  });

  describe('#filterText', function () {
    it('set filterText', function (done) {
      assert.deepEqual(gs().filterText().options, ['-dFILTERTEXT']);
      done();
    });
  });

  describe('#filterImage', function () {
    it('set filterImage', function (done) {
      assert.deepEqual(gs().filterImage().options, ['-dFILTERIMAGE']);
      done();
    });
  });

  describe('#filterVector', function () {
    it('set filterVector', function (done) {
      assert.deepEqual(gs().filterVector().options, ['-dFILTERVECTOR']);
      done();
    });
  });

  describe('#fixedMedia', function () {
    it('set fixedMedia', function (done) {
      assert.deepEqual(gs().fixedMedia().options, ['-dFIXEDMEDIA']);
      done();
    });
  });

  describe('#pdfFitPage', function () {
    it('set pdfFitPage', function (done) {
      assert.deepEqual(gs().pdfFitPage().options, ['-dPDFFitPage']);
      done();
    });
  });

  describe('#device', function () {
      it('set device', function (done) {
        assert.deepEqual(gs().device().options, ['-sDEVICE=pdfwrite']);
        done();
      });

      it('set device option with value', function (done) {
        assert.deepEqual(gs().device('png').options, ['-sDEVICE=png']);
        done();
      });
  });

  describe('#compatibilityLevel', function () {
      it('set compatibilityLevel', function (done) {
        assert.deepEqual(gs().compatibilityLevel().options, ['-dCompatibilityLevel=1.4']);
        done();
      });

      it('set compatibilityLevel option with value', function (done) {
        assert.deepEqual(gs().compatibilityLevel('1.5').options, ['-dCompatibilityLevel=1.5']);
        done();
      });
  });

  describe('#deviceSizePoints', function () {
      it('set deviceSizePoints', function (done) {
        assert.deepEqual(gs().deviceSizePoints().options, []);
        done();
      });

      it('set deviceSizePoints option with width', function (done) {
        assert.deepEqual(gs().deviceSizePoints(960).options, ['-dDEVICEWIDTHPOINTS=960']);
        done();
      });

      it('set deviceSizePoints option with height', function (done) {
        assert.deepEqual(gs().deviceSizePoints(null, 1280).options, ['-dDEVICEHEIGHTPOINTS=1280']);
        done();
      });

      it('set deviceSizePoints option with width and height', function (done) {
        assert.deepEqual(gs().deviceSizePoints(960, 1280).options, ['-dDEVICEWIDTHPOINTS=960', '-dDEVICEHEIGHTPOINTS=1280']);
        done();
      });
  });

  describe('#output', function () {
    it('set output', function (done) {
      assert.deepEqual(gs().output('file').options, ['-sOutputFile=file']);
      done();
    });
  });

  describe('#quiet', function () {
    it('set quiet', function (done) {
      assert.deepEqual(gs().quiet().options, ['-dQUIET']);
      done();
    });
  });

});
