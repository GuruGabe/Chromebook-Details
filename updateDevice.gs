function updateCB(sernum,ou,asset,location) {
  var serno = sernum;
  // Since we provided serial numbers, convert each to device-id
  var sernoquery = "id:" + serno;
  // Use AdminSDK API to check if the cros device exists. Else the update will fail
  var chromebooklist = AdminDirectory.Chromeosdevices.list('my_customer', { query: sernoquery }).chromeosdevices;
  if (!chromebooklist) {
  } else if (chromebooklist.length !== 1) {
  } else {
    var id = chromebooklist[0].deviceId;
    // For each line, try to update the device with given data, and log the result
    try {
      AdminDirectory.Chromeosdevices.update({ orgUnitPath:ou, annotatedAssetId:asset, annotatedLocation:location}, 'my_customer', id);
    } catch (err) {
      return [serno, "couldn't be updated", "#ffc90e"];
    }
  }
  return [serno];
}
