
const nSeed = {
  nWin: {
    type: 'enum',
    sam: ['5.0', '5.1', '6.0', '6.1', '6.2', '7.0', '7.1', '10.0', '10.1'],
  },
  nMoz: {
    type: 'enum',
    sam: ['4.0', '5.0'],
  },
  nAppleWebKit: {
    type: 'enum',
    sam: ['537', '535', '530', '525'],
  },
  nChrome: {
    type: 'rule',
    sam: '50-78',
  },
  nSafari: {
    type: 'enum',
    sam: ['537', '535', '530', '525'],
  },
  nGecko: {
    type: 'enum',
    sam: ['2009', '2010', '2011'],
  },
  nFF: {
    type: 'rule',
    sam: ['21+'],
  },
  nOsx: {
    type: 'enum',
    sam: ['10.10', '10.11', '10.12', '10.13', '10.14', '10.15'],
  },
  nRv: {
    type: 'rule',
    sam: ['30+'],
  },
  nTrid: {
    type: 'enum',
    sam: ['4.0', '5.0', '6.0', '7.0'],
  },
  nMSIE: {
    type: 'enum',
    sam: ['9.0', '10.0', '11.0'],
  },
  nNetType: {
    type: 'enum',
    sam: ['WIFI', '2G', '3G', '4G', '5G'],
  },
  nLangOnWeChat: {
    type: 'rule',
  },
  nWeChat: {
    type: 'enum',
    sam: ['7.0.3(0x17000321)', '6.6.1.1220(0x26060135)'],
  },
  nQQ: {
    type: 'enum',
    sam: ['7.5', '6.2', '5.0'],
  },
  nIphone: {
    type: 'rule',
    sam: ['8+'],
  },
};


module.exports = { nSeed };
