"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var XLSX = require('xlsx');

var ExcelReader =
/*#__PURE__*/
function () {
  function ExcelReader() {
    _classCallCheck(this, ExcelReader);
  }

  _createClass(ExcelReader, [{
    key: "read_from_excel",
    value: function read_from_excel(sheetName, filePath) {
      var workbook = XLSX.readFile(filePath);
      var worksheet = workbook.Sheets[sheetName];
      return XLSX.utils.sheet_to_json(worksheet);
    }
  }]);

  return ExcelReader;
}();

module.exports = new ExcelReader();