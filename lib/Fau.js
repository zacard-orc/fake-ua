
const { nSeed } = require('./Collections');
const {
  chooseOneFromArray,
  genRand,
} = require('./util');

class FauGen {
  constructor() {
    this._a = 1;
    this._selEle = [];
  }

  slim() {
    this._selEle = [];
    const eKey = ['nMoz', 'nWin', 'nAppleWebKit', 'nGecko', 'nChrome', 'nSafari'];

    this._selEle = eKey.reduce((prev, el) => {
      const { type, sam } = nSeed[el];

      let val = '';
      if (type === 'enum') {
        val = chooseOneFromArray(sam);
      }
      if (type === 'rule') {
        // todo complex rule parse
        const [nBottom, nTop] = sam.split('-');
        val = genRand(nBottom, nTop);
      }
      switch (el) {
        case 'nMoz': {
          val = `Mozilla/${val}`;
          break;
        }
        case 'nWin': {
          const osBit = chooseOneFromArray(['32', '64'], 0.8);
          val = `(Windows NT/${val};Win${osBit},x${osBit})`;
          break;
        }
        case 'nAppleWebKit': {
          const nv = genRand(10, 80);
          val = `AppleWebKit/${val}.${nv}`;
          break;
        }
        case 'nGecko': {
          const nPubMonth = genRand(1, 12).toString().padStart(2, '0');
          const nPubDay = genRand(1, 28).toString().padStart(2, '0');
          val = `Gecko/${val}${nPubMonth}${nPubDay}`;
          break;
        }
        case 'nChrome': {
          const nv1 = genRand(0, 2);
          const nv2 = val * genRand(40, 55) + genRand(3, 10);
          const nv3 = genRand(20, 100);
          val = `Chrome/${val}.${nv1}.${nv2}.${nv3}`;
          break;
        }
        case 'nSafari': {
          const nv1 = genRand(20, 100);
          val = `Safari/${val}.${nv1}`;
          break;
        }
        default:
          break;
      }

      prev.push(val);

      return prev;
    }, []);

    return this.toString();
  }

  toString() {
    return this._selEle.join(' ');
  }
}


module.exports = { FauGen };
