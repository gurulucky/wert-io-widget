import WertWidget from '@wert-io/widget-initializer';
import { signSmartContractData } from '@wert-io/widget-sc-signer';
import { v4 as uuidv4 } from 'uuid';

import { Buffer } from 'buffer/';

window.Buffer = Buffer; // needed to use `signSmartContractData` in browser

/* We advise you not to use the private key on the frontend
    It is used here for example only
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const privateKey = '0x687079c151720e44c97b40c00ac257699fa4fc2c96ef617d964113c059dafe3d';
// const signedData = signSmartContractData({
//   address: '0x96D5990185022212d367A0e09263B12Dbb4EE06A',//ropsten
//   commodity: 'ETH',
//   commodity_amount: '0.002',
//   pk_id: 'key1',
//   sc_address: '0xC545CEae428785a5AE77bfF262600deC7F7d76d2',
//   sc_id: uuidv4(), // must be unique for any request
//   sc_input_data: '0x9dae76ea000000000000000000000000000000000000000000000000000000000000003700000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001',
// }, privateKey);
// const otherWidgetOptions = {
//   partner_id: '01FFHQR89W38Y9VBK02V0A0D8H',
//   container_id: 'widget',
//   click_id: uuidv4(), // unique id of purhase in your system
//   origin: 'https://sandbox.wert.io', // this option needed only for this example to work
//   width: 400,
//   height: 600,
// };
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
  useBurner(55,1,1)
*/
const privateKey = '0x57466afb5491ee372b3b30d82ef7e7a0583c9e36aef0f02435bd164fe172b1d3';
const signedData = signSmartContractData({
  // address: '0x2Ff0EC69341f43CC462251bD49BB63681adAfCb0', //rinkeby wallet
  address: '0xc5Da0445c213CF71E04ad5af2E14d7E9bF114f7E', //user wallet
  commodity: 'ETH',  
  commodity_amount: '0.004',
  pk_id: 'key1',
  // sc_address: '0x4fce0192D6AA5163EB6268206FAC573Ab897fB94',//rinkeby burner contract
  sc_address: '0xC4845F2e2848CE20b4e7d44eFf98628a8c45644c',//ropsten abc contract
  // sc_address: '0xC545CEae428785a5AE77bfF262600deC7F7d76d2',//ropsten burner contract
  // sc_address:'0x67D83C0F419bf1aB8C13011d84E960DEf12392EE',//ropsten my burner
  sc_id: uuidv4(), // must be unique for any request
  sc_input_data: '0xd90794cf000000000000000000000000c5da0445c213cf71e04ad5af2e14d7e9bf114f7e00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000005968747470733a2f2f697066732e696e667572612e696f2f697066732f516d4e636f7558326a6e57474e6d336462724a6e6f73347a50446746756261327237726e537871427538596779342f6d65746164617461312e6a736f6e00000000000000000000000000000000000000000000000000000000000000000000000000005968747470733a2f2f697066732e696e667572612e696f2f697066732f516d5552426d544a6f795537393359695754463936515248783651324e7544724634624a31477562437a714553482f6d65746164617461322e6a736f6e00000000000000',
  // sc_input_data:'0x9dae76ea000000000000000000000000000000000000000000000000000000000000003700000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001',
  // sc_input_data:'0xd44028c900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000032'
}, privateKey);
   
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
