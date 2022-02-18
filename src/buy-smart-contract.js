import WertWidget from '@wert-io/widget-initializer';
import { signSmartContractData } from '@wert-io/widget-sc-signer';
import { v4 as uuidv4 } from 'uuid';

import { Buffer } from 'buffer/';

window.Buffer = Buffer; // needed to use `signSmartContractData` in browser

/* We advise you not to use the private key on the frontend
    It is used here for example only
*/
const privateKey = '0x687079c151720e44c97b40c00ac257699fa4fc2c96ef617d964113c059dafe3d';
const signedData = signSmartContractData({
  address: '0xCe9499b23a087d2494956C33a064E075EC23dafc',
  commodity: 'ETH',
  commodity_amount: '0.01',
  pk_id: '0x57466afb5491ee372b3b30d82ef7e7a0583c9e36aef0f02435bd164fe172b1d3',
  sc_address: '0xC545CEae428785a5AE77bfF262600deC7F7d76d2',
  sc_id: uuidv4(), // must be unique for any request
  sc_input_data: '0x9dae76ea000000000000000000000000000000000000000000000000000000000000003700000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001',
}, privateKey);
/*
  useBurner(55,1,1)
*/
const otherWidgetOptions = {
  partner_id: '01FFHQR89W38Y9VBK02V0A0D8H',
  container_id: 'widget',
  click_id: uuidv4(), // unique id of purhase in your system
  origin: 'https://sandbox.wert.io', // this option needed only for this example to work
  width: 400,
  height: 600,
};

const wertWidget = new WertWidget({
  ...signedData,
  ...otherWidgetOptions,
});

wertWidget.mount();
