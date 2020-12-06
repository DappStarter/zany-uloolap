require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney arena oxygen foot fine dash sad method ice light army ghost'; 
let testAccounts = [
"0xe2c2d56da45e3be60a28c0b9d4802f79d8ae49e8275e33df1fb679fa27a32ade",
"0x6c4ff511afbd59490bbd3ec03d7ea74ee2b4720c04ac11709770c11e5a7b0944",
"0x558c506d0fe67ffcbc2d6312ed593ed23b2c3058b573766ae9024a3c20aa5669",
"0xe4c54a7cb8eb287a4327c48ba46aac8a0ab5c038f7b817a4290e050cc639e3bc",
"0xd34043e627f2720d1d645baca6aa684f6164040f7e902aad4452c8c8f6e5463c",
"0xd1441d5d50c5de7b49a909b3e34c749f2e49ad072c54d4c1c25e2b34a0c7fa8d",
"0xb6186d4fb84705b443c980ceed4de58079cd19d596f6a84901f119290da97068",
"0x5b74bd6ed4ee8ff364fce3105e6522da2cbe822c2d1d5dcdd45b54dc3366258a",
"0x39148e3fb3592b4012d22b080b46580e13a1f6393384f1fa39cbbcacc9f55fd0",
"0x2783d662935c5e9023110796c12a10490f6d13acd92b8fd31a50d1edd95ba5fe"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
