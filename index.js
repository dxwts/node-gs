var exec = require('child_process').exec;


var gs = function() {
  this.options = [];
  this._input = null;
}

gs.prototype.batch = function() {
  this.options.push('-dBATCH');
  return this;
};

gs.prototype.device = function (device) {
  device = device || 'pdfwrite';
  this.options.push(`-sDEVICE=${device}`);
  return this;
};

gs.prototype.input = function (file) {
  this._input = file;
  return this
};

gs.prototype.filterText = function () {
  this.options.push('-dFILTERTEXT');
  return this;
}

gs.prototype.filterImage = function () {
  this.options.push('-dFILTERIMAGE');
  return this;
}

gs.prototype.filterVector = function () {
  this.options.push('-dFILTERVECTOR');
  return this;
}

gs.prototype.fixedMedia = function () {
  this.options.push('-dFIXEDMEDIA');
  return this;
}

gs.prototype.pdfFitPage = function () {
  this.options.push('-dPDFFitPage');
  return this;
}

gs.prototype.compatibilityLevel = function (level) {
  level = level || 1.4;
  this.options.push(`-dCompatibilityLevel=${level}`);
  return this;
}

gs.prototype.deviceSizePoints = function (width, height) {
  if (width) {
    this.options.push(`-dDEVICEWIDTHPOINTS=${width}`);
  }
  if (height) {
    this.options.push(`-dDEVICEHEIGHTPOINTS=${height}`);
  }
  return this;
}

gs.prototype.output = function(file) {
  file = file || '-';
  this.options.push(`-sOutputFile=${file}`);
  if (file === '-') return this.quiet();
  return this;
};

gs.prototype.quiet = function() {
  this.options.push('-dQUIET');
  return this;
};

gs.prototype.exec = function (callback) {
  var self = this;
  if (!this._input) {
    callback("Please specify input");
  }

  var args = this.options.concat([this._input]).join(' ');
  exec('gs ' + args, function (err, stdout, stderr) {
    callback(err, stdout, stderr);
  });
};

module.exports = exports = function () {
  return new gs();
};
