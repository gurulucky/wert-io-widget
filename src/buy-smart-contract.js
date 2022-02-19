import WertWidget from '@wert-io/widget-initializer';
import { signSmartContractData } from '@wert-io/widget-sc-signer';
import { v4 as uuidv4 } from 'uuid';

import { Buffer } from 'buffer/';

window.Buffer = Buffer; // needed to use `signSmartContractData` in browser

/* We advise you not to use the private key on the frontend
    It is used here for example only
*/
const privateKey = '0x57466afb5491ee372b3b30d82ef7e7a0583c9e36aef0f02435bd164fe172b1d3';
const signedData = signSmartContractData({
  address: '0xCe9499b23a087d2494956C33a064E075EC23dafc',
  commodity: 'ETH',
  commodity_amount: '0.002',
  pk_id: 'key1',
  sc_address: '0xC545CEae428785a5AE77bfF262600deC7F7d76d2',
  sc_id: uuidv4(), // must be unique for any request
  sc_input_data: '0x9dae75ea000000000000000000000000000000000000000000000000000000000000003700000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001',
}, privateKey);
/*
  useBurner(55,1,1)
*/
// const privateKey = '0x57466afb5491ee372b3b30d82ef7e7a0583c9e36aef0f02435bd164fe172b1d3';
// const signedData = signSmartContractData({
//   address: '0xc5Da0445c213CF71E04ad5af2E14d7E9bF114f7E',
//   commodity: 'ETH:rinkeby',
//   commodity_amount: '0.01',
//   pk_id: 'key1',
//   sc_address: '0xfFA4683b9aC4aAD95416804f4cac0e23f527F63c',
//   sc_id: uuidv4(), // must be unique for any request
//   sc_input_data: '0x5768f27100000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000005968747470733a2f2f697066732e696e667572612e696f2f697066732f516d4e636f7558326a6e57474e6d336462724a6e6f73347a50446746756261327237726e537871427538596779342f6d65746164617461382e6a736f6e00000000000000000000000000000000000000000000000000000000000000000000000000005968747470733a2f2f697066732e696e667572612e696f2f697066732f516d5552426d544a6f795537393359695754463936515248783651324e7544724634624a31477562437a714553482f6d65746164617461392e6a736f6e00000000000000',
// }, privateKey);

const otherWidgetOptions = {
  partner_id: '01FVYDA33ED897FV5Q1VW55651',
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
