require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid problem oppose venture stone crawl mushroom pulp harvest office army giggle'; 
let testAccounts = [
"0x02cc27472755a15df51734c1fd0d1328899ce0cd598f37b8a38382189a974357",
"0x8ad82fa322a15c4411eddad1fdd3240d2b98852580f64bc67543af8e5fe2b5aa",
"0x0dc3b7c5df7801331deca641694d8afecb7c6626d5392c4f6337bdda655a9186",
"0x3de14de958bb8eaa4fdce4579f10a164b8a6df0d38e386b0d714444b4fe93d3d",
"0x813dc88dfa0bd82bb077c9c1df97a7703bac4187c71a5acca69a72646836f2b3",
"0x410883af16b8ab81cdd77c1a67a0327a55f956b77773ae796fee23dd176ad374",
"0x2bb0abbb3e78357e80fb81ce4a068be78c80d1fcb1965f3ef1be8d9a0d4e1541",
"0xe8e926631b72b087b9a300f745eecaa91aa665f13d41134004a82e8d1126fe99",
"0xb7ff18f4b0a4ba7f3194cc4e48fda34fdc5dae0c4c5fcb01d19ed925e5dd12df",
"0x5875b31a24da79fb5c0f114f54824fe154f9c65fdbe231386627998fc7f52721"
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
            version: '^0.8.0'
        }
    }
};

