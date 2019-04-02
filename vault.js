'use strict';
module.exports = function() {
  let vaultObj = {};

  function setValue(key, value){
    if(!key || !value){
      return null;
    }
    vaultObj.key = value;
    return value;
  }

  function getValue(key){
    if(!vaultObj.key){
      return null;
    } else {
      return vaultObj.key;
    }
  }

  return {
    setValue: setValue,
    getValue: getValue
  }
};