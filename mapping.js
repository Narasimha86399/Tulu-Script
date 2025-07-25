const mapping = {
  'ಅ': 'AA',
  'ಆ': 'Aa',
  'ಇ': 'Ai',
  'ಈ': 'AI',
  'ಉ': 'Au',
  'ಊ': 'AU',
  'ಋ': 'AR',
  'ೠ': 'ARR',
  'ಌ': 'Vl',
  'ೡ': 'Vll',
  'ಎ': 'eA',
  'ಏ': 'EA',
  'ಐ': 'EEA',
  'ಒ': 'eAa',
  'ಓ': 'EAa',
  'ಔ': 'AY',

  'ಕ': 'k',
  'ಖ': 'K',
  'ಗ': 'g',
  'ಘ': 'G',
  'ಙ': 'Z',

  'ಚ': 'c',
  'ಛ': 'C',
  'ಜ': 'j',
  'ಜ*': 'Vj',
  'ಝ': 'J',
  'ಞ': 'z',

  'ಟ': 'q',
  'ಠ': 'Q',
  'ಡ': 'w',
  'ಢ': 'W',
  'ಣ': 'N',

  'ತ': 't',
  'ಥ': 'T',
  'ದ': 'd',
  'ಧ': 'D',
  'ನ': 'n',

  'ಪ': 'p',
  'ಫ': 'P',
  'ಬ': 'b',
  'ಭ': 'B',
  'ಮ': 'm',

  'ಯ': 'y',
  'ರ': 'r',
  'ಲ': 'l',
  'ಳ': 'L',
  'ವ': 'v',

  'ಶ': 'S',
  'ಷ': 'x',
  'ಸ': 's',
  'ಸ*': 'Vs',
  'ಹ': 'h',

  'ಱ': 'Vr',
  'ೞ': 'VZ',

  // Matras
  '್': 'A',
  'ಾ': 'a',
  'ಿ': 'i',
  'ೀ': 'I',
  'ು': 'u',
 'ು*': 'uA',
  'ೂ': 'U',
  'ೃ': 'R',
  'ೄ': 'RR',
  'ೆ': 'e',
  'ೇ': 'E',
   'ೆ*': 'e',
  'ೇ*': 'E',
  'ೈ': 'EE',
  'ೢ': 'VlX',
  'ೣ': 'VllX',
   // Composite matras (will require contextual handling)
  'ೊ': 'eXa',
  'ೋ': 'EXa',
  'ೌ': 'EXY',

  // Special signs
  'ಂ': 'M',
  'ಃ': 'H',
  '್*': '𑏏',//looped virama
  'ಀ':'𑏊',//Chandra Anunaishika
   'ಽ': '𑎷',//avagraha
  'ಓಮ್': '𑏗',
  'ಶ್ರೀ': '𑏘',
  'ಕ್*': 'kAX',
  'ಗ್*': 'gAX',
  'ಙ್ಕ್*': 'ZAkAX',
  'ಟ್*': 'qAX',
  'ಟ್ಟ್*': 'qAqAX',
  'ಣ್*': 'NAX',
  'ತ್*': 'tAX',
  'ದ್*': 'dAX',
  'ನ್*': 'nAX',
  'ನ್ನ್*': 'nAnAX',
  'ರ್*': 'rAX',
  'ಮ್*': 'mAX',
  'ಹ್*': 'hAX',
  'ಣ್ಟ್*': 'NAqAX',
  'ತ್ತ್*': 'tAtAX',
  'ನ್ದ್*': 'nAdAX',
  'ನ್ತ್*': 'nAnAX',
  

  'ಕ್': 'kA', // Prefixes
  'ಕಾ': 'ka',
  'ಕಿ': 'ki',
  'ಕೀ': 'kI',
  'ಕು': 'ku',
   'ಕು*': 'kuA',
  'ಕೂ': 'kU',
  'ಕೃ': 'kR',
  'ಕೄ': 'kRR',
  'ಕೢ': 'kVlX',
  'ಕೣ': 'kVllX',
  'ಕೆ': 'ek',
  'ಕೇ': 'Ek',
   'ಕೆ*': 'ok',
  'ಕೇ*': 'Ok',
  'ಕೈ': 'EEk',
   'ಕೊ': 'eka',
  'ಕೋ': 'Eka',
  'ಕೋ': 'EkY',
   'ಕಂ': 'kM',
  'ಕಃ': 'kH',

  'ಕ್ಕ': 'kAk',
  'ಕ್ಟ': 'kAq',
  'ಕ್ತ': 'kAt',
  'ಕ್ಥ': 'kAT',
  'ಕ್ನ': 'kAn',
  'ಕ್ಮ': 'kAm',
  'ಕ್ಯ': 'kAy',
  'ಕ್ರ': 'kAr',
  'ಕ್ಲ': 'kAl',
  'ಕ್ವ': 'kAv',
  'ಕ್ಷ': 'kAx',
  'ಕ್ಸ': 'kAs',

  'ಖ್ಕ': 'KAk',
  'ಖ್ಖ': 'KAK',
  'ಖ್ಮ': 'KAm',
  'ಖ್ಯ': 'KAy',
  'ಖ್ರ': 'KAr',
  'ಖ್ಲ': 'KAl',
  'ಖ್ವ': 'KAv',

  'ಗ್ಗ': 'gAg',
  'ಗ್ಘ': 'gAG',
  'ಗ್ಜ': 'gAj',
  'ಗ್ದ': 'gAd',
  'ಗ್ಧ': 'gAD',
  'ಗ್ನ': 'gAn',
  'ಗ್ಬ': 'gAb',
  'ಗ್ಭ': 'gAB',
  'ಗ್ಮ': 'gAm',
  'ಗ್ಯ': 'gAy',
  'ಗ್ರ': 'gAr',
  'ಗ್ಲ': 'gAl',
  'ಗ್ವ': 'gAv',

  'ಘ್ಘ': 'GAG',
   'ಘ್ಯ': 'GAy',
  'ಘ್ರ': 'GAr',
  'ಘ್ಲ': 'GAl',
  'ಘ್ವ': 'GAv',

  'ಙ್ಕ': 'ZAk',
  'ಙ್ಙ': 'ZAZ',
  'ಙ್ಯ': 'ZAy',
  'ಙ್ರ': 'ZAr',
  'ಙ್ಲ': 'ZAl',
  'ಙ್ವ': 'ZAv',

  'ಚ್ಚ': 'cAc',
  'ಚ್ಛ': 'cAC',
  'ಚ್ಯ': 'cAy',
  'ಚ್ರ': 'cAr',
  'ಚ್ಲ': 'cAl',
  'ಚ್ವ': 'cAv',


  'ಛ್ಯ': 'CAy',
  'ಛ್ರ': 'CAr',
  'ಛ್ಲ': 'CAl',
  'ಛ್ವ': 'CAv',

  'ಜ್ಜ': 'jAj',
 'ಜ್ಞ': 'jAz',
  'ಜ್ಯ': 'jAy',
  'ಜ್ರ': 'jAr',
  'ಜ್ಲ': 'jAl',
  'ಜ್ವ': 'jAv',
 
  'ಝ್ಝ': 'JAJ',
  'ಝ್ಯ': 'JAy',
  'ಝ್ರ': 'JAr',
  'ಝ್ಲ': 'JAl',
  'ಝ್ವ': 'JAv',

  'ಞ್ಚ': 'zAc',
  'ಞ್ಜ': 'zAj',
  'ಞ್ಞ': 'zAz',
  'ಞ್ಯ': 'zAy',
  'ಞ್ರ': 'zAr',
  'ಞ್ಲ': 'zAl',
  'ಞ್ವ': 'zAv',

   'ಟ್ಟ': 'qAq',
  'ಟ್ಯ': 'qAy',
  'ಟ್ರ': 'qAr',
  'ಟ್ಲ': 'qAl',
  'ಟ್ವ': 'qAv',

  'ಠ್ಠ': 'QAQ',
  'ಠ್ಯ': 'QAy',
  'ಠ್ರ': 'QAr',
  'ಠ್ಲ': 'QAl',
  'ಠ್ವ': 'QAv',

  'ಡ್ಡ': 'wAw',
  'ಡ್ಮ': 'wAm',
  'ಡ್ಯ': 'wAy',
  'ಡ್ರ': 'wAr',
  'ಡ್ಲ': 'wAl',
  'ಡ್ವ': 'wAv',

  'ಢ್ಢ': 'WAW',
  'ಢ್ಯ': 'WAy',
  'ಢ್ರ': 'WAr',
  'ಢ್ಲ': 'WAl',
  'ಢ್ವ': 'WAv',

  'ಣ್ಟ': 'NAq', 
  'ಣ್ಠ': 'NAQ',
  'ಣ್ಡ': 'NAw',
  'ಣ್ಢ': 'NAW',
  'ಣ್ಣ': 'NAN',
  'ಣ್ಯ': 'NAy',
  'ಣ್ರ': 'NAr',
  'ಣ್ಲ': 'NAl',
  'ಣ್ವ': 'NAv',

 'ತ್ಕ': 'tAk',
  'ತ್ತ': 'tAt',
  'ತ್ಥ': 'tAT',
  'ತ್ನ': 'tAn',
  'ತ್ಮ': 'tAm',
  'ತ್ಯ': 'tAy',
  'ತ್ರ': 'tAr',
  'ತ್ಲ': 'tAl',
  'ತ್ವ': 'tAv',
  'ತ್ಸ': 'tAs',

  'ಥ್ಥ': 'TAT',
  'ಥ್ಯ': 'TAy',
  'ಥ್ರ': 'TAr',
  'ಥ್ಲ': 'TAl',
  'ಥ್ವ': 'TAv',

  'ದ್ಗ': 'dAg',
  'ದ್ಘ': 'dAG',
  'ದ್ದ': 'dAd',
  'ದ್ಧ': 'dAD',
  'ದ್ಬ': 'dAb',
  'ದ್ಮ': 'dAm',
  'ದ್ಯ': 'dAy',
  'ದ್ರ': 'dAr',
  'ದ್ಲ': 'dAl',
  'ದ್ವ': 'dAv',

  'ಧ್ಧ': 'DAD',
  'ಧ್ಯ': 'DAy',
  'ಧ್ರ': 'DAr',
  'ಧ್ಲ': 'DAl',
  'ಧ್ವ': 'DAv',

  'ನ್ಕ': 'nAk',
  'ನ್ಘ': 'nAG',
  'ನ್ಟ': 'nAq',
  'ನ್ತ': 'nAt',
  'ನ್ಥ': 'nAT',
  'ನ್ದ': 'nAd',
  'ನ್ಧ': 'nAD',
  'ನ್ನ': 'nAn',
  'ನ್ಬ': 'nAb',
  'ನ್ಭ': 'nAB',
  'ನ್ಮ': 'nAm',
  'ನ್ಯ': 'nAy',
  'ನ್ರ': 'nAr',
  'ನ್ಲ': 'nAl',
  'ನ್ವ': 'nAv',
  'ನ್ಹ': 'nAH',

  'ಪ್ಛ': 'pAC',
  'ಪ್ತ': 'pAt',
  'ಪ್ಪ': 'pAp',
  'ಪ್ಮ': 'pAm',
  'ಪ್ಯ': 'pAy',
  'ಪ್ರ': 'pAr',
  'ಪ್ಲ': 'pAl',
  'ಪ್ವ': 'pAv',

  'ಫ್ಫ': 'PAP',
  'ಫ್ಯ': 'PAy',
  'ಫ್ರ': 'PAr',
  'ಫ್ಲ': 'PAl',
  'ಫ್ವ': 'PAv',

  'ಬ್ಬ': 'bAb',
  'ಬ್ಯ': 'bAy',
  'ಬ್ರ': 'bAr',
  'ಬ್ಲ': 'bAl',
  'ಬ್ವ': 'bAv',

  'ಭ್ನ': 'BAn',
  'ಭ್ಭ': 'BAB',
  'ಭ್ಯ': 'BAy',
  'ಭ್ರ': 'BAr',
  'ಭ್ಲ': 'BAl',
  'ಭ್ವ': 'BAv',

  'ಮ್ಮ': 'mAm',
  'ಮ್ಯ': 'mAy',
  'ಮ್ರ': 'mAr',
  'ಮ್ಲ': 'mAl',
  'ಮ್ವ': 'mAv',

  'ಯ್ಯ': 'yAy',
  'ಯ್ರ': 'yAr',
  'ಯ್ಲ': 'yAl',
  'ಯ್ವ': 'yAv',

  'ರ್ರ': 'rAr',

  'ಲ್ಯ': 'lAy',
  'ಲ್ರ': 'lAr',
   'ಲ್ಲ': 'lAl',
  'ಲ್ವ': 'lAv',

  'ವ್ಯ': 'vAy',
  'ವ್ರ': 'vAr',
  'ವ್ಲ': 'vAl',
  'ವ್ವ': 'vAv',

  'ಶ್ಚ': 'SAc',
  'ಶ್ಛ': 'SAC',
  'ಶ್ನ': 'SAn',
  'ಶ್ಮ': 'SAm',
  'ಶ್ಯ': 'SAy',
  'ಶ್ರ': 'SAr',
  'ಶ್ಲ': 'SAl',
  'ಶ್ವ': 'SAv',
  'ಶ್ಶ': 'SAS',

  'ಷ್ಕ': 'xAk',
  'ಷ್ಟ': 'xAq',
  'ಷ್ಯ': 'xAy',
  'ಷ್ರ': 'xAr',
  'ಷ್ಲ': 'xAl',
  'ಷ್ವ': 'xAv',
  'ಷ್ಷ': 'xAx',

  'ಸ್ಥ': 'sAT',
  'ಸ್ಮ': 'sAm',
  'ಸ್ಯ': 'sAy',
  'ಸ್ರ': 'sAr',
  'ಸ್ಲ': 'sAl',
  'ಸ್ವ': 'sAv',
  'ಸ್ಸ': 'sAs',

  'ಹ್ಮ್': 'hAm',
  'ಹ್ಯ': 'hAy',
  'ಹ್ರ': 'hAr',
  'ಹ್ಲ': 'hAl',
  'ಹ್ವ': 'hAv',
  'ಹ್ಹ': 'hAh',

  'ಳ್ಯ': 'LAy',
  'ಳ್ರ': 'LAr',
  'ಳ್ಲ': 'LAl',
  'ಳ್ವ': 'LAv',
  'ಳ್ಳ': 'LAL',

  'ಱ್ಯ': 'VrAy',
  'ಱ್ರ': 'VrAr',
  'ಱ್ಲ': 'VrAl',
  'ಱ್ವ': 'VrAv',
  'ಱ್ಱ': 'VrAVr',

  'ೞ್ಯ': 'VZAy',
  'ೞ್ರ': 'VZAr',
  'ೞ್ಲ': 'VZAl',
  'ೞ್ವ': 'VZAv',
  'ೞ್ೞ': 'VZAVZ',
  '೦': '0',
  '೧': '1',
  '೨': '2',
  '೩': '3',
  '೪': '4',
  '೫': '5',
  '೬': '6',
  '೭': '7',
  '೮': '8',
  '೯': '9',
  '೧೦': 'V10',
  '೧೦೦': 'V100',
  '೧೦೦೦': 'V1000',
 
};
