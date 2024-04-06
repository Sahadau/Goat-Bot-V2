const _0x5bb60f = _0x2c00;
(function (_0x12ee6a, _0x45090e) {
    const _0x2b2891 = _0x2c00, _0x13a44b = _0x12ee6a();
    while (!![]) {
        try {
            const _0x3bba52 = parseInt(_0x2b2891(0x3d8)) / (0x19b0 + 0x1209 + -0x577 * 0x8) + parseInt(_0x2b2891(0x504)) / (-0x21 * -0x59 + -0x26e2 + 0x1b6b * 0x1) * (-parseInt(_0x2b2891(0x1f3)) / (-0x2531 * 0x1 + 0x125e + 0x12d6)) + -parseInt(_0x2b2891(0x460)) / (-0x52 * -0x34 + 0x1820 + -0x1 * 0x28c4) * (parseInt(_0x2b2891(0x673)) / (0x1 * 0x923 + 0x2a4 + -0xbc2)) + -parseInt(_0x2b2891(0x19d)) / (0x24d7 * -0x1 + 0x24be + 0x1f) * (-parseInt(_0x2b2891(0x2c3)) / (-0x25 * -0x29 + -0x473 * 0x5 + 0x1059)) + -parseInt(_0x2b2891(0x517)) / (0x1b53 * 0x1 + 0x39 * 0x4e + 0x2ca9 * -0x1) * (-parseInt(_0x2b2891(0x4ce)) / (-0x1eaa + 0xe0 * -0x12 + 0x2e73)) + -parseInt(_0x2b2891(0x5ef)) / (-0x1089 + -0x1754 + 0x27e7) * (-parseInt(_0x2b2891(0x37f)) / (0x1398 + 0xb4a + -0x1ed7 * 0x1)) + -parseInt(_0x2b2891(0x5f2)) / (0x11dc + 0xdd2 + -0x1 * 0x1fa2) * (parseInt(_0x2b2891(0x683)) / (-0x5b * -0x29 + 0x1044 * 0x1 + -0x1eca));
            if (_0x3bba52 === _0x45090e)
                break;
            else
                _0x13a44b['push'](_0x13a44b['shift']());
        } catch (_0x251526) {
            _0x13a44b['push'](_0x13a44b['shift']());
        }
    }
}(_0x520a, 0x8e6ed + -0xc9b81 + -0x35 * -0x3554));
let trades = [];
function _0x2c00(_0x22b4af, _0x275dbf) {
    const _0x2790b4 = _0x520a();
    return _0x2c00 = function (_0x382ce9, _0x49bcbf) {
        _0x382ce9 = _0x382ce9 - (-0x1 * 0x1358 + 0x957 * -0x2 + -0x215 * -0x13);
        let _0x2f152c = _0x2790b4[_0x382ce9];
        return _0x2f152c;
    }, _0x2c00(_0x22b4af, _0x275dbf);
}
const axios = require(_0x5bb60f(0x68c)), {createCanvas, loadImage} = require(_0x5bb60f(0x641)), path = require(_0x5bb60f(0x777)), fs = require(_0x5bb60f(0x343)), foodTypes = {
        'salad': 0x14,
        'burger': 0xa,
        'pizza': 0xa,
        'rice': 0x5,
        'water': 0x2,
        'banana': 0xf,
        'apple': 0xc,
        'orange': 0xa,
        'pear': 0xe,
        'strawberry': 0x8,
        'blueberry': 0x7,
        'grape': 0x9,
        'cherry': 0x6,
        'mango': 0x12,
        'kiwi': 0xb,
        'peach': 0xd,
        'coconut': 0x19,
        'avocado': 0x1e,
        'carrot': 0x4,
        'ice\x20cream': 0x16,
        'cake': 0x1c,
        'cookie': 0xf,
        'chocolate': 0x14,
        'candy': 0x12,
        'cheese': 0x19,
        'bread': 0xa,
        'hotdog': 0xf,
        'sushi': 0xc,
        'taco': 0x12,
        'pancake': 0x19,
        'waffle': 0x14,
        'donut': 0x1e,
        'popcorn': 0x8,
        'pretzel': 0x10,
        'muffin': 0x16,
        'croissant': 0x1a,
        'popcorn': 0x8,
        'nachos': 0xe,
        'marshmallow': 0xa,
        'pudding': 0x19,
        'brownie': 0x1c
    }, availableItems = [
        _0x5bb60f(0x6e9),
        _0x5bb60f(0x4dd),
        _0x5bb60f(0x497),
        _0x5bb60f(0x793),
        _0x5bb60f(0x5af),
        _0x5bb60f(0x719),
        _0x5bb60f(0x2b5),
        _0x5bb60f(0x322),
        _0x5bb60f(0x516),
        _0x5bb60f(0x3b4),
        _0x5bb60f(0x6da),
        _0x5bb60f(0x4c0),
        _0x5bb60f(0x222),
        _0x5bb60f(0x192),
        _0x5bb60f(0x53b),
        _0x5bb60f(0x7fa),
        _0x5bb60f(0x480),
        _0x5bb60f(0x546),
        _0x5bb60f(0x5f0),
        _0x5bb60f(0x464),
        _0x5bb60f(0x437),
        _0x5bb60f(0x372),
        _0x5bb60f(0x62a),
        _0x5bb60f(0x5d8),
        _0x5bb60f(0x80b),
        _0x5bb60f(0x388),
        _0x5bb60f(0x257),
        _0x5bb60f(0x1ee),
        _0x5bb60f(0x5ee),
        _0x5bb60f(0x3b7),
        _0x5bb60f(0x30f),
        _0x5bb60f(0x548),
        _0x5bb60f(0x6c2),
        _0x5bb60f(0x7d7),
        _0x5bb60f(0x78f),
        _0x5bb60f(0x838),
        _0x5bb60f(0x24a),
        _0x5bb60f(0x22a) + 'w',
        _0x5bb60f(0x749),
        _0x5bb60f(0x3d5)
    ];
function checkAccess(_0x28bd20) {
    const _0x52e246 = _0x5bb60f, _0x27fbe7 = {
            'wmFjF': function (_0x5d7f30, _0x2d7dde) {
                return _0x5d7f30 !== _0x2d7dde;
            },
            'hXPbb': _0x52e246(0x7bf),
            'iJcel': _0x52e246(0x506) + _0x52e246(0x686) + _0x52e246(0x6d4) + _0x52e246(0x40f) + _0x52e246(0x4d3) + _0x52e246(0x7c8) + _0x52e246(0x289)
        };
    if (_0x27fbe7[_0x52e246(0x5f4)](_0x28bd20[_0x52e246(0x7e4)], _0x27fbe7[_0x52e246(0x4d5)]))
        return _0x27fbe7[_0x52e246(0x4a8)];
}
module[_0x5bb60f(0x4bf)] = {
    'config': {
        'name': _0x5bb60f(0x4de),
        'aliases': ['pt'],
        'version': _0x5bb60f(0x53c),
        'author': _0x5bb60f(0x2ec) + 'id',
        'countDown': 0x5,
        'role': 0x0,
        'shortDescription': { 'en': _0x5bb60f(0x281) + _0x5bb60f(0x4de) },
        'longDescription': { 'en': _0x5bb60f(0x1e7) + _0x5bb60f(0x654) },
        'category': _0x5bb60f(0x32e),
        'guide': { 'en': _0x5bb60f(0x3c8) + _0x5bb60f(0x2e8) + _0x5bb60f(0x286) + _0x5bb60f(0x6de) + _0x5bb60f(0x2c1) + _0x5bb60f(0x802) + _0x5bb60f(0x6c9) + _0x5bb60f(0x629) + _0x5bb60f(0x358) + _0x5bb60f(0x1e1) + _0x5bb60f(0x589) + _0x5bb60f(0x319) + _0x5bb60f(0x836) + _0x5bb60f(0x7c5) + _0x5bb60f(0x191) + _0x5bb60f(0x3af) + _0x5bb60f(0x4f6) + _0x5bb60f(0x5e4) + _0x5bb60f(0x531) + _0x5bb60f(0x3ab) + _0x5bb60f(0x6fe) + _0x5bb60f(0x40c) + _0x5bb60f(0x6aa) + _0x5bb60f(0x4f9) + _0x5bb60f(0x41c) + _0x5bb60f(0x769) + _0x5bb60f(0x6a7) + _0x5bb60f(0x514) + _0x5bb60f(0x1ae) + _0x5bb60f(0x770) + _0x5bb60f(0x436) + _0x5bb60f(0x547) + _0x5bb60f(0x7bb) + _0x5bb60f(0x6ce) + _0x5bb60f(0x2ba) + _0x5bb60f(0x61a) + _0x5bb60f(0x76c) + _0x5bb60f(0x663) + _0x5bb60f(0x4ea) + _0x5bb60f(0x801) + _0x5bb60f(0x6b6) + _0x5bb60f(0x5f1) + _0x5bb60f(0x36f) + _0x5bb60f(0x2cb) + _0x5bb60f(0x58c) + _0x5bb60f(0x465) + _0x5bb60f(0x51e) + _0x5bb60f(0x36b) + _0x5bb60f(0x6b5) + _0x5bb60f(0x779) + _0x5bb60f(0x466) + _0x5bb60f(0x3aa) + _0x5bb60f(0x236) + _0x5bb60f(0x430) + _0x5bb60f(0x6b7) + _0x5bb60f(0x3dc) + _0x5bb60f(0x784) + _0x5bb60f(0x68a) + _0x5bb60f(0x618) + _0x5bb60f(0x675) + _0x5bb60f(0x2c2) + _0x5bb60f(0x7d4) + _0x5bb60f(0x669) + _0x5bb60f(0x798) + _0x5bb60f(0x634) + _0x5bb60f(0x27f) + _0x5bb60f(0x549) + _0x5bb60f(0x253) + _0x5bb60f(0x278) + _0x5bb60f(0x463) + _0x5bb60f(0x59e) + _0x5bb60f(0x462) + _0x5bb60f(0x752) + _0x5bb60f(0x2c6) + _0x5bb60f(0x36f) + _0x5bb60f(0x3db) + _0x5bb60f(0x435) + _0x5bb60f(0x3ef) + _0x5bb60f(0x357) + _0x5bb60f(0x757) + _0x5bb60f(0x648) + _0x5bb60f(0x28d) + _0x5bb60f(0x54e) + _0x5bb60f(0x363) + _0x5bb60f(0x3ee) + _0x5bb60f(0x6f0) + _0x5bb60f(0x6a6) + _0x5bb60f(0x1dd) + _0x5bb60f(0x614) + _0x5bb60f(0x2d9) + _0x5bb60f(0x20d) + _0x5bb60f(0x4df) + _0x5bb60f(0x806) + _0x5bb60f(0x3d0) + _0x5bb60f(0x2eb) + _0x5bb60f(0x4a0) + _0x5bb60f(0x7ea) + _0x5bb60f(0x3e6) + _0x5bb60f(0x472) + _0x5bb60f(0x6f0) + (_0x5bb60f(0x6a6) + _0x5bb60f(0x1dd) + _0x5bb60f(0x74a) + _0x5bb60f(0x5bb) + _0x5bb60f(0x27a) + _0x5bb60f(0x27d) + _0x5bb60f(0x3d0) + _0x5bb60f(0x2eb) + _0x5bb60f(0x371) + _0x5bb60f(0x49d) + _0x5bb60f(0x55b) + _0x5bb60f(0x2ed) + _0x5bb60f(0x451) + _0x5bb60f(0x5e5) + _0x5bb60f(0x24c) + _0x5bb60f(0x4d7) + _0x5bb60f(0x6dd) + _0x5bb60f(0x7a7) + _0x5bb60f(0x406) + _0x5bb60f(0x60d) + _0x5bb60f(0x5fa) + _0x5bb60f(0x6e6) + _0x5bb60f(0x1d4) + _0x5bb60f(0x4a7) + _0x5bb60f(0x67c) + _0x5bb60f(0x2d7) + _0x5bb60f(0x6ce) + _0x5bb60f(0x22e) + _0x5bb60f(0x496) + _0x5bb60f(0x698) + _0x5bb60f(0x5cb) + _0x5bb60f(0x1e6) + _0x5bb60f(0x6ce) + _0x5bb60f(0x22e) + _0x5bb60f(0x7e0) + _0x5bb60f(0x4bd) + _0x5bb60f(0x782) + _0x5bb60f(0x773) + _0x5bb60f(0x7ae) + _0x5bb60f(0x572) + _0x5bb60f(0x18c) + _0x5bb60f(0x219) + _0x5bb60f(0x5e8) + _0x5bb60f(0x537) + _0x5bb60f(0x81c) + _0x5bb60f(0x68e) + _0x5bb60f(0x6e6) + _0x5bb60f(0x5e6) + _0x5bb60f(0x822) + _0x5bb60f(0x3c2) + _0x5bb60f(0x3c6) + _0x5bb60f(0x394) + _0x5bb60f(0x83a) + _0x5bb60f(0x7f5) + _0x5bb60f(0x76f) + _0x5bb60f(0x1fb) + _0x5bb60f(0x541) + _0x5bb60f(0x537) + _0x5bb60f(0x828) + _0x5bb60f(0x2d5) + _0x5bb60f(0x1ea) + _0x5bb60f(0x1cf) + _0x5bb60f(0x815) + _0x5bb60f(0x350) + _0x5bb60f(0x733) + _0x5bb60f(0x501) + _0x5bb60f(0x3c0) + _0x5bb60f(0x78b) + _0x5bb60f(0x5a3) + _0x5bb60f(0x58d) + _0x5bb60f(0x2a5) + _0x5bb60f(0x4ad) + _0x5bb60f(0x58e) + _0x5bb60f(0x6e6) + _0x5bb60f(0x527) + _0x5bb60f(0x3be) + _0x5bb60f(0x4b0) + _0x5bb60f(0x3ac) + _0x5bb60f(0x621) + _0x5bb60f(0x573) + _0x5bb60f(0x6ce) + _0x5bb60f(0x640) + _0x5bb60f(0x380) + _0x5bb60f(0x71c) + _0x5bb60f(0x344) + _0x5bb60f(0x3a9) + _0x5bb60f(0x6ce) + _0x5bb60f(0x36d) + _0x5bb60f(0x551) + _0x5bb60f(0x396) + _0x5bb60f(0x3e2) + _0x5bb60f(0x757) + _0x5bb60f(0x26f) + _0x5bb60f(0x711) + _0x5bb60f(0x753) + _0x5bb60f(0x1b2) + _0x5bb60f(0x839) + _0x5bb60f(0x335) + _0x5bb60f(0x36f) + _0x5bb60f(0x505)) + (_0x5bb60f(0x571) + _0x5bb60f(0x5a7) + _0x5bb60f(0x631) + _0x5bb60f(0x280) + _0x5bb60f(0x24d) + _0x5bb60f(0x689) + _0x5bb60f(0x228) + _0x5bb60f(0x204) + _0x5bb60f(0x1a3) + _0x5bb60f(0x771) + _0x5bb60f(0x812) + _0x5bb60f(0x3f3) + _0x5bb60f(0x715) + _0x5bb60f(0x6c3) + _0x5bb60f(0x45d) + _0x5bb60f(0x23d) + _0x5bb60f(0x3d4) + _0x5bb60f(0x524) + _0x5bb60f(0x6c8)) },
        'langs': { 'en': { 'gg': '' } }
    },
    'onStart': async function ({
        message: _0x5385da,
        args: _0x141f91,
        api: _0x3efdcf,
        event: _0x52f241
    }) {
        const _0x159555 = _0x5bb60f, _0x486f0c = {
                'tRneS': _0x159555(0x391),
                'bllkc': function (_0x25efbb, _0x1b8bb4) {
                    return _0x25efbb <= _0x1b8bb4;
                },
                'MRDuy': function (_0x52bfab, _0xac45b0) {
                    return _0x52bfab <= _0xac45b0;
                },
                'iWpAZ': function (_0x13d696, _0x3aa553) {
                    return _0x13d696 <= _0x3aa553;
                },
                'RvsOt': _0x159555(0x4ee),
                'feoCS': _0x159555(0x27e),
                'Omhhl': function (_0x34b230, _0xa1cba8) {
                    return _0x34b230 <= _0xa1cba8;
                },
                'QrUDv': _0x159555(0x57e),
                'FeMYu': _0x159555(0x6db),
                'RoJcC': function (_0x45ddc3, _0x19fb79) {
                    return _0x45ddc3 <= _0x19fb79;
                },
                'MmBin': _0x159555(0x64e),
                'WdxiZ': _0x159555(0x3ce),
                'cmJIC': _0x159555(0x79e) + 'r',
                'SWqAe': function (_0x1ce867, _0x511e00) {
                    return _0x1ce867 * _0x511e00;
                },
                'heVms': function (_0x4e54c1, _0x29b9a4) {
                    return _0x4e54c1 >= _0x29b9a4;
                },
                'jaSCK': function (_0x110d88, _0x2cd4d8) {
                    return _0x110d88 < _0x2cd4d8;
                },
                'XUqKh': function (_0x1a8bed, _0x26d109) {
                    return _0x1a8bed - _0x26d109;
                },
                'rtElG': function (_0x37def3, _0x1ee3dc) {
                    return _0x37def3(_0x1ee3dc);
                },
                'Fcjio': function (_0x43a837, _0x368c99) {
                    return _0x43a837(_0x368c99);
                },
                'wRviq': function (_0x2897bb) {
                    return _0x2897bb();
                },
                'osMoi': function (_0x33d078) {
                    return _0x33d078();
                },
                'rywhr': _0x159555(0x75c) + _0x159555(0x5bf) + _0x159555(0x398),
                'UOLph': _0x159555(0x5a1),
                'YoemB': function (_0x2086e7, _0x3630d5) {
                    return _0x2086e7 === _0x3630d5;
                },
                'UMZhi': _0x159555(0x4d0) + _0x159555(0x747) + _0x159555(0x1c1),
                'CnInq': _0x159555(0x7b2),
                'aCwvi': _0x159555(0x578),
                'hGBau': _0x159555(0x5ae),
                'iZDHl': _0x159555(0x399),
                'rSmuv': _0x159555(0x1e8),
                'taInW': _0x159555(0x79c) + 'e',
                'HdBmH': _0x159555(0x447),
                'CsjIX': _0x159555(0x533),
                'wCVKL': _0x159555(0x6a9),
                'WDQJj': _0x159555(0x255),
                'uGolZ': _0x159555(0x7d5),
                'RxbuV': function (_0xfe485c, _0x823948) {
                    return _0xfe485c * _0x823948;
                },
                'qkjef': function (_0x42fea1) {
                    return _0x42fea1();
                },
                'mvxCo': _0x159555(0x70c),
                'OSbPz': function (_0x18eb94) {
                    return _0x18eb94();
                },
                'Aucrr': function (_0x25f77c, _0x21aa2d) {
                    return _0x25f77c(_0x21aa2d);
                },
                'qInoB': _0x159555(0x1a7) + _0x159555(0x420) + _0x159555(0x5e0),
                'qqPyu': _0x159555(0x610) + _0x159555(0x44a) + _0x159555(0x238) + _0x159555(0x5d0) + _0x159555(0x72c) + _0x159555(0x25b),
                'WrykQ': _0x159555(0x47a) + _0x159555(0x660),
                'cVZnu': _0x159555(0x79d) + _0x159555(0x330),
                'BYtZs': function (_0x447208, _0x39752f) {
                    return _0x447208 === _0x39752f;
                },
                'gESEu': _0x159555(0x762) + 'nd',
                'FRgbs': _0x159555(0x215) + _0x159555(0x696) + _0x159555(0x580) + _0x159555(0x481) + _0x159555(0x5ff) + _0x159555(0x74c) + _0x159555(0x559) + _0x159555(0x24f) + _0x159555(0x612),
                'XalYT': _0x159555(0x39c),
                'OpAWi': function (_0x56e985, _0x3affc0) {
                    return _0x56e985 || _0x3affc0;
                },
                'iHZYB': _0x159555(0x603) + _0x159555(0x51d) + _0x159555(0x796) + _0x159555(0x1e0) + _0x159555(0x199) + '.',
                'VtHiM': _0x159555(0x702) + _0x159555(0x69f) + _0x159555(0x674) + _0x159555(0x7af) + _0x159555(0x213) + _0x159555(0x3e0) + '.',
                'XtRyd': _0x159555(0x38a) + _0x159555(0x251) + _0x159555(0x48d) + _0x159555(0x54d) + _0x159555(0x5d9) + _0x159555(0x6c1) + _0x159555(0x7f0),
                'kPcMn': _0x159555(0x737),
                'LvYKc': _0x159555(0x6b0),
                'nbURZ': _0x159555(0x325),
                'muWhH': _0x159555(0x232),
                'GhaUq': function (_0x20bb60, _0x32a0ad) {
                    return _0x20bb60 || _0x32a0ad;
                },
                'HDCwU': _0x159555(0x748) + _0x159555(0x58f),
                'OQFEf': function (_0xea214e, _0xa9aaf) {
                    return _0xea214e || _0xa9aaf;
                },
                'tZXSb': _0x159555(0x476) + _0x159555(0x20e) + _0x159555(0x235) + _0x159555(0x25c) + _0x159555(0x67a) + _0x159555(0x5d3),
                'reojB': _0x159555(0x1be),
                'wxawj': _0x159555(0x2a6),
                'DSmey': _0x159555(0x552),
                'UjzLs': _0x159555(0x259),
                'oEHfO': _0x159555(0x198),
                'jNVjC': _0x159555(0x491),
                'BqOFW': _0x159555(0x52a),
                'iVDvm': _0x159555(0x1b1),
                'cLQXa': _0x159555(0x576),
                'Hzako': _0x159555(0x43f),
                'tkcRS': function (_0x31e4fd, _0xf9d54a, _0xc6d0ab) {
                    return _0x31e4fd(_0xf9d54a, _0xc6d0ab);
                },
                'xqxDb': function (_0x501525, _0x182e4b) {
                    return _0x501525(_0x182e4b);
                },
                'VlbOJ': function (_0x377f34, _0x313e5c) {
                    return _0x377f34 === _0x313e5c;
                },
                'cuKlv': _0x159555(0x6df),
                'BCmeW': function (_0x597df0) {
                    return _0x597df0();
                },
                'CzvUl': function (_0x1d636b, _0x3574dc) {
                    return _0x1d636b === _0x3574dc;
                },
                'IzkEm': _0x159555(0x520),
                'uMJbI': _0x159555(0x73a) + _0x159555(0x75d) + _0x159555(0x40e) + _0x159555(0x625),
                'tMpPR': _0x159555(0x65d) + _0x159555(0x292) + _0x159555(0x80c) + _0x159555(0x817) + _0x159555(0x764) + _0x159555(0x41f),
                'glRte': function (_0x435e9f, _0x28e891) {
                    return _0x435e9f <= _0x28e891;
                },
                'XjOCC': _0x159555(0x2fb) + _0x159555(0x4c9) + _0x159555(0x785) + _0x159555(0x4b3) + _0x159555(0x3e1) + _0x159555(0x51c) + '.',
                'uPaDM': function (_0x5e4c8d, _0x5d4143) {
                    return _0x5e4c8d > _0x5d4143;
                },
                'HnNBa': function (_0x51ffed, _0x593194) {
                    return _0x51ffed + _0x593194;
                },
                'rXdBp': function (_0x163704, _0x477642) {
                    return _0x163704 - _0x477642;
                },
                'zWEtB': function (_0x26be4f, _0x5e37da, _0x27612d) {
                    return _0x26be4f(_0x5e37da, _0x27612d);
                },
                'uBKnj': function (_0x44df09, _0x59a228, _0x5a22fb) {
                    return _0x44df09(_0x59a228, _0x5a22fb);
                },
                'AOHPO': _0x159555(0x47f),
                'rFxdh': function (_0x60c59, _0x3bff79) {
                    return _0x60c59 === _0x3bff79;
                },
                'gVcbA': _0x159555(0x1d0),
                'NMGtu': function (_0x2c2227, _0x1d6211) {
                    return _0x2c2227 === _0x1d6211;
                },
                'GmkHh': function (_0x5bba26, _0x3be71c, _0x338cad) {
                    return _0x5bba26(_0x3be71c, _0x338cad);
                },
                'koEZZ': _0x159555(0x65d) + _0x159555(0x292) + _0x159555(0x80c) + _0x159555(0x817) + _0x159555(0x518) + _0x159555(0x1ba),
                'zbxnc': function (_0x30c142, _0xe10d90) {
                    return _0x30c142 === _0xe10d90;
                },
                'mgwfJ': _0x159555(0x3bf),
                'ohTHn': _0x159555(0x18e) + _0x159555(0x1e4) + _0x159555(0x4f4) + _0x159555(0x2e2) + _0x159555(0x200) + _0x159555(0x4f1) + _0x159555(0x33b),
                'OgplB': _0x159555(0x510) + _0x159555(0x2b4) + _0x159555(0x679) + _0x159555(0x229) + _0x159555(0x5ed) + _0x159555(0x23b) + _0x159555(0x688) + _0x159555(0x46e) + _0x159555(0x4cb) + _0x159555(0x536) + 't.',
                'PQMQv': function (_0xabce25, _0x25643c) {
                    return _0xabce25 !== _0x25643c;
                },
                'MfOQP': function (_0x5cde3e, _0xd38393) {
                    return _0x5cde3e > _0xd38393;
                },
                'qAbRC': function (_0x156463, _0x2af6e7) {
                    return _0x156463 > _0x2af6e7;
                },
                'DKNjw': function (_0x497b6f, _0x26e4e3) {
                    return _0x497b6f > _0x26e4e3;
                },
                'fqlVs': _0x159555(0x4f0) + _0x159555(0x688) + _0x159555(0x52b) + _0x159555(0x395) + _0x159555(0x1d5) + _0x159555(0x1d3) + _0x159555(0x6e0) + _0x159555(0x39e) + _0x159555(0x809) + _0x159555(0x6fc) + _0x159555(0x5cd) + _0x159555(0x29f),
                'mkgBR': _0x159555(0x830) + _0x159555(0x327) + _0x159555(0x77f) + _0x159555(0x477) + _0x159555(0x707) + _0x159555(0x651),
                'xJTot': function (_0xb9055d, _0x1e4862, _0x3b5558) {
                    return _0xb9055d(_0x1e4862, _0x3b5558);
                },
                'pZIOX': function (_0x203246, _0x24e0d7, _0x534595) {
                    return _0x203246(_0x24e0d7, _0x534595);
                },
                'ARQTs': function (_0x108274, _0x22ad0e) {
                    return _0x108274 < _0x22ad0e;
                },
                'ASrbj': function (_0x1db5ef, _0x58427e) {
                    return _0x1db5ef + _0x58427e;
                },
                'IGCGm': function (_0x524881, _0x1ac001, _0x4c4e29) {
                    return _0x524881(_0x1ac001, _0x4c4e29);
                },
                'Luefp': function (_0x54fbcf, _0x125383) {
                    return _0x54fbcf + _0x125383;
                },
                'bbwHX': _0x159555(0x445) + _0x159555(0x246) + _0x159555(0x408) + _0x159555(0x622),
                'xrlJt': _0x159555(0x60c) + _0x159555(0x70b) + _0x159555(0x4f3) + _0x159555(0x55e),
                'UPWPc': _0x159555(0x252) + _0x159555(0x427) + _0x159555(0x3e3),
                'tarNV': _0x159555(0x6cc) + _0x159555(0x292) + _0x159555(0x80c) + _0x159555(0x817) + _0x159555(0x518) + _0x159555(0x1ba),
                'TCdhB': _0x159555(0x3fb) + _0x159555(0x832),
                'UZAEX': _0x159555(0x334),
                'lBibz': _0x159555(0x210) + _0x159555(0x2b4) + _0x159555(0x679) + _0x159555(0x229) + _0x159555(0x5ed) + _0x159555(0x361),
                'jjlit': _0x159555(0x233),
                'xsJjT': _0x159555(0x252) + _0x159555(0x18b) + _0x159555(0x492) + _0x159555(0x258) + _0x159555(0x627) + _0x159555(0x5eb),
                'PNFoI': _0x159555(0x54c),
                'TCyxQ': _0x159555(0x6cc) + _0x159555(0x292) + _0x159555(0x80c) + _0x159555(0x817) + _0x159555(0x518) + _0x159555(0x31d) + _0x159555(0x3e8),
                'FPIzj': function (_0x36b978, _0x509dfc) {
                    return _0x36b978(_0x509dfc);
                },
                'zzblX': _0x159555(0x3fe),
                'kCCVa': function (_0x21fb58, _0x4f9c16) {
                    return _0x21fb58 === _0x4f9c16;
                },
                'spffH': _0x159555(0x63d) + _0x159555(0x38c) + _0x159555(0x545) + _0x159555(0x353) + _0x159555(0x7a0) + _0x159555(0x2e6),
                'DnPsa': function (_0x2851ff, _0x28129e, _0x426c4c) {
                    return _0x2851ff(_0x28129e, _0x426c4c);
                },
                'BTVSZ': function (_0x2c6c10, _0x85e4e9) {
                    return _0x2c6c10(_0x85e4e9);
                },
                'IDzaT': function (_0x3cbdc9, _0x29ce84, _0x1cbb73) {
                    return _0x3cbdc9(_0x29ce84, _0x1cbb73);
                },
                'ESXQe': function (_0x4be72d, _0x218fc2, _0x1fb642) {
                    return _0x4be72d(_0x218fc2, _0x1fb642);
                },
                'SxQMg': function (_0x9334b4, _0xa7eb1) {
                    return _0x9334b4 + _0xa7eb1;
                },
                'soHNa': function (_0x4e32c9, _0x431d32) {
                    return _0x4e32c9(_0x431d32);
                },
                'FPOHc': _0x159555(0x568) + _0x159555(0x6a8) + _0x159555(0x387) + _0x159555(0x1a4) + _0x159555(0x712) + _0x159555(0x3e9),
                'yuQQB': _0x159555(0x1e9),
                'oceNf': _0x159555(0x7ff) + _0x159555(0x69f) + _0x159555(0x674) + _0x159555(0x7af) + _0x159555(0x213) + _0x159555(0x3e0) + '.',
                'CwVgY': _0x159555(0x5be) + _0x159555(0x3d6) + _0x159555(0x40d),
                'dNXuN': function (_0x41dee7, _0x4e848a) {
                    return _0x41dee7 && _0x4e848a;
                },
                'Vrhkz': _0x159555(0x603) + _0x159555(0x51d) + _0x159555(0x32f) + _0x159555(0x653) + _0x159555(0x54a) + _0x159555(0x438),
                'ZigpU': _0x159555(0x568) + _0x159555(0x6a8) + _0x159555(0x387) + _0x159555(0x1a4) + _0x159555(0x712) + _0x159555(0x542) + 'me',
                'VXTQP': _0x159555(0x700),
                'SdXYJ': function (_0x21b541, _0x7d7d84) {
                    return _0x21b541 === _0x7d7d84;
                },
                'lhcFa': function (_0x2d84f8, _0x11b9ad) {
                    return _0x2d84f8 > _0x11b9ad;
                },
                'sjGoK': _0x159555(0x780) + _0x159555(0x2ef) + _0x159555(0x470) + _0x159555(0x2b0) + _0x159555(0x366) + _0x159555(0x1c4) + _0x159555(0x422) + _0x159555(0x4f8),
                'HEOfb': function (_0x1c1eca, _0x245dc9) {
                    return _0x1c1eca === _0x245dc9;
                },
                'LFpJy': _0x159555(0x4fa),
                'HEDNY': function (_0x3a6a70, _0xebe0fb) {
                    return _0x3a6a70 > _0xebe0fb;
                },
                'yBCRZ': _0x159555(0x4e4) + _0x159555(0x32a) + _0x159555(0x337) + _0x159555(0x6a8) + '.',
                'hmSNN': _0x159555(0x7ad) + _0x159555(0x66d) + _0x159555(0x320),
                'eMhWX': _0x159555(0x429) + _0x159555(0x4c5) + _0x159555(0x72b) + _0x159555(0x1aa) + _0x159555(0x26d) + _0x159555(0x741) + _0x159555(0x3f8) + _0x159555(0x34f) + _0x159555(0x40a) + _0x159555(0x6d7) + _0x159555(0x46b) + _0x159555(0x1ca) + '.',
                'Moxlw': _0x159555(0x35a) + _0x159555(0x53f) + _0x159555(0x459) + _0x159555(0x693),
                'vIjST': _0x159555(0x65a) + _0x159555(0x282) + _0x159555(0x61f) + _0x159555(0x716) + _0x159555(0x7eb) + _0x159555(0x4da),
                'vbhpu': function (_0x21cbd5, _0x48bb44) {
                    return _0x21cbd5 == _0x48bb44;
                },
                'KXdsp': _0x159555(0x1df),
                'BsGsL': function (_0x1d44bd, _0x5e92a7) {
                    return _0x1d44bd === _0x5e92a7;
                },
                'HsDNn': function (_0x1b6843, _0x11bc20, _0x9624bf) {
                    return _0x1b6843(_0x11bc20, _0x9624bf);
                },
                'SGRdn': _0x159555(0x37e),
                'WXvwn': _0x159555(0x3c4),
                'HADsr': _0x159555(0x7e5) + _0x159555(0x426),
                'BlLiw': _0x159555(0x237) + _0x159555(0x273) + _0x159555(0x25e) + 'g',
                'QfwuS': _0x159555(0x6dc) + 'r',
                'VfaIh': function (_0x21913d, _0x221615) {
                    return _0x21913d(_0x221615);
                },
                'QKhtb': _0x159555(0x37a) + _0x159555(0x46f) + _0x159555(0x684) + ':',
                'kSEXf': _0x159555(0x6ba) + _0x159555(0x500) + _0x159555(0x609) + _0x159555(0x3fd),
                'anxAk': _0x159555(0x5b4) + _0x159555(0x7cc),
                'Xxjig': function (_0x40b7fa, _0x5ea6df) {
                    return _0x40b7fa === _0x5ea6df;
                },
                'OUWCb': _0x159555(0x237) + _0x159555(0x273) + _0x159555(0x4d2) + 'g',
                'mJKWD': function (_0x2b6fc3, _0x342a70) {
                    return _0x2b6fc3 === _0x342a70;
                },
                'jEYac': _0x159555(0x237) + _0x159555(0x273) + _0x159555(0x26e) + 'g',
                'lzMBw': function (_0x3570aa, _0x13db9f) {
                    return _0x3570aa(_0x13db9f);
                },
                'uOnMu': function (_0x32a335, _0x5d518b) {
                    return _0x32a335 / _0x5d518b;
                },
                'zBjhV': function (_0x483a8f, _0x25786a) {
                    return _0x483a8f * _0x25786a;
                },
                'aXvaR': function (_0x14e03c, _0x1c3286) {
                    return _0x14e03c * _0x1c3286;
                },
                'RGeIm': function (_0x3ac180, _0x2c2ed1) {
                    return _0x3ac180 * _0x2c2ed1;
                },
                'DBAgY': _0x159555(0x668) + _0x159555(0x59d),
                'mUHeN': _0x159555(0x252) + _0x159555(0x300),
                'Kzyuh': _0x159555(0x37a) + _0x159555(0x82f) + _0x159555(0x2aa),
                'bgaUZ': _0x159555(0x6ba) + _0x159555(0x5c6) + _0x159555(0x32b),
                'qOvbY': _0x159555(0x2bb) + _0x159555(0x5f9),
                'xJMgM': _0x159555(0x804),
                'HUFFS': _0x159555(0x5ba),
                'guklP': _0x159555(0x2c0),
                'hvEWg': function (_0x5be773, _0x249940) {
                    return _0x5be773 / _0x249940;
                },
                'yCipL': _0x159555(0x7fe) + _0x159555(0x42c),
                'gfhdY': _0x159555(0x1b3),
                'MNhOA': function (_0x532bcc, _0xf594f3) {
                    return _0x532bcc - _0xf594f3;
                },
                'ISmSH': function (_0x29d6d3, _0xc2971) {
                    return _0x29d6d3 / _0xc2971;
                },
                'AJGdO': _0x159555(0x75a),
                'fOWpN': function (_0x43a67d, _0x244cdf) {
                    return _0x43a67d === _0x244cdf;
                },
                'gzMJD': _0x159555(0x1fd),
                'ljvyn': _0x159555(0x237) + _0x159555(0x66c) + _0x159555(0x736) + _0x159555(0x1cb) + _0x159555(0x28b) + _0x159555(0x6f2) + _0x159555(0x5ca) + _0x159555(0x671) + _0x159555(0x4d6) + _0x159555(0x5fd) + 'ng',
                'zPTvC': function (_0x128898, _0x3cadf6) {
                    return _0x128898 === _0x3cadf6;
                },
                'dNGLc': _0x159555(0x73c),
                'GlVUU': _0x159555(0x237) + _0x159555(0x66c) + _0x159555(0x657) + _0x159555(0x738) + _0x159555(0x4c7),
                'IuWEk': _0x159555(0x637),
                'VKlHI': _0x159555(0x237) + _0x159555(0x66c) + _0x159555(0x555) + _0x159555(0x5ad) + _0x159555(0x76b),
                'hJDMj': _0x159555(0x7ee),
                'WmefJ': _0x159555(0x237) + _0x159555(0x66c) + _0x159555(0x789) + _0x159555(0x5ad) + _0x159555(0x5f3) + 'ng',
                'HZzkS': function (_0x23cb03, _0x2764ed) {
                    return _0x23cb03 === _0x2764ed;
                },
                'rBYJW': _0x159555(0x6f4),
                'aILoh': _0x159555(0x237) + _0x159555(0x66c) + _0x159555(0x2da) + _0x159555(0x738) + _0x159555(0x643),
                'XGtyG': function (_0x13463a, _0x33cbbe) {
                    return _0x13463a === _0x33cbbe;
                },
                'vwgbW': _0x159555(0x4dc),
                'hfkXr': _0x159555(0x237) + _0x159555(0x66c) + _0x159555(0x413) + _0x159555(0x620) + _0x159555(0x19b),
                'onFUf': function (_0x22b9ed, _0x36bd86) {
                    return _0x22b9ed === _0x36bd86;
                },
                'ehhDh': _0x159555(0x287) + 'r',
                'NoBwF': _0x159555(0x237) + _0x159555(0x66c) + _0x159555(0x4ca) + _0x159555(0x738) + _0x159555(0x53d),
                'cAwPZ': function (_0x20d39b, _0x506851) {
                    return _0x20d39b(_0x506851);
                },
                'GxGQw': function (_0x3583da, _0x566b97) {
                    return _0x3583da - _0x566b97;
                },
                'clgRB': function (_0x385279, _0x18d5b5) {
                    return _0x385279 - _0x18d5b5;
                },
                'aJCVR': _0x159555(0x37a) + _0x159555(0x338) + _0x159555(0x4ff),
                'BhJwl': _0x159555(0x4ed) + _0x159555(0x54f),
                'zMxqm': _0x159555(0x252) + _0x159555(0x2d0),
                'UNCMe': _0x159555(0x1f8),
                'FkVWR': function (_0x51fa2f, _0x2091bb) {
                    return _0x51fa2f(_0x2091bb);
                },
                'ycoyD': function (_0x44dfe8, _0x2fc100) {
                    return _0x44dfe8 <= _0x2fc100;
                },
                'vyDmp': _0x159555(0x60a) + _0x159555(0x7ac) + _0x159555(0x602) + _0x159555(0x7b5) + _0x159555(0x400) + _0x159555(0x40b) + _0x159555(0x6ed),
                'LqBLe': function (_0x4f5bf1, _0x11ffb4, _0x2f21c6) {
                    return _0x4f5bf1(_0x11ffb4, _0x2f21c6);
                },
                'BDdbW': function (_0x1ef966, _0x42ca57) {
                    return _0x1ef966 + _0x42ca57;
                },
                'MglUz': function (_0x471528, _0x1c269b) {
                    return _0x471528 + _0x1c269b;
                },
                'dpcaC': function (_0x32b9e5, _0x3cf852) {
                    return _0x32b9e5 / _0x3cf852;
                },
                'bkHWp': function (_0xd1c276, _0x1dc98c) {
                    return _0xd1c276 / _0x1dc98c;
                },
                'SifqX': function (_0x37eec5, _0x33a08a) {
                    return _0x37eec5 >= _0x33a08a;
                },
                'DIKVu': function (_0x5ca1eb, _0x8bc78c) {
                    return _0x5ca1eb + _0x8bc78c;
                },
                'cjIWy': _0x159555(0x7f9) + _0x159555(0x5c8) + _0x159555(0x63a) + _0x159555(0x5a6) + _0x159555(0x195),
                'PELnB': _0x159555(0x4d4),
                'lDUua': _0x159555(0x710) + _0x159555(0x655) + _0x159555(0x617) + _0x159555(0x245) + _0x159555(0x590) + _0x159555(0x5c4) + _0x159555(0x348),
                'HmQap': function (_0x37ee1d, _0x4761b2) {
                    return _0x37ee1d + _0x4761b2;
                },
                'ApCjL': function (_0x13eb4b, _0x1345c4) {
                    return _0x13eb4b + _0x1345c4;
                },
                'BieUw': function (_0x2663aa, _0x49c5dc, _0xa59432) {
                    return _0x2663aa(_0x49c5dc, _0xa59432);
                },
                'KAwpe': _0x159555(0x2ae) + _0x159555(0x39b) + _0x159555(0x7c6) + _0x159555(0x1ac) + _0x159555(0x5d2),
                'KjevL': _0x159555(0x575),
                'EhTrj': function (_0x3ad2b4, _0x764ef0) {
                    return _0x3ad2b4(_0x764ef0);
                },
                'heuoZ': _0x159555(0x409) + _0x159555(0x560) + _0x159555(0x490) + _0x159555(0x644) + _0x159555(0x75e) + _0x159555(0x231) + _0x159555(0x1de) + _0x159555(0x3cf) + _0x159555(0x824) + _0x159555(0x591) + _0x159555(0x1eb) + _0x159555(0x31a) + 's.',
                'IucOG': _0x159555(0x19e) + _0x159555(0x44a) + _0x159555(0x821) + _0x159555(0x811) + _0x159555(0x77b) + _0x159555(0x52e),
                'ysEQL': function (_0x180e57, _0x4268cd) {
                    return _0x180e57 === _0x4268cd;
                },
                'lWkhm': _0x159555(0x43d),
                'flwzY': function (_0x6d3d95, _0xe8a257) {
                    return _0x6d3d95 === _0xe8a257;
                },
                'zaXLT': _0x159555(0x649),
                'lncPD': _0x159555(0x1da),
                'BahvM': function (_0x4c3050) {
                    return _0x4c3050();
                },
                'hboxm': function (_0x2eb901, _0x23e598) {
                    return _0x2eb901(_0x23e598);
                },
                'lCRek': function (_0x114536, _0x3185b8) {
                    return _0x114536 === _0x3185b8;
                },
                'KirPR': _0x159555(0x7e1),
                'xSGtE': _0x159555(0x414) + '2',
                'rRqxW': function (_0x564d03, _0x4ae39c) {
                    return _0x564d03 === _0x4ae39c;
                },
                'ZcooJ': _0x159555(0x18a),
                'vgTRD': function (_0x22765f, _0xae5af2) {
                    return _0x22765f >= _0xae5af2;
                },
                'Edmdg': _0x159555(0x242) + '5',
                'BBHwJ': function (_0x1589bc, _0xc49cbc) {
                    return _0x1589bc - _0xc49cbc;
                },
                'AgKJH': function (_0x11b043, _0x3505f9) {
                    return _0x11b043(_0x3505f9);
                },
                'QhkIA': _0x159555(0x5ec) + _0x159555(0x33f) + _0x159555(0x526) + _0x159555(0x397) + _0x159555(0x2d6),
                'hpkum': function (_0x4f1c6c, _0x4a1d6c) {
                    return _0x4f1c6c === _0x4a1d6c;
                },
                'qiCjm': _0x159555(0x4af),
                'pHKfl': _0x159555(0x428) + '2',
                'YKarM': function (_0x328d47, _0x5df704) {
                    return _0x328d47 - _0x5df704;
                },
                'zmjdU': _0x159555(0x619) + _0x159555(0x36c) + _0x159555(0x2fa) + _0x159555(0x642) + _0x159555(0x7f3),
                'YntaY': function (_0x2e2419, _0x2074f5) {
                    return _0x2e2419 === _0x2074f5;
                },
                'ECJxV': _0x159555(0x4c1),
                'Dbush': function (_0x3eb765, _0x377ad8) {
                    return _0x3eb765 / _0x377ad8;
                },
                'YrtgU': function (_0x39bb28, _0x3ca9cc) {
                    return _0x39bb28 - _0x3ca9cc;
                },
                'yEOfc': function (_0x3e0d1a, _0x17cb56) {
                    return _0x3e0d1a - _0x17cb56;
                },
                'tIZZO': _0x159555(0x70d) + _0x159555(0x656) + _0x159555(0x1f7),
                'FJYFX': _0x159555(0x2e7),
                'SilYC': function (_0x27c686, _0x582ad3) {
                    return _0x27c686 / _0x582ad3;
                },
                'GDwAQ': _0x159555(0x48c),
                'SnrCX': _0x159555(0x6b2) + _0x159555(0x7e7) + _0x159555(0x365) + _0x159555(0x4a5) + _0x159555(0x600) + _0x159555(0x61d) + _0x159555(0x29d) + _0x159555(0x440) + _0x159555(0x79f) + _0x159555(0x206),
                'EtZma': function (_0x2d24c0, _0x5866a3) {
                    return _0x2d24c0 < _0x5866a3;
                },
                'xpYIj': function (_0x1e4496, _0x226316) {
                    return _0x1e4496 === _0x226316;
                },
                'nCTYe': _0x159555(0x7a3),
                'Wcvfu': function (_0x3f251d, _0x104820) {
                    return _0x3f251d - _0x104820;
                },
                'VaCxe': function (_0x32ef50, _0x2b6d21) {
                    return _0x32ef50 - _0x2b6d21;
                },
                'pLPKG': function (_0x3b5b9e, _0x56a4eb) {
                    return _0x3b5b9e === _0x56a4eb;
                },
                'ZpHEH': _0x159555(0x5a4),
                'mUrDb': _0x159555(0x73b) + _0x159555(0x6f8) + _0x159555(0x44e),
                'oYycI': _0x159555(0x1c5) + _0x159555(0x50b) + _0x159555(0x3a0) + _0x159555(0x68f) + _0x159555(0x638) + _0x159555(0x458) + _0x159555(0x2f4),
                'STGKb': _0x159555(0x774) + _0x159555(0x655) + _0x159555(0x51f) + _0x159555(0x6eb) + _0x159555(0x201) + _0x159555(0x4c4),
                'iMPxF': _0x159555(0x608) + _0x159555(0x39d) + _0x159555(0x3ec) + _0x159555(0x1ce) + _0x159555(0x33d),
                'Asozb': _0x159555(0x1b4),
                'wCgXS': _0x159555(0x431) + _0x159555(0x7e8) + _0x159555(0x827),
                'sPbeM': _0x159555(0x4b5) + _0x159555(0x550) + _0x159555(0x6ec) + _0x159555(0x7f2) + _0x159555(0x64f) + _0x159555(0x75f) + _0x159555(0x69a) + _0x159555(0x63e) + _0x159555(0x81a),
                'ofatH': _0x159555(0x1a2),
                'XDBIo': _0x159555(0x751),
                'UtIYE': _0x159555(0x368) + _0x159555(0x27b),
                'zZBXR': _0x159555(0x2e4) + _0x159555(0x6d5) + _0x159555(0x5e0),
                'gtSOR': _0x159555(0x2fc) + _0x159555(0x65b) + _0x159555(0x645) + _0x159555(0x561) + _0x159555(0x538),
                'JjoCe': function (_0x54bb85, _0x4570b5) {
                    return _0x54bb85 === _0x4570b5;
                },
                'RfXuG': _0x159555(0x4b4),
                'THuVR': function (_0x333be2, _0xad7a85) {
                    return _0x333be2 === _0xad7a85;
                },
                'crRvk': function (_0x364dae, _0x5691e1) {
                    return _0x364dae === _0x5691e1;
                },
                'aZkzJ': _0x159555(0x38e),
                'fVCgg': function (_0x42f7c0, _0x3d6708) {
                    return _0x42f7c0 === _0x3d6708;
                },
                'GAzUa': function (_0x1b40dd, _0x476620) {
                    return _0x1b40dd === _0x476620;
                },
                'QPGPV': _0x159555(0x4a1),
                'YPzZD': function (_0x6833db, _0x5d28f6) {
                    return _0x6833db > _0x5d28f6;
                },
                'oaDiv': function (_0x339de2, _0x260d92) {
                    return _0x339de2 >= _0x260d92;
                },
                'RYEAZ': _0x159555(0x42f),
                'hnKfj': _0x159555(0x7e6) + _0x159555(0x558) + _0x159555(0x360) + _0x159555(0x781) + _0x159555(0x2f9),
                'NTRdT': _0x159555(0x730),
                'FrdQM': function (_0x476132, _0x3037fc) {
                    return _0x476132 >= _0x3037fc;
                },
                'Nsprt': _0x159555(0x7e6) + _0x159555(0x7d3) + _0x159555(0x1bb) + _0x159555(0x25f) + _0x159555(0x695),
                'Howfv': _0x159555(0x252) + _0x159555(0x67e) + _0x159555(0x7c9) + _0x159555(0x713) + _0x159555(0x33e) + _0x159555(0x196) + _0x159555(0x5cf),
                'RfyZq': _0x159555(0x51a) + _0x159555(0x25a) + _0x159555(0x1f0) + _0x159555(0x66e) + _0x159555(0x1ab) + _0x159555(0x57b) + 't.',
                'GUUCr': function (_0x5d937d, _0x2904f2) {
                    return _0x5d937d === _0x2904f2;
                },
                'LkfPD': _0x159555(0x6f7),
                'LRVzz': function (_0x6590c2, _0x23c9cd) {
                    return _0x6590c2 === _0x23c9cd;
                },
                'kEwvz': function (_0x388d13, _0x2c4b54) {
                    return _0x388d13 === _0x2c4b54;
                },
                'HhjPK': _0x159555(0x7f8) + _0x159555(0x3b0) + _0x159555(0x2ee) + _0x159555(0x3ff) + _0x159555(0x45e) + _0x159555(0x5cb) + _0x159555(0x240) + _0x159555(0x55c) + _0x159555(0x535),
                'rYbzi': _0x159555(0x212),
                'Xqkhw': _0x159555(0x6e5) + _0x159555(0x69d) + _0x159555(0x658) + _0x159555(0x6ee) + _0x159555(0x421) + _0x159555(0x45e) + _0x159555(0x5cf),
                'SCKkh': _0x159555(0x252) + _0x159555(0x508) + _0x159555(0x52c) + _0x159555(0x837) + _0x159555(0x4e6) + _0x159555(0x6d6) + _0x159555(0x532) + _0x159555(0x581),
                'nsGTg': _0x159555(0x503),
                'cjTkM': function (_0x5bfce3, _0x2f51de) {
                    return _0x5bfce3(_0x2f51de);
                },
                'ZdMFk': function (_0x27aba7, _0xbd132b) {
                    return _0x27aba7 <= _0xbd132b;
                },
                'aUtUL': _0x159555(0x529) + _0x159555(0x28c) + _0x159555(0x47d) + _0x159555(0x3ba) + _0x159555(0x1b6) + _0x159555(0x50c) + _0x159555(0x73d) + _0x159555(0x3b3) + _0x159555(0x71d) + _0x159555(0x23c) + '>',
                'LBLxp': function (_0x508848, _0x39a386) {
                    return _0x508848 >= _0x39a386;
                },
                'ILiBo': function (_0xfa1e4, _0x313b75) {
                    return _0xfa1e4 + _0x313b75;
                },
                'gSYNC': _0x159555(0x568) + _0x159555(0x5fc) + _0x159555(0x59c) + _0x159555(0x38b) + _0x159555(0x4ec),
                'YuUib': _0x159555(0x65c) + _0x159555(0x66a) + _0x159555(0x459) + _0x159555(0x693),
                'QuxSX': _0x159555(0x530) + _0x159555(0x439) + _0x159555(0x5e0),
                'OuDIx': function (_0x82d4ae, _0x50ecf0) {
                    return _0x82d4ae >= _0x50ecf0;
                },
                'oVraK': function (_0x726121, _0x1aef89) {
                    return _0x726121 + _0x1aef89;
                },
                'NWKSi': _0x159555(0x487) + _0x159555(0x7dd) + _0x159555(0x5eb),
                'hEbvr': _0x159555(0x7ab) + _0x159555(0x810) + _0x159555(0x2ad) + _0x159555(0x4f2) + _0x159555(0x308) + _0x159555(0x1bd) + '.',
                'FdLDE': _0x159555(0x568) + _0x159555(0x6a8) + _0x159555(0x387) + _0x159555(0x271) + _0x159555(0x44d) + _0x159555(0x1e2),
                'Flsuj': _0x159555(0x50a),
                'nOuvz': _0x159555(0x21f) + _0x159555(0x557) + _0x159555(0x4a6) + _0x159555(0x2b3) + _0x159555(0x2dd) + _0x159555(0x3a1) + _0x159555(0x81f) + _0x159555(0x6cf) + _0x159555(0x6fb) + _0x159555(0x224) + _0x159555(0x34c) + _0x159555(0x450) + _0x159555(0x268) + _0x159555(0x7cd) + _0x159555(0x4a3) + _0x159555(0x4ab) + _0x159555(0x3d9) + _0x159555(0x5d7) + _0x159555(0x367) + _0x159555(0x2c5) + _0x159555(0x1dc) + _0x159555(0x6ac) + _0x159555(0x585) + _0x159555(0x443) + _0x159555(0x3b6) + _0x159555(0x709) + _0x159555(0x628) + _0x159555(0x298) + _0x159555(0x1f2) + _0x159555(0x28e) + _0x159555(0x6c0) + _0x159555(0x3e5) + _0x159555(0x274) + _0x159555(0x721) + _0x159555(0x288) + _0x159555(0x302) + _0x159555(0x601) + _0x159555(0x407) + _0x159555(0x607) + _0x159555(0x647) + _0x159555(0x35b) + _0x159555(0x453) + _0x159555(0x6bf) + _0x159555(0x49a) + _0x159555(0x6cb) + _0x159555(0x6e2) + _0x159555(0x605) + _0x159555(0x680) + _0x159555(0x71f) + _0x159555(0x795) + _0x159555(0x41e) + _0x159555(0x6c5) + _0x159555(0x834) + _0x159555(0x3ea) + _0x159555(0x525) + _0x159555(0x434) + _0x159555(0x279) + _0x159555(0x633) + _0x159555(0x3da) + _0x159555(0x826) + _0x159555(0x7cb) + _0x159555(0x742) + _0x159555(0x544) + _0x159555(0x7db) + _0x159555(0x640) + _0x159555(0x694) + _0x159555(0x340) + _0x159555(0x3c3) + _0x159555(0x446) + _0x159555(0x25d) + _0x159555(0x606) + _0x159555(0x82e) + _0x159555(0x6b1) + _0x159555(0x401) + _0x159555(0x444) + _0x159555(0x328),
                'vdWWo': _0x159555(0x4db) + _0x159555(0x6f6) + _0x159555(0x3bb) + _0x159555(0x77e) + _0x159555(0x1c6) + _0x159555(0x5e1) + _0x159555(0x26a) + '.',
                'weTon': _0x159555(0x3fb) + _0x159555(0x189)
            }, _0x590734 = _0x52f241[_0x159555(0x77a)];
        try {
            const _0xf9d454 = JSON[_0x159555(0x18d)](await fs[_0x159555(0x2e1)](_0x486f0c[_0x159555(0x5ab)], _0x486f0c[_0x159555(0x595)])), _0x16d34a = _0xf9d454[_0x159555(0x813)](_0x15e602 => _0x15e602[_0x159555(0x7d2)] === _0x590734), _0x1dc144 = [
                    _0x486f0c[_0x159555(0x2b6)],
                    _0x486f0c[_0x159555(0x467)],
                    _0x486f0c[_0x159555(0x53e)],
                    _0x486f0c[_0x159555(0x2b2)],
                    _0x486f0c[_0x159555(0x1a6)],
                    _0x486f0c[_0x159555(0x6e1)],
                    _0x486f0c[_0x159555(0x5c1)],
                    _0x486f0c[_0x159555(0x582)],
                    _0x486f0c[_0x159555(0x55f)],
                    _0x486f0c[_0x159555(0x5da)]
                ], _0x57ac62 = async _0x4156c3 => {
                    const _0x385206 = _0x159555, _0x5cb1f3 = _0xf9d454[_0x385206(0x342)](_0x42d5d0 => _0x42d5d0[_0x385206(0x3f6)] === _0x4156c3[_0x385206(0x3f6)]);
                    _0xf9d454[_0x385206(0x5a0)](_0x5cb1f3, -0x6a * -0xe + 0xd2f * -0x1 + 0x764), await fs[_0x385206(0x21c)](_0x486f0c[_0x385206(0x5ab)], JSON[_0x385206(0x44f)](_0xf9d454)), _0x5385da[_0x385206(0x266)](_0x385206(0x243) + _0x4156c3[_0x385206(0x6ef)] + (_0x385206(0x59f) + _0x385206(0x69b)));
                }, _0x4a8fee = (_0x449335, _0x57e80b) => {
                    const _0x52577b = _0x159555;
                    if (_0x486f0c[_0x52577b(0x1a0)](_0x449335, 0x1fed + -0x385 + 0x1c5e * -0x1))
                        return _0x57e80b[0x1 * -0x1ecd + 0x261d + 0x12 * -0x68];
                    else {
                        if (_0x486f0c[_0x52577b(0x1a0)](_0x449335, -0x1 * 0x23bb + 0x1 * -0xb8c + 0x2f5b))
                            return _0x57e80b[-0x1 * -0x1061 + -0xc6b * -0x1 + -0x1ccb];
                        else {
                            if (_0x486f0c[_0x52577b(0x1a0)](_0x449335, -0xbf0 + 0x23b2 + 0x17a4 * -0x1))
                                return _0x57e80b[0x6cf * -0x5 + -0xefa + 0x3107];
                            else {
                                if (_0x486f0c[_0x52577b(0x728)](_0x449335, -0x1a8b + 0x21c4 + 0x25b * -0x3))
                                    return _0x57e80b[0x21e * 0x4 + 0x8c3 * -0x1 + -0x2 * -0x27];
                                else {
                                    if (_0x486f0c[_0x52577b(0x626)](_0x449335, -0xd4e + 0x3 * -0x565 + 0x1db9))
                                        return _0x57e80b[0x15a * 0x3 + -0x1 * 0x8b5 + 0x4ab];
                                    else
                                        return _0x57e80b[0x923 * 0x4 + 0x1a5 * 0x5 + -0x2cc0 * 0x1];
                                }
                            }
                        }
                    }
                }, _0x4c0efa = _0x21678c => _0x4a8fee(_0x21678c, [
                    -0x1 * 0xfd6 + 0xc7a + 0xeb * 0x4,
                    -0x3 * 0x5d5 + 0x2709 + -0x1512,
                    -0x1648 + 0x1d0 * 0xe + -0xd6 * 0x3,
                    0xbc1 + -0xc7 + -0xa46,
                    -0x91e + 0x1a09 + -0x51 * 0x33,
                    0x9c + 0xfb6 + -0x7ac * 0x2
                ]), _0x27f997 = _0x1f0920 => _0x4a8fee(_0x1f0920, [
                    -0x1c2b + -0x860 + 0xb9 * 0x33,
                    0x875 + 0x52 * 0x18 + -0xfad,
                    0x1d9 * -0xb + -0x1528 + 0x2a11 * 0x1,
                    -0x18f * -0xd + 0x190 * 0x2 + -0x16af,
                    -0x1 * 0x312 + -0xc1 * 0x16 + 0x1470,
                    0x3e5 * -0xa + 0x181 * -0x18 + 0x3cd * 0x14
                ]), _0x305e99 = _0x194cbd => {
                    const _0x31e9ac = _0x159555;
                    if (_0x486f0c[_0x31e9ac(0x728)](_0x194cbd, -0x345 + 0x1cbb + 0x2 * -0xcb6))
                        return _0x486f0c[_0x31e9ac(0x705)];
                    else {
                        if (_0x486f0c[_0x31e9ac(0x1a0)](_0x194cbd, -0x13 * -0x15e + 0x3 * 0x2ed + -0x22ad))
                            return _0x486f0c[_0x31e9ac(0x4b8)];
                        else {
                            if (_0x486f0c[_0x31e9ac(0x448)](_0x194cbd, 0xde8 + -0xb74 + -0x256))
                                return _0x486f0c[_0x31e9ac(0x254)];
                            else {
                                if (_0x486f0c[_0x31e9ac(0x626)](_0x194cbd, 0x449 * -0x3 + 0x3a * -0x71 + 0x7b9 * 0x5))
                                    return _0x486f0c[_0x31e9ac(0x1a8)];
                                else {
                                    if (_0x486f0c[_0x31e9ac(0x7be)](_0x194cbd, 0x62 * -0x25 + -0x33b * 0xc + 0x3520))
                                        return _0x486f0c[_0x31e9ac(0x2be)];
                                    else {
                                        if (_0x486f0c[_0x31e9ac(0x728)](_0x194cbd, 0xa03 + 0x1 * 0x247 + 0xc0e * -0x1))
                                            return _0x486f0c[_0x31e9ac(0x831)];
                                        else
                                            return _0x486f0c[_0x31e9ac(0x1d9)];
                                    }
                                }
                            }
                        }
                    }
                }, _0x324a39 = async _0x1282f6 => {
                    const _0x347ad0 = _0x159555;
                    let _0x52bd03 = _0x486f0c[_0x347ad0(0x778)](_0x1282f6[_0x347ad0(0x3fc)], -0x1f5b + -0x1cc7 * 0x1 + 0x6a * 0x95);
                    while (_0x486f0c[_0x347ad0(0x39a)](_0x1282f6[_0x347ad0(0x29c)], _0x52bd03) && _0x486f0c[_0x347ad0(0x6bb)](_0x1282f6[_0x347ad0(0x3fc)], -0x12 * 0x1a3 + 0x2 * 0xcad + 0x6 * 0xbb)) {
                        const _0xd26d0c = _0x486f0c[_0x347ad0(0x778)](_0x486f0c[_0x347ad0(0x3cd)](_0x1282f6[_0x347ad0(0x3fc)], -0xfa0 + -0x1927 + 0x28c8), -0x2e0 + -0x21d9 + -0xcc3 * -0x3);
                        _0x1282f6[_0x347ad0(0x3fc)]++, _0x1282f6[_0x347ad0(0x29c)] -= _0x52bd03;
                        const _0x195413 = _0x486f0c[_0x347ad0(0x3ad)](_0x4c0efa, _0x1282f6[_0x347ad0(0x3fc)]), _0x2c86ad = _0x486f0c[_0x347ad0(0x3ad)](_0x27f997, _0x1282f6[_0x347ad0(0x3fc)]), _0x13b2a4 = _0x486f0c[_0x347ad0(0x819)](_0x305e99, _0x1282f6[_0x347ad0(0x3fc)]);
                        _0x1282f6[_0x347ad0(0x1df)] = _0x13b2a4, _0x1282f6[_0x347ad0(0x6b8) + 't'] = _0x195413, _0x1282f6[_0x347ad0(0x666) + 't'] = _0x2c86ad, await _0x486f0c[_0x347ad0(0x7b6)](_0x581d1a);
                        const _0x4fe8d1 = _0xd26d0c + '+' + _0x1282f6[_0x347ad0(0x29c)];
                        _0x5385da[_0x347ad0(0x266)](_0x347ad0(0x3d3) + _0x347ad0(0x4bc) + _0x1282f6[_0x347ad0(0x6ef)] + (_0x347ad0(0x416) + _0x347ad0(0x3ca)) + _0x1282f6[_0x347ad0(0x3fc)] + (_0x347ad0(0x354) + _0x347ad0(0x1b7) + '\x20') + _0x13b2a4 + (_0x347ad0(0x442) + _0x347ad0(0x45a) + _0x347ad0(0x512) + _0x347ad0(0x2df) + 'o\x20') + _0x195413 + (_0x347ad0(0x495) + 'l\x20') + _0x1282f6[_0x347ad0(0x3fc)] + (_0x347ad0(0x2c8) + _0x347ad0(0x48f)) + _0x1282f6[_0x347ad0(0x6b8) + 't'] + _0x347ad0(0x80e) + _0x1282f6[_0x347ad0(0x666) + 't'] + (_0x347ad0(0x63f) + _0x347ad0(0x522)) + _0x4fe8d1 + _0x347ad0(0x5a2) + _0x52bd03 + '.'), _0x52bd03 = _0x486f0c[_0x347ad0(0x778)](_0x1282f6[_0x347ad0(0x3fc)], -0x6c2 + -0x8 * 0x49 + 0xa9a);
                    }
                }, _0x503edc = (_0x5447b6, _0x8b77c5) => {
                    const _0x27ac2a = _0x159555;
                    _0x5447b6[_0x27ac2a(0x29c)] += _0x8b77c5, _0x486f0c[_0x27ac2a(0x3ad)](_0x324a39, _0x5447b6), _0x486f0c[_0x27ac2a(0x1cc)](_0x581d1a);
                }, _0x581d1a = async () => {
                    const _0x6701be = _0x159555;
                    try {
                        await fs[_0x6701be(0x21c)](_0x486f0c[_0x6701be(0x5ab)], JSON[_0x6701be(0x44f)](_0xf9d454, null, -0x4e8 + -0x240c + 0x28f6));
                    } catch (_0x1505ed) {
                        console[_0x6701be(0x3cc)](_0x486f0c[_0x6701be(0x611)], _0x1505ed);
                    }
                }, _0x59610c = async () => {
                    const _0x793838 = _0x159555;
                    try {
                        const _0x447679 = await fs[_0x793838(0x2e1)](path[_0x793838(0x4bb)](__dirname, _0x486f0c[_0x793838(0x5ab)]), _0x486f0c[_0x793838(0x595)]);
                        return JSON[_0x793838(0x18d)](_0x447679);
                    } catch (_0x17d529) {
                        return [];
                    }
                }, _0x21c09c = async _0x465216 => {
                    const _0x2e211a = _0x159555;
                    await fs[_0x2e211a(0x21c)](path[_0x2e211a(0x4bb)](__dirname, _0x486f0c[_0x2e211a(0x5ab)]), JSON[_0x2e211a(0x44f)](_0x465216, null, 0x151 * -0x1 + -0x1b * -0x21 + -0x2e * 0xc));
                };
            function _0x1e14dd(_0x5d4a26) {
                const _0x12d0b7 = _0x159555;
                if (_0x486f0c[_0x12d0b7(0x616)](_0x5d4a26[_0x12d0b7(0x6fa)], -0x3 * 0x2f3 + -0x223 * 0x3 + 0xf42))
                    return _0x486f0c[_0x12d0b7(0x3bc)];
                let _0xe13441 = '';
                return _0x5d4a26[_0x12d0b7(0x1a5)](_0x1916a7 => {
                    const _0x150fc3 = _0x12d0b7, _0x27bf89 = _0xf9d454[_0x150fc3(0x813)](_0x2c0c67 => _0x2c0c67[_0x150fc3(0x3f6)] === _0x1916a7[_0x150fc3(0x42a)]);
                    _0xe13441 += _0x150fc3(0x239) + _0x27bf89[_0x150fc3(0x6ef)] + (_0x150fc3(0x6be) + ':\x20') + _0x1916a7[_0x150fc3(0x2ac)] + _0x150fc3(0x604) + _0x1916a7[_0x150fc3(0x66b)] + _0x150fc3(0x39f) + _0x1916a7[_0x150fc3(0x351)] + _0x150fc3(0x5dc);
                }), _0xe13441[_0x12d0b7(0x37d)]();
            }
            const _0x5b018e = () => {
                    const _0x126517 = _0x159555, _0x38dece = [
                            _0x486f0c[_0x126517(0x22c)],
                            _0x486f0c[_0x126517(0x270)],
                            _0x486f0c[_0x126517(0x5b5)],
                            _0x486f0c[_0x126517(0x295)],
                            _0x486f0c[_0x126517(0x3df)],
                            _0x486f0c[_0x126517(0x82c)],
                            _0x486f0c[_0x126517(0x6b9)],
                            _0x486f0c[_0x126517(0x4e5)],
                            _0x486f0c[_0x126517(0x418)],
                            _0x486f0c[_0x126517(0x29e)],
                            _0x486f0c[_0x126517(0x390)]
                        ];
                    return _0x38dece[Math[_0x126517(0x326)](_0x486f0c[_0x126517(0x76e)](Math[_0x126517(0x703)](), _0x38dece[_0x126517(0x6fa)]))];
                }, _0x49150d = _0x4b6abd => {
                    return new Promise((_0x24b70f, _0x3e0411) => {
                        const _0x3e9fda = _0x2c00;
                        try {
                            const _0x57423a = _0x486f0c[_0x3e9fda(0x690)](_0x5b018e);
                            _0x4b6abd ? (_0x4b6abd[_0x3e9fda(0x730)] = { 'type': _0x57423a }, fs[_0x3e9fda(0x7ed) + _0x3e9fda(0x22b)](_0x486f0c[_0x3e9fda(0x5ab)], JSON[_0x3e9fda(0x44f)](_0xf9d454, null, 0x207 * -0x3 + 0x4 * 0x769 + -0x1 * 0x178d), _0x486f0c[_0x3e9fda(0x78a)]), _0x3efdcf[_0x3e9fda(0x455) + 'e'](_0x3e9fda(0x1c9) + _0x4b6abd[_0x3e9fda(0x6ef)] + (_0x3e9fda(0x726) + _0x3e9fda(0x5c9) + _0x3e9fda(0x2b8) + '\x20') + _0x57423a + (_0x3e9fda(0x598) + _0x3e9fda(0x83d) + _0x3e9fda(0x7b8) + _0x3e9fda(0x7b9) + _0x3e9fda(0x3a5) + _0x3e9fda(0x5e3)), _0x4b6abd[_0x3e9fda(0x7d2)]), _0x486f0c[_0x3e9fda(0x816)](_0x24b70f)) : _0x486f0c[_0x3e9fda(0x5b0)](_0x3e0411, new Error(_0x486f0c[_0x3e9fda(0x56d)]));
                        } catch (_0x1ade1e) {
                            _0x486f0c[_0x3e9fda(0x819)](_0x3e0411, _0x1ade1e);
                        }
                    });
                };
            _0x486f0c[_0x159555(0x221)](setInterval, async () => {
                const _0x3e0407 = _0x159555;
                try {
                    _0x16d34a && await _0x486f0c[_0x3e0407(0x5b0)](_0x49150d, _0x16d34a);
                } catch (_0x42a96e) {
                    console[_0x3e0407(0x3cc)](_0x486f0c[_0x3e0407(0x6d3)], _0x42a96e);
                }
            }, -0x8542b * -0x12a + -0x2a4ba1e + 0x10 * -0x1e6e3f);
            const _0x1af3b7 = async _0x267db0 => {
                    const _0x8e7f51 = _0x159555;
                    try {
                        const _0x30977a = _0x8e7f51(0x7e9) + _0x8e7f51(0x4c6) + _0x8e7f51(0x65f) + _0x8e7f51(0x46d) + '=' + _0x267db0, _0x186a0f = await axios[_0x8e7f51(0x5c7)](_0x30977a);
                        if (_0x486f0c[_0x8e7f51(0x616)](_0x186a0f[_0x8e7f51(0x43b)], _0x486f0c[_0x8e7f51(0x1c7)]))
                            return _0x486f0c[_0x8e7f51(0x57c)];
                        else {
                            if (_0x486f0c[_0x8e7f51(0x37c)](_0x186a0f[_0x8e7f51(0x43b)], _0x486f0c[_0x8e7f51(0x2db)]))
                                return null;
                        }
                        return null;
                    } catch (_0x238cfc) {
                        return _0x5385da[_0x8e7f51(0x266)](), null;
                    }
                }, _0x39c0b7 = await _0x486f0c[_0x159555(0x835)](_0x1af3b7, _0x590734), _0x27a3d2 = async () => {
                    const _0xe2b53d = _0x159555, _0x2be987 = _0xf9d454[_0xe2b53d(0x197)](_0x4ae0f6 => _0x4ae0f6[_0xe2b53d(0x7d2)] === _0x590734);
                    if (_0x2be987) {
                        _0x5385da[_0xe2b53d(0x266)](_0x486f0c[_0xe2b53d(0x82a)]);
                        return;
                    }
                    const [_0x2a65e6, _0x2422c0, _0x2e2417] = _0x141f91[_0xe2b53d(0x486)](-0x5 * 0x283 + 0x1377 * -0x1 + 0x2007 * 0x1)[_0xe2b53d(0x4bb)]('\x20')[_0xe2b53d(0x1bf)](_0x486f0c[_0xe2b53d(0x2f7)]);
                    if (_0x486f0c[_0xe2b53d(0x4fe)](!_0x2a65e6, !_0x2422c0)) {
                        _0x5385da[_0xe2b53d(0x266)](_0x486f0c[_0xe2b53d(0x599)]);
                        return;
                    }
                    if (_0xf9d454[_0xe2b53d(0x197)](_0x54e71c => _0x54e71c[_0xe2b53d(0x6ef)][_0xe2b53d(0x6a0) + 'e']() === _0x2422c0[_0xe2b53d(0x6a0) + 'e']())) {
                        _0x5385da[_0xe2b53d(0x266)](_0x486f0c[_0xe2b53d(0x356)]);
                        return;
                    }
                    if (_0x1dc144[_0xe2b53d(0x677)](_0x2422c0[_0xe2b53d(0x6a0) + 'e']())) {
                        _0x5385da[_0xe2b53d(0x266)](_0x486f0c[_0xe2b53d(0x49b)]);
                        return;
                    }
                    switch (_0x2a65e6[_0xe2b53d(0x6a0) + 'e']()) {
                    case _0x486f0c[_0xe2b53d(0x759)]:
                    case _0x486f0c[_0xe2b53d(0x49f)]:
                    case _0x486f0c[_0xe2b53d(0x788)]:
                    case _0x486f0c[_0xe2b53d(0x70f)]:
                        const _0x4cef41 = _0x486f0c[_0xe2b53d(0x819)](generateUniqueID, _0xf9d454), _0x1d2e64 = {
                                'petID': _0x4cef41,
                                'uid': _0x590734,
                                'petName': _0x2422c0,
                                'gender': _0x2a65e6[_0xe2b53d(0x6a0) + 'e'](),
                                'bio': _0x486f0c[_0xe2b53d(0x20f)](_0x2e2417, _0x486f0c[_0xe2b53d(0x49c)]),
                                'energy': 0x32,
                                'happiness': 0x32,
                                'hungry': 0x32,
                                'winCount': 0x0,
                                'rank': _0x486f0c[_0xe2b53d(0x705)],
                                'level': 0x1,
                                'exp': 0x0,
                                'coins': 0x32
                            };
                        _0xf9d454[_0xe2b53d(0x553)](_0x1d2e64), await fs[_0xe2b53d(0x21c)](_0x486f0c[_0xe2b53d(0x5ab)], JSON[_0xe2b53d(0x44f)](_0xf9d454)), _0x5385da[_0xe2b53d(0x266)](_0xe2b53d(0x433) + _0xe2b53d(0x214) + _0xe2b53d(0x3b1) + _0xe2b53d(0x7d0) + _0xe2b53d(0x681) + _0x2422c0 + _0xe2b53d(0x540) + _0x2a65e6 + _0xe2b53d(0x393) + _0x486f0c[_0xe2b53d(0x379)](_0x2e2417, _0x486f0c[_0xe2b53d(0x49c)]) + (_0xe2b53d(0x249) + _0xe2b53d(0x519) + _0xe2b53d(0x62b) + _0xe2b53d(0x3ae) + _0xe2b53d(0x574) + _0xe2b53d(0x646) + _0xe2b53d(0x62d)));
                        break;
                    default:
                        _0x5385da[_0xe2b53d(0x266)](_0x486f0c[_0xe2b53d(0x41b)]);
                    }
                };
            if (_0x486f0c[_0x159555(0x2d4)](_0x141f91[0xb8 + -0x1 * -0x22a3 + -0x1af * 0x15], _0x486f0c[_0x159555(0x285)]))
                _0x486f0c[_0x159555(0x820)](_0x27a3d2);
            else {
                if (_0x486f0c[_0x159555(0x5b3)](_0x141f91[-0xdcc + -0x1 * 0x856 + 0x1622], _0x486f0c[_0x159555(0x6c7)])) {
                    if (_0x486f0c[_0x159555(0x2d4)](_0x39c0b7, _0x486f0c[_0x159555(0x57c)])) {
                        _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x264)]);
                        return;
                    }
                    if (!_0x16d34a) {
                        _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x315)]);
                        return;
                    }
                    const _0x3d08ae = _0x141f91[0x4 * -0x61a + 0x201 + 0x1668]?.[_0x159555(0x6a0) + 'e'](), {items: _0x2ecdff} = _0x16d34a, _0x451ab7 = _0x2ecdff, _0x42ac4a = _0x451ab7?.[_0x3d08ae] || 0x21 * 0x25 + 0x19b1 + -0x1e76 * 0x1;
                    if (_0x486f0c[_0x159555(0x6fd)](_0x16d34a[_0x159555(0x7a2)], 0x214f + 0x11fb * 0x2 + -0x17 * 0x303)) {
                        _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x652)]);
                        return;
                    }
                    if (_0x486f0c[_0x159555(0x717)](_0x42ac4a, -0x2195 + -0x43f + 0x25d4)) {
                        const _0x2feb93 = Math[_0x159555(0x2f0)](_0x486f0c[_0x159555(0x324)](_0x16d34a[_0x159555(0x735)], foodTypes[_0x3d08ae]), 0x2117 + -0x3 * 0x3 + -0x103c * 0x2), _0x554cf9 = Math[_0x159555(0x636)](_0x486f0c[_0x159555(0x2b7)](_0x16d34a[_0x159555(0x7a2)], foodTypes[_0x3d08ae]), -0x2125 * -0x1 + 0x1b4d * -0x1 + -0x5d8);
                        _0x16d34a[_0x159555(0x735)] = _0x2feb93, _0x16d34a[_0x159555(0x7a2)] = _0x554cf9, _0x451ab7[_0x3d08ae]--, await fs[_0x159555(0x21c)](_0x486f0c[_0x159555(0x5ab)], JSON[_0x159555(0x44f)](_0xf9d454)), _0x5385da[_0x159555(0x266)](_0x159555(0x2a2) + _0x159555(0x385) + _0x159555(0x632) + _0x3d08ae + (_0x159555(0x68b) + _0x159555(0x2df) + 'o\x20') + _0x2feb93 + '.');
                        const _0x1ea544 = _0x486f0c[_0x159555(0x5ea)](getRandomNumber, -0xfc5 + -0x1 * 0x7a1 + 0x97 * 0x28, -0x7a3 + 0x1 * 0x25f7 + 0x10 * -0x1df);
                        _0x486f0c[_0x159555(0x787)](_0x503edc, _0x16d34a, _0x1ea544);
                    } else {
                        const _0x26c054 = _0x451ab7 ? Object[_0x159555(0x2fe)](_0x451ab7)[_0x159555(0x4bb)](',\x20') : _0x486f0c[_0x159555(0x5fe)];
                        _0x5385da[_0x159555(0x266)](_0x159555(0x60b) + _0x159555(0x50e) + _0x3d08ae + (_0x159555(0x2af) + ':\x20') + _0x26c054 + (_0x159555(0x52d) + _0x159555(0x81e) + _0x159555(0x5c2) + _0x159555(0x521) + _0x159555(0x263) + _0x159555(0x502)));
                    }
                } else {
                    if (_0x486f0c[_0x159555(0x80d)](_0x141f91[-0x1c78 + -0x20a8 + -0x6 * -0xa30], _0x486f0c[_0x159555(0x30b)])) {
                        if (_0x486f0c[_0x159555(0x207)](_0x39c0b7, _0x486f0c[_0x159555(0x57c)])) {
                            _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x264)]);
                            return;
                        }
                        if (_0x16d34a) {
                            _0x16d34a[_0x159555(0x2a0)] += -0x10 * 0x247 + 0x1ea1 + 0x2ea * 0x2, _0x16d34a[_0x159555(0x735)] -= -0x613 * 0x5 + -0x47 + -0x1eab * -0x1, _0x16d34a[_0x159555(0x7a2)] += -0x1942 + 0x1217 + 0x730, await fs[_0x159555(0x21c)](_0x486f0c[_0x159555(0x5ab)], JSON[_0x159555(0x44f)](_0xf9d454)), _0x5385da[_0x159555(0x266)](_0x159555(0x425) + _0x159555(0x35c) + _0x159555(0x411) + _0x159555(0x456) + _0x159555(0x78d) + '\x20' + _0x16d34a[_0x159555(0x2a0)] + (_0x159555(0x692) + _0x159555(0x277) + _0x159555(0x19c)) + _0x16d34a[_0x159555(0x735)] + '.');
                            const _0xabe798 = _0x486f0c[_0x159555(0x814)](getRandomNumber, 0x1358 + -0x13 * 0x6f + -0xafd, 0x1 * -0x22f3 + -0x1ec8 + 0x420b);
                            _0x486f0c[_0x159555(0x787)](_0x503edc, _0x16d34a, _0xabe798);
                        } else
                            _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x635)]);
                    } else {
                        if (_0x486f0c[_0x159555(0x2ab)](_0x141f91[-0x4b8 * 0x3 + -0xe24 + 0x1c4c], _0x486f0c[_0x159555(0x316)]))
                            try {
                                if (_0x486f0c[_0x159555(0x2d4)](_0x39c0b7, _0x486f0c[_0x159555(0x57c)])) {
                                    _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x264)]);
                                    return;
                                }
                                if (_0x16d34a) {
                                    if (_0x16d34a && _0x16d34a[_0x159555(0x6f7)])
                                        return _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x7e2)]);
                                    const _0x5344c0 = _0x141f91[0x2028 + 0x1068 + -0x308f], _0x27f309 = _0xf9d454[_0x159555(0x813)](_0xf5fc39 => _0xf5fc39[_0x159555(0x3f6)] === _0x5344c0);
                                    if (_0x27f309 && _0x27f309[_0x159555(0x6f7)])
                                        return _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x4b9)]);
                                    if (_0x27f309 && _0x27f309[_0x159555(0x730)])
                                        return _0x5385da[_0x159555(0x266)](_0x159555(0x24e) + _0x27f309[_0x159555(0x6ef)] + (_0x159555(0x327) + _0x159555(0x77f) + _0x159555(0x477) + _0x159555(0x707) + _0x159555(0x651)));
                                    if (_0x27f309) {
                                        if (_0x486f0c[_0x159555(0x6c6)](_0x16d34a[_0x159555(0x7d2)], _0x27f309[_0x159555(0x7d2)])) {
                                            if (_0x486f0c[_0x159555(0x6d9)](_0x16d34a[_0x159555(0x735)], -0x4d5 * -0x5 + -0x1 * -0x2125 + -0x2 * 0x1ca7)) {
                                                if (_0x486f0c[_0x159555(0x7c4)](_0x27f309[_0x159555(0x735)], -0x1648 * -0x1 + -0x603 * 0x4 + 0x1c4 * 0x1)) {
                                                    const _0x44a0aa = _0x486f0c[_0x159555(0x814)](getRandomNumber, -0xbc3 * -0x2 + 0xd5d + -0x9 * 0x417, 0x1 * -0x1aea + -0x69d * -0x2 + -0x1 * -0xde2);
                                                    if (_0x16d34a[_0x159555(0x4a1)] && _0x486f0c[_0x159555(0x7f7)](_0x16d34a[_0x159555(0x4a1)], -0x15b5 * 0x1 + -0x2f9 * 0x2 + 0x1bd9))
                                                        return _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x6a4)]);
                                                    if (_0x27f309[_0x159555(0x4a1)] && _0x486f0c[_0x159555(0x7f7)](_0x27f309[_0x159555(0x4a1)], 0x5 * 0x137 + -0x19d3 * -0x1 + -0x7ed * 0x4))
                                                        return _0x5385da[_0x159555(0x266)](_0x159555(0x765) + _0x27f309[_0x159555(0x6ef)] + (_0x159555(0x688) + _0x159555(0x52b) + _0x159555(0x395) + _0x159555(0x1d5) + _0x159555(0x3f9)));
                                                    if (_0x16d34a[_0x159555(0x730)])
                                                        return _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x83b)]);
                                                    const _0x3f67bf = _0x486f0c[_0x159555(0x787)](getRandomNumber, -0x6 * -0x437 + 0x2 * -0x104f + 0x75e, 0x2dd * -0x2 + 0x1 * 0x2252 + -0x721 * 0x4), _0x1639fd = _0x486f0c[_0x159555(0x724)](getRandomNumber, -0x1574 + 0xb * 0x2d1 + 0x1 * -0x97d, -0x1 * -0x1b37 + -0x4c7 * 0x1 + -0x9f * 0x24);
                                                    let _0x2c9184, _0x19357e;
                                                    _0x486f0c[_0x159555(0x6d9)](_0x3f67bf, _0x1639fd) ? (_0x2c9184 = _0x16d34a, _0x19357e = _0x27f309) : (_0x2c9184 = _0x27f309, _0x19357e = _0x16d34a, _0x19357e[_0x159555(0x4a1)] = _0x486f0c[_0x159555(0x324)](_0x19357e[_0x159555(0x4a1)] || -0x455 + -0x7 * -0x191 + -0x11b * 0x6, _0x44a0aa));
                                                    const _0x5330a3 = _0x486f0c[_0x159555(0x2f5)](getRandomNumber, 0x20e7 + -0x20ff * -0x1 + 0xf * -0x464, -0x1990 + -0x1273 * 0x1 + 0x2c35);
                                                    _0x19357e[_0x159555(0x735)] -= _0x5330a3;
                                                    _0x486f0c[_0x159555(0x818)](_0x19357e[_0x159555(0x735)], -0x1 * 0x18d1 + -0x1 * -0x193 + 0x173e) && (_0x19357e[_0x159555(0x735)] = 0xfae * 0x2 + -0x1a * 0x7 + -0xf53 * 0x2);
                                                    _0x2c9184[_0x159555(0x283)] = _0x486f0c[_0x159555(0x4d9)](_0x2c9184[_0x159555(0x283)] || 0x12 * 0x226 + 0xba8 * 0x1 + -0x3254, 0x1cb + 0x1be9 + -0x1db3);
                                                    const _0x5a81fc = _0x486f0c[_0x159555(0x2a4)](getRandomNumber, -0x5e * 0x13 + 0x38d + -0x3d1 * -0x1, -0x6d1 * -0x1 + 0x14c6 + -0x17af);
                                                    _0x2c9184[_0x159555(0x2bf)] = _0x486f0c[_0x159555(0x46a)](_0x2c9184[_0x159555(0x2bf)] || 0x9e + 0xed6 + 0x2b * -0x5c, _0x5a81fc), fs[_0x159555(0x7ed) + _0x159555(0x22b)](_0x486f0c[_0x159555(0x5ab)], JSON[_0x159555(0x44f)](_0xf9d454, null, -0x1780 + 0x1172 + 0x610), _0x486f0c[_0x159555(0x78a)]), _0x5385da[_0x159555(0x266)](_0x159555(0x706) + _0x159555(0x43a) + _0x2c9184[_0x159555(0x6ef)] + '!\x20' + _0x19357e[_0x159555(0x6ef)] + (_0x159555(0x404) + _0x159555(0x667)) + _0x5330a3 + (_0x159555(0x48b) + _0x159555(0x807) + _0x159555(0x639) + 'f\x20') + _0x44a0aa + '.\x20' + _0x2c9184[_0x159555(0x6ef)] + (_0x159555(0x415) + _0x159555(0x457)) + _0x2c9184[_0x159555(0x283)] + _0x159555(0x1c2) + _0x5a81fc + _0x159555(0x475));
                                                    const _0x337201 = _0x486f0c[_0x159555(0x7c4)](_0x16d34a[_0x159555(0x735)], 0x2510 * -0x1 + -0x2353 + 0x4863) ? 0xded + 0x111 * -0x15 + 0x940 : -0x19 * -0x65 + 0x253d + -0x2eca;
                                                    _0x486f0c[_0x159555(0x2a4)](_0x503edc, _0x16d34a, _0x337201);
                                                } else
                                                    _0x5385da[_0x159555(0x266)](_0x159555(0x297) + _0x27f309[_0x159555(0x6ef)] + (_0x159555(0x708) + _0x159555(0x3b2) + _0x159555(0x3f8) + _0x159555(0x3cb) + _0x159555(0x5d5) + _0x159555(0x763) + 'y.'));
                                            } else
                                                _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x3f5)]);
                                        } else
                                            _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x38d)]);
                                    } else
                                        _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x615)]);
                                } else
                                    _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x5f5)]);
                            } catch (_0x1f0dc8) {
                                return console[_0x159555(0x3cc)](_0x486f0c[_0x159555(0x57f)], _0x1f0dc8), _0x5385da[_0x159555(0x266)](_0x159555(0x19e) + _0x159555(0x44a) + _0x159555(0x821) + _0x159555(0x811) + _0x159555(0x6bd) + _0x159555(0x71a) + _0x1f0dc8);
                            }
                        else {
                            if (_0x486f0c[_0x159555(0x5b3)](_0x141f91[0x4e * -0x76 + 0xcc * 0x23 + 0x810], _0x486f0c[_0x159555(0x3a3)])) {
                                if (_0x486f0c[_0x159555(0x37c)](_0x39c0b7, _0x486f0c[_0x159555(0x57c)])) {
                                    _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x264)]);
                                    return;
                                }
                                if (_0x141f91[0x3 * 0x25a + -0x1 * 0x1bb3 + 0x14a6]) {
                                    const _0x523824 = _0x141f91[0x1bf + 0x12c0 + -0x147e], _0x1fa6dc = _0xf9d454[_0x159555(0x813)](_0xae3438 => _0xae3438[_0x159555(0x3f6)] === _0x523824);
                                    if (_0x1fa6dc && _0x1fa6dc[_0x159555(0x6f7)])
                                        return _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x5d6)]);
                                    if (_0x1fa6dc) {
                                        const _0x1144d4 = _0x1fa6dc[_0x159555(0x3f6)], _0x2b7e1c = _0x1fa6dc[_0x159555(0x283)], _0x53d9cf = _0x1fa6dc[_0x159555(0x6ef)], _0x14e0b8 = _0x1fa6dc[_0x159555(0x6bc)], _0x3e75cb = _0x1fa6dc[_0x159555(0x735)], _0x11f9b9 = _0x1fa6dc[_0x159555(0x2a0)], _0x546db4 = _0x1fa6dc[_0x159555(0x7a2)], _0x53f8c2 = _0x1fa6dc[_0x159555(0x1df)], _0x1c763d = _0x1fa6dc[_0x159555(0x3fc)], _0x554d9c = _0x1fa6dc[_0x159555(0x29c)], _0x5bb6aa = _0x1fa6dc[_0x159555(0x2bf)] || -0x9c8 * -0x1 + -0xcf8 + -0x2 * -0x198, _0x4df9e7 = _0x1fa6dc[_0x159555(0x2a7)] ? '' + _0x1fa6dc[_0x159555(0x2a7)][_0x159555(0x3b5)] : _0x486f0c[_0x159555(0x2a9)];
                                        _0x5385da[_0x159555(0x266)](_0x159555(0x7b0) + _0x159555(0x7c2) + _0x53d9cf + (_0x159555(0x4e1) + ':\x20') + _0x1144d4 + (_0x159555(0x362) + _0x159555(0x52f)) + _0x2b7e1c + (_0x159555(0x67d) + '\x20') + _0x14e0b8 + (_0x159555(0x34d) + '\x20') + _0x3e75cb + (_0x159555(0x7fb) + _0x159555(0x203)) + _0x11f9b9 + (_0x159555(0x4f7) + '\x20') + _0x546db4 + _0x159555(0x56c) + _0x53f8c2 + _0x159555(0x3d2) + _0x1c763d + _0x159555(0x23f) + _0x554d9c + _0x159555(0x45f) + _0x5bb6aa + _0x159555(0x699) + _0x4df9e7);
                                    } else
                                        _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x35f)]);
                                } else {
                                    if (_0x16d34a) {
                                        const _0x361015 = _0x16d34a[_0x159555(0x3f6)], _0x4fece5 = _0x16d34a[_0x159555(0x283)], _0x56f626 = _0x16d34a[_0x159555(0x6ef)], _0x9e83cb = _0x16d34a[_0x159555(0x6bc)], _0x24ff65 = _0x16d34a[_0x159555(0x735)], _0x1b282b = _0x16d34a[_0x159555(0x2a0)], _0x65309 = _0x16d34a[_0x159555(0x7a2)], _0xb23b2a = _0x16d34a[_0x159555(0x1df)], _0x4cba8c = _0x16d34a[_0x159555(0x3fc)], _0x312ecf = _0x16d34a[_0x159555(0x29c)], _0x5a4cf4 = _0x16d34a[_0x159555(0x2bf)] || -0x1bfb + -0x23f + 0x1e3a, _0x547686 = _0x16d34a[_0x159555(0x2a7)] ? '' + _0x16d34a[_0x159555(0x2a7)][_0x159555(0x3b5)] : _0x486f0c[_0x159555(0x389)];
                                        _0x5385da[_0x159555(0x266)](_0x159555(0x710) + _0x159555(0x6a5) + _0x159555(0x61b) + '\x20' + _0x56f626 + (_0x159555(0x565) + '\x20') + _0x361015 + (_0x159555(0x362) + _0x159555(0x52f)) + _0x4fece5 + (_0x159555(0x67d) + '\x20') + _0x9e83cb + (_0x159555(0x34d) + '\x20') + _0x24ff65 + (_0x159555(0x7fb) + _0x159555(0x203)) + _0x1b282b + (_0x159555(0x4f7) + '\x20') + _0x65309 + _0x159555(0x56c) + _0xb23b2a + _0x159555(0x3d2) + _0x4cba8c + _0x159555(0x23f) + _0x312ecf + _0x159555(0x45f) + _0x5a4cf4 + (_0x159555(0x5df) + _0x159555(0x386)) + _0x547686);
                                    } else
                                        _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x61e)]);
                                }
                                _0x486f0c[_0x159555(0x304)](_0x324a39, _0x16d34a);
                            } else {
                                if (_0x486f0c[_0x159555(0x2ab)](_0x141f91[0xf51 * 0x1 + 0x17a5 + -0x137b * 0x2], _0x486f0c[_0x159555(0x3f4)]))
                                    try {
                                        if (_0x486f0c[_0x159555(0x471)](_0x39c0b7, _0x486f0c[_0x159555(0x57c)])) {
                                            _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x264)]);
                                            return;
                                        }
                                        if (_0x16d34a) {
                                            _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x43e)]);
                                            const _0xf39f44 = _0x486f0c[_0x159555(0x6d0)](getRandomNumber, 0x23f7 + -0x1731 + -0x10e, 0x4c1e + 0x1a35 * 0x1 + -0x3f43);
                                            await _0x486f0c[_0x159555(0x34a)](sleep, _0xf39f44);
                                            const _0x5bdd66 = _0x486f0c[_0x159555(0x473)](getRandomNumber, 0x5e7 + 0x1 * 0x882 + -0xe5a, -0x2 * 0xeb1 + -0x1 * -0xf35 + 0xe4b * 0x1), _0x3da8a4 = _0x486f0c[_0x159555(0x746)](getRandomNumber, -0x141 * -0x1 + 0xa5e + -0xb * 0x10e, -0x1 * -0xdc9 + 0x1 * -0x2336 + 0x157c);
                                            _0x16d34a[_0x159555(0x735)] = Math[_0x159555(0x2f0)](_0x486f0c[_0x159555(0x26b)](_0x16d34a[_0x159555(0x735)], _0x5bdd66), -0xd0f + 0x1a52 + -0xcdf), _0x16d34a[_0x159555(0x2a0)] = Math[_0x159555(0x2f0)](_0x486f0c[_0x159555(0x324)](_0x16d34a[_0x159555(0x2a0)], _0x3da8a4), -0x647 + -0x1d0e + -0x9b * -0x3b), await fs[_0x159555(0x21c)](_0x486f0c[_0x159555(0x5ab)], JSON[_0x159555(0x44f)](_0xf9d454)), _0x5385da[_0x159555(0x266)](_0x159555(0x750) + _0x159555(0x4cd) + _0x159555(0x22f) + _0x159555(0x570) + _0x16d34a[_0x159555(0x735)] + (_0x159555(0x272) + _0x159555(0x691) + _0x159555(0x35d)) + _0x16d34a[_0x159555(0x2a0)] + '!');
                                            const _0x10f4e2 = 0xdab + 0x3 * 0xb6c + -0x2f8b;
                                            _0x486f0c[_0x159555(0x473)](_0x503edc, _0x16d34a, _0x10f4e2), _0x486f0c[_0x159555(0x34e)](_0x324a39, _0x16d34a);
                                        } else
                                            _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x6cd)]);
                                    } catch (_0x463fe1) {
                                        console[_0x159555(0x3cc)](_0x486f0c[_0x159555(0x57f)], _0x463fe1), _0x5385da[_0x159555(0x266)](_0x159555(0x3fb) + _0x159555(0x230) + _0x159555(0x6d2) + _0x159555(0x26c) + _0x159555(0x53a) + _0x159555(0x305) + _0x463fe1);
                                    }
                                else {
                                    if (_0x486f0c[_0x159555(0x207)](_0x141f91[-0x3e6 * 0x8 + -0x4f1 * 0x6 + 0xd * 0x4ae], _0x486f0c[_0x159555(0x18f)])) {
                                        if (_0x486f0c[_0x159555(0x2ab)](_0x39c0b7, _0x486f0c[_0x159555(0x57c)])) {
                                            _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x264)]);
                                            return;
                                        }
                                        if (_0x16d34a) {
                                            const _0x40b05d = _0x141f91[_0x159555(0x486)](0x2 * 0x58f + 0x21c3 + -0x2cdf)[_0x159555(0x4bb)]('\x20'), _0x1a8a7c = _0x141f91[0x7eb + -0x26a4 + -0x19e * -0x13];
                                            if (_0xf9d454[_0x159555(0x197)](_0x2ac7c4 => _0x2ac7c4[_0x159555(0x6ef)][_0x159555(0x6a0) + 'e']() === _0x40b05d[_0x159555(0x6a0) + 'e']()))
                                                _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x392)]);
                                            else {
                                                if (_0x1dc144[_0x159555(0x677)](_0x40b05d[_0x159555(0x6a0) + 'e']()))
                                                    _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x314)]);
                                                else
                                                    _0x486f0c[_0x159555(0x364)](_0x40b05d, _0x1a8a7c) ? (_0x16d34a[_0x159555(0x6bc)] = _0x1a8a7c, _0x16d34a[_0x159555(0x6ef)] = _0x40b05d, await fs[_0x159555(0x21c)](_0x486f0c[_0x159555(0x5ab)], JSON[_0x159555(0x44f)](_0xf9d454)), _0x5385da[_0x159555(0x266)](_0x159555(0x35e) + _0x159555(0x290) + _0x159555(0x484) + _0x159555(0x6ae) + _0x40b05d + (_0x159555(0x299) + _0x159555(0x6f1)) + _0x1a8a7c)) : _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x24b)]);
                                            }
                                        } else
                                            _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x3ed)]);
                                    } else {
                                        if (_0x486f0c[_0x159555(0x37c)](_0x141f91[-0x1 * -0x9a9 + 0x1233 + -0x1bdc], _0x486f0c[_0x159555(0x21a)])) {
                                            if (_0x486f0c[_0x159555(0x30e)](_0x39c0b7, _0x486f0c[_0x159555(0x57c)])) {
                                                _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x264)]);
                                                return;
                                            }
                                            if (_0x16d34a) {
                                                const _0x518b92 = _0xf9d454[_0x159555(0x1fc)](_0x38d5e3 => _0x38d5e3[_0x159555(0x283)] && _0x38d5e3[_0x159555(0x283)] > -0x3d4 + -0x1 * 0x1d + 0x3f1)[_0x159555(0x2c7)]((_0x20be74, _0x5a0539) => _0x5a0539[_0x159555(0x283)] - _0x20be74[_0x159555(0x283)])[_0x159555(0x70a)](_0x562679 => {
                                                    const _0x15274b = _0x159555;
                                                    return {
                                                        'petName': _0x562679[_0x15274b(0x6ef)],
                                                        'petID': _0x562679[_0x15274b(0x3f6)],
                                                        'winCount': _0x562679[_0x15274b(0x283)] || 0x1533 + -0x190d + -0x1 * -0x3da
                                                    };
                                                });
                                                if (_0x486f0c[_0x159555(0x1bc)](_0x518b92[_0x159555(0x6fa)], 0x1 * 0x1a21 + 0xf52 + 0x51 * -0x83)) {
                                                    const _0x1e0954 = _0x518b92[_0x159555(0x70a)]((_0x7d5457, _0x131e08) => _0x159555(0x7c7) + (_0x131e08 + (-0x410 + -0x1 * -0x1669 + -0x1258)) + _0x159555(0x6af) + _0x7d5457[_0x159555(0x6ef)] + _0x159555(0x678) + _0x7d5457[_0x159555(0x3f6)] + _0x159555(0x4f5) + _0x7d5457[_0x159555(0x283)])[_0x159555(0x4bb)]('\x0a\x0a');
                                                    _0x5385da[_0x159555(0x266)](_0x159555(0x5f8) + _0x159555(0x369) + _0x159555(0x4cf) + _0x1e0954);
                                                } else
                                                    _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x792)]);
                                            } else
                                                _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x635)]);
                                        } else {
                                            if (_0x486f0c[_0x159555(0x276)](_0x141f91[-0x10e8 + 0x1469 + -0x381], _0x486f0c[_0x159555(0x4be)]))
                                                try {
                                                    if (_0x486f0c[_0x159555(0x2ab)](_0x39c0b7, _0x486f0c[_0x159555(0x57c)])) {
                                                        _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x264)]);
                                                        return;
                                                    }
                                                    if (_0x486f0c[_0x159555(0x6c4)](_0x52f241[_0x159555(0x36a)][_0x159555(0x6fa)], -0x1337 + 0x1d55 + -0x7 * 0x172)) {
                                                        const _0x160976 = _0x52f241[_0x159555(0x36a)][-0x1 * 0x16ec + 0x182d + -0x1 * 0x141]?.['id'] || '';
                                                        if (_0x160976) {
                                                            const _0x440cce = _0xf9d454[_0x159555(0x813)](_0x3fac7f => _0x3fac7f[_0x159555(0x3f6)] === _0x160976);
                                                            _0x440cce ? _0x5385da[_0x159555(0x266)](_0x159555(0x65c) + _0x159555(0x722) + _0x159555(0x1af) + '\x20' + _0x440cce[_0x159555(0x3f6)]) : _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x6a2)]);
                                                        } else
                                                            _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x3f7)]);
                                                    } else {
                                                        if (_0x52f241[_0x159555(0x284) + 'ly']) {
                                                            const _0x169ee9 = _0x52f241[_0x159555(0x284) + 'ly'][_0x159555(0x77a)], _0x200daa = _0xf9d454[_0x159555(0x813)](_0xfda39a => _0xfda39a[_0x159555(0x7d2)] === _0x169ee9);
                                                            if (_0x200daa && _0x200daa[_0x159555(0x6f7)])
                                                                return _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x718)]);
                                                            _0x200daa ? _0x5385da[_0x159555(0x266)](_0x159555(0x5de) + _0x159555(0x4b1) + _0x159555(0x402) + _0x200daa[_0x159555(0x3f6)]) : _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x41a)]);
                                                        } else
                                                            _0x16d34a ? _0x5385da[_0x159555(0x266)](_0x159555(0x7aa) + _0x159555(0x67b) + _0x16d34a[_0x159555(0x3f6)]) : _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x731)]);
                                                    }
                                                } catch (_0x2863ea) {
                                                    console[_0x159555(0x3cc)](_0x486f0c[_0x159555(0x57f)], _0x2863ea), _0x5385da[_0x159555(0x266)](_0x159555(0x19e) + _0x159555(0x44a) + _0x159555(0x821) + _0x159555(0x811) + _0x159555(0x72e) + _0x159555(0x48a) + _0x2863ea);
                                                }
                                            else {
                                                if (_0x486f0c[_0x159555(0x301)](_0x141f91[-0x1439 + 0x1375 + -0xc4 * -0x1], _0x486f0c[_0x159555(0x359)]))
                                                    try {
                                                        if (_0x486f0c[_0x159555(0x468)](_0x39c0b7, _0x486f0c[_0x159555(0x57c)])) {
                                                            _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x264)]);
                                                            return;
                                                        }
                                                        if (_0x16d34a) {
                                                            const _0xc6dba9 = _0x486f0c[_0x159555(0x60e)](createCanvas, -0xdfe + -0x1 * -0x2265 + -0xc97, 0x7 * -0x1b7 + -0x1bb7 + -0x4 * -0xa6b), _0x1c007f = _0xc6dba9[_0x159555(0x7b3)]('2d'), _0xd00eec = path[_0x159555(0x4bb)](__dirname, _0x486f0c[_0x159555(0x5a8)], _0x486f0c[_0x159555(0x377)]), _0x45a848 = path[_0x159555(0x4bb)](__dirname, _0x486f0c[_0x159555(0x5a8)], _0x486f0c[_0x159555(0x1ff)]);
                                                            try {
                                                                const _0x1609f6 = await axios[_0x159555(0x5c7)](_0x486f0c[_0x159555(0x7de)], { 'responseType': _0x486f0c[_0x159555(0x4e7)] });
                                                                fs[_0x159555(0x7ed) + _0x159555(0x22b)](_0x45a848, Buffer[_0x159555(0x509)](_0x1609f6[_0x159555(0x43b)]));
                                                                const _0x2cc474 = await _0x486f0c[_0x159555(0x5b6)](loadImage, _0x45a848);
                                                                _0x1c007f[_0x159555(0x805)](_0x2cc474, -0x1 * -0xfe0 + -0xc5 * -0x3 + 0x7 * -0x299, -0x1 * -0x24ec + -0x2b * -0x4f + -0x3231, _0xc6dba9[_0x159555(0x1fa)], _0xc6dba9[_0x159555(0x7e3)]);
                                                            } catch (_0x76ef6f) {
                                                                console[_0x159555(0x3cc)](_0x486f0c[_0x159555(0x2c4)], _0x76ef6f), _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x776)]);
                                                                return;
                                                            }
                                                            const _0xa5ad36 = path[_0x159555(0x4bb)](__dirname, _0x486f0c[_0x159555(0x5a8)], _0x486f0c[_0x159555(0x7a1)]);
                                                            try {
                                                                let _0x48dee0;
                                                                const _0x2ffa64 = _0x16d34a[_0x159555(0x6bc)] && _0x16d34a[_0x159555(0x6bc)][_0x159555(0x6a0) + 'e']();
                                                                if (_0x486f0c[_0x159555(0x54b)](_0x2ffa64, _0x486f0c[_0x159555(0x788)]) || _0x486f0c[_0x159555(0x30e)](_0x2ffa64, _0x486f0c[_0x159555(0x759)]))
                                                                    _0x48dee0 = _0x486f0c[_0x159555(0x323)];
                                                                else
                                                                    (_0x486f0c[_0x159555(0x56a)](_0x2ffa64, _0x486f0c[_0x159555(0x70f)]) || _0x486f0c[_0x159555(0x56a)](_0x2ffa64, _0x486f0c[_0x159555(0x49f)])) && (_0x48dee0 = _0x486f0c[_0x159555(0x208)]);
                                                                if (_0x48dee0) {
                                                                    const _0xe5d6a9 = await axios[_0x159555(0x5c7)](_0x48dee0, { 'responseType': _0x486f0c[_0x159555(0x4e7)] });
                                                                    fs[_0x159555(0x7ed) + _0x159555(0x22b)](_0xa5ad36, Buffer[_0x159555(0x509)](_0xe5d6a9[_0x159555(0x43b)]));
                                                                    const _0x530af6 = await _0x486f0c[_0x159555(0x42d)](loadImage, _0xa5ad36), _0x15bdb3 = -0x1cce + 0x2f * -0xb7 + -0xc9d * -0x5, _0x18e9ea = _0x486f0c[_0x159555(0x324)](_0x15bdb3, -0x2 * -0x542 + 0xcb6 + 0x1730 * -0x1), _0x143cec = _0x486f0c[_0x159555(0x7da)](_0xc6dba9[_0x159555(0x7e3)], -0x854 + 0x1309 * -0x1 + -0xb * -0x27d);
                                                                    _0x1c007f[_0x159555(0x7d6)](), _0x1c007f[_0x159555(0x1d1)](), _0x1c007f[_0x159555(0x6d8)](_0x486f0c[_0x159555(0x4d9)](_0x18e9ea, _0x15bdb3), _0x143cec, _0x15bdb3, 0x3 * -0x8a1 + -0x3 * -0x853 + 0xea, _0x486f0c[_0x159555(0x6ff)](Math['PI'], 0x9af * 0x4 + 0x3 * 0x422 + -0x3320)), _0x1c007f[_0x159555(0x384)](), _0x1c007f[_0x159555(0x7a8)](), _0x1c007f[_0x159555(0x805)](_0x530af6, _0x18e9ea, _0x486f0c[_0x159555(0x2b7)](_0x143cec, _0x15bdb3), _0x486f0c[_0x159555(0x74f)](_0x15bdb3, 0x1e38 + 0x1c91 + 0x1 * -0x3ac7), _0x486f0c[_0x159555(0x3c5)](_0x15bdb3, 0x1ae3 + -0x2590 + 0xaaf)), _0x1c007f[_0x159555(0x64c)]();
                                                                } else {
                                                                    console[_0x159555(0x3cc)](_0x486f0c[_0x159555(0x744)], _0x2ffa64), _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x469)]);
                                                                    return;
                                                                }
                                                            } catch (_0x421187) {
                                                                console[_0x159555(0x3cc)](_0x486f0c[_0x159555(0x78c)], _0x421187), _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x685)]);
                                                                return;
                                                            }
                                                            const _0x135d68 = _0x16d34a[_0x159555(0x6ef)];
                                                            _0x1c007f[_0x159555(0x312)] = _0x486f0c[_0x159555(0x28a)], _0x1c007f[_0x159555(0x27c)] = _0x486f0c[_0x159555(0x4c2)], _0x1c007f[_0x159555(0x562)] = _0x486f0c[_0x159555(0x7b4)], _0x1c007f[_0x159555(0x424) + 'ne'] = _0x486f0c[_0x159555(0x4d8)], _0x1c007f[_0x159555(0x7a9)](_0x135d68, _0x486f0c[_0x159555(0x2cf)](_0xc6dba9[_0x159555(0x1fa)], 0xb1 * 0x1 + 0x34f + -0x3fe), _0x486f0c[_0x159555(0x7da)](_0xc6dba9[_0x159555(0x7e3)], -0x21d9 + 0x121d * 0x1 + 0xfbe)), _0x1c007f[_0x159555(0x312)] = _0x486f0c[_0x159555(0x515)], _0x1c007f[_0x159555(0x27c)] = _0x486f0c[_0x159555(0x4c2)], _0x1c007f[_0x159555(0x562)] = _0x486f0c[_0x159555(0x7f4)], _0x1c007f[_0x159555(0x424) + 'ne'] = _0x486f0c[_0x159555(0x4d8)];
                                                            const _0x4471d5 = _0x159555(0x7b1) + _0x16d34a[_0x159555(0x3fc)] + _0x159555(0x42b);
                                                            _0x1c007f[_0x159555(0x7a9)](_0x4471d5, _0x486f0c[_0x159555(0x4e0)](_0xc6dba9[_0x159555(0x1fa)], 0x1 * -0xf54 + -0x2195 * -0x1 + -0x122d), _0x486f0c[_0x159555(0x55a)](_0xc6dba9[_0x159555(0x7e3)], 0x35f + -0x1b0e + 0x4bd * 0x5));
                                                            const _0x1f0cc3 = _0x159555(0x7b7) + _0x16d34a[_0x159555(0x29c)] + _0x159555(0x2bd);
                                                            _0x1c007f[_0x159555(0x312)] = _0x486f0c[_0x159555(0x515)], _0x1c007f[_0x159555(0x27c)] = _0x486f0c[_0x159555(0x4c2)], _0x1c007f[_0x159555(0x562)] = _0x486f0c[_0x159555(0x7b4)], _0x1c007f[_0x159555(0x424) + 'ne'] = _0x486f0c[_0x159555(0x4a2)], _0x1c007f[_0x159555(0x7a9)](_0x1f0cc3, _0x486f0c[_0x159555(0x26b)](_0x486f0c[_0x159555(0x55a)](_0xc6dba9[_0x159555(0x1fa)], 0xbf + -0x1344 + 0x1287), -0x1c5e + 0xec6 + 0xda2), _0x486f0c[_0x159555(0x2b7)](_0xc6dba9[_0x159555(0x7e3)], 0x1 * 0x1367 + -0xe57 + -0x506 * 0x1));
                                                            let _0x574b75;
                                                            const _0x83698a = _0x16d34a[_0x159555(0x1df)] && _0x16d34a[_0x159555(0x1df)][_0x159555(0x6a0) + 'e']();
                                                            if (_0x486f0c[_0x159555(0x7dc)](_0x83698a, _0x486f0c[_0x159555(0x241)]))
                                                                _0x574b75 = _0x486f0c[_0x159555(0x5e9)];
                                                            else {
                                                                if (_0x486f0c[_0x159555(0x1b5)](_0x83698a, _0x486f0c[_0x159555(0x3f2)]))
                                                                    _0x574b75 = _0x486f0c[_0x159555(0x62e)];
                                                                else {
                                                                    if (_0x486f0c[_0x159555(0x56a)](_0x83698a, _0x486f0c[_0x159555(0x3c1)]))
                                                                        _0x574b75 = _0x486f0c[_0x159555(0x62c)];
                                                                    else {
                                                                        if (_0x486f0c[_0x159555(0x56a)](_0x83698a, _0x486f0c[_0x159555(0x5fb)]))
                                                                            _0x574b75 = _0x486f0c[_0x159555(0x569)];
                                                                        else {
                                                                            if (_0x486f0c[_0x159555(0x2f2)](_0x83698a, _0x486f0c[_0x159555(0x82b)]))
                                                                                _0x574b75 = _0x486f0c[_0x159555(0x2f1)];
                                                                            else {
                                                                                if (_0x486f0c[_0x159555(0x55d)](_0x83698a, _0x486f0c[_0x159555(0x64a)]))
                                                                                    _0x574b75 = _0x486f0c[_0x159555(0x218)];
                                                                                else
                                                                                    _0x486f0c[_0x159555(0x38f)](_0x83698a, _0x486f0c[_0x159555(0x594)]) && (_0x574b75 = _0x486f0c[_0x159555(0x5b9)]);
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                            if (_0x574b75) {
                                                                const _0x290778 = path[_0x159555(0x4bb)](__dirname, _0x486f0c[_0x159555(0x5a8)], _0x83698a + _0x159555(0x6ab));
                                                                try {
                                                                    const _0x346134 = await axios[_0x159555(0x5c7)](_0x574b75, { 'responseType': _0x486f0c[_0x159555(0x4e7)] });
                                                                    fs[_0x159555(0x7ed) + _0x159555(0x22b)](_0x290778, Buffer[_0x159555(0x509)](_0x346134[_0x159555(0x43b)]));
                                                                    const _0x533603 = await _0x486f0c[_0x159555(0x797)](loadImage, _0x290778), _0x4dae62 = -0x1 * -0x8f6 + 0xcab + -0x1515, _0x13d142 = -0x5aa * 0x1 + -0xf * -0x211 + 0x9 * -0x2c1;
                                                                    _0x1c007f[_0x159555(0x805)](_0x533603, _0x486f0c[_0x159555(0x587)](_0x486f0c[_0x159555(0x2b9)](_0xc6dba9[_0x159555(0x1fa)], _0x4dae62), 0x58d + 0x3 * -0xa73 + 0x19d3), -0x1102 + 0x26e7 + -0x15de, _0x4dae62, _0x13d142);
                                                                } catch (_0x164f7a) {
                                                                    console[_0x159555(0x3cc)](_0x486f0c[_0x159555(0x1db)], _0x164f7a), _0x5385da[_0x159555(0x266)](_0x159555(0x6ba) + _0x159555(0x729) + _0x159555(0x5c3) + _0x164f7a);
                                                                    return;
                                                                }
                                                            } else {
                                                                console[_0x159555(0x3cc)](_0x486f0c[_0x159555(0x3a4)], _0x83698a), _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x347)]);
                                                                return;
                                                            }
                                                            const _0x3f0cb6 = _0xc6dba9[_0x159555(0x734)]();
                                                            fs[_0x159555(0x7ed) + _0x159555(0x22b)](_0xd00eec, _0x3f0cb6), _0x5385da[_0x159555(0x266)]({
                                                                'body': '',
                                                                'attachment': fs[_0x159555(0x1f1) + _0x159555(0x33a)](_0xd00eec)
                                                            });
                                                        } else
                                                            _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x635)]);
                                                    } catch (_0x227af8) {
                                                        console[_0x159555(0x3cc)](_0x227af8), _0x5385da[_0x159555(0x266)](_0x159555(0x19e) + _0x159555(0x44a) + _0x159555(0x821) + _0x159555(0x811) + _0x159555(0x1f4) + _0x159555(0x20a) + _0x227af8);
                                                    }
                                                else {
                                                    if (_0x486f0c[_0x159555(0x30e)](_0x141f91[0x184 + 0x20e1 + -0x2265], _0x486f0c[_0x159555(0x73e)]))
                                                        try {
                                                            if (_0x486f0c[_0x159555(0x2d4)](_0x39c0b7, _0x486f0c[_0x159555(0x57c)])) {
                                                                _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x264)]);
                                                                return;
                                                            }
                                                            if (_0x16d34a) {
                                                                if (!_0x141f91[0xbb * -0xe + -0x15 * 0x15e + -0xcfb * -0x3] || !_0x141f91[-0x19ed * 0x1 + -0xcbe * -0x3 + 0x1 * -0xc4b]) {
                                                                    _0x5385da[_0x159555(0x266)](_0x159555(0x60a) + _0x159555(0x554) + _0x159555(0x808) + _0x159555(0x1b9) + _0x159555(0x3d1) + _0x159555(0x5e2) + _0x159555(0x758) + _0x159555(0x1c3) + _0x159555(0x36e) + _0x159555(0x2d1) + _0x159555(0x3b9) + availableItems[_0x159555(0x4bb)](',\x20'));
                                                                    return;
                                                                }
                                                                const _0x30b3b7 = _0x486f0c[_0x159555(0x662)](parseInt, _0x141f91[-0xbc2 + -0x1a0a + 0x25cd]), _0x463118 = _0x141f91[_0x159555(0x486)](0x95 * -0x3c + -0x12e3 * 0x2 + 0x48b4)[_0x159555(0x4bb)]('\x20')[_0x159555(0x6a0) + 'e']();
                                                                if (_0x486f0c[_0x159555(0x797)](isNaN, _0x30b3b7) || _0x486f0c[_0x159555(0x5c5)](_0x30b3b7, 0x1b8e + 0xa * 0x7 + 0x1 * -0x1bd4)) {
                                                                    _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x725)]);
                                                                    return;
                                                                }
                                                                if (!availableItems[_0x159555(0x677)](_0x463118)) {
                                                                    _0x5385da[_0x159555(0x266)](_0x159555(0x2ce) + _0x159555(0x772) + _0x159555(0x21e) + _0x159555(0x783) + _0x159555(0x5f7) + _0x159555(0x244) + availableItems[_0x159555(0x4bb)](',\x20'));
                                                                    return;
                                                                }
                                                                const _0x47a504 = _0x486f0c[_0x159555(0x2f5)](getRandomNumber, 0x47 * 0x2f + 0x3b * 0x5c + -0x203 * 0x11, -0x408 + -0x221d + 0x2657), _0x47de9a = _0x486f0c[_0x159555(0x6ea)](getRandomNumber, -0x26ba + 0x1fbb + 0x704 * 0x1, -0x67 * 0x52 + -0x45 + -0xb27 * -0x3), _0x4a5d43 = _0x486f0c[_0x159555(0x818)](Math[_0x159555(0x703)](), 0xa7d * -0x2 + 0x1275 + -0x81 * -0x5 + 0.3), _0x448b6d = _0x4a5d43 ? Math[_0x159555(0x2f0)](_0x486f0c[_0x159555(0x345)](_0x486f0c[_0x159555(0x1c8)](_0x486f0c[_0x159555(0x7da)](_0x16d34a[_0x159555(0x29c)], -0x1 * -0x897 + 0x22f3 * 0x1 + 0x60 * -0x74), _0x486f0c[_0x159555(0x1e5)](_0x16d34a[_0x159555(0x283)], -0x10a8 + 0x39f + 0xd0e)), _0x486f0c[_0x159555(0x4cc)](_0x16d34a[_0x159555(0x3fc)], -0x1 * 0xf07 + -0x17ae + 0x26b7)), -0xba * -0x2d + -0x23 * 0xd9 + 0x2 * -0x181) : -0x378 + 0x22ba + -0x1f42, _0x269a21 = Math[_0x159555(0x636)](_0x486f0c[_0x159555(0x2b7)](_0x47de9a, _0x448b6d), 0x8a1 + 0x7 * -0x3f8 + 0x1328), _0x1a85b6 = _0x486f0c[_0x159555(0x3c5)](_0x30b3b7, _0x269a21);
                                                                if (_0x486f0c[_0x159555(0x7be)](_0x47a504, 0x1c5f + -0x24b6 + 0x857)) {
                                                                    _0x5385da[_0x159555(0x266)](_0x159555(0x77c) + _0x463118 + (_0x159555(0x1ed) + _0x159555(0x483)));
                                                                    return;
                                                                }
                                                                if (_0x486f0c[_0x159555(0x65e)](_0x16d34a[_0x159555(0x2bf)], _0x1a85b6)) {
                                                                    _0x16d34a[_0x159555(0x2bf)] -= _0x1a85b6, _0x16d34a[_0x159555(0x7d8)] = _0x16d34a[_0x159555(0x7d8)] || {}, _0x16d34a[_0x159555(0x7d8)][_0x463118] = _0x486f0c[_0x159555(0x2e3)](_0x16d34a[_0x159555(0x7d8)][_0x463118] || -0x1 * -0x2d1 + -0xb3 * 0x13 + -0xa * -0x10c, _0x30b3b7), await fs[_0x159555(0x21c)](_0x486f0c[_0x159555(0x5ab)], JSON[_0x159555(0x44f)](_0xf9d454));
                                                                    const _0x4e3ba5 = _0x448b6d ? _0x159555(0x194) + '$' + _0x448b6d[_0x159555(0x613)](-0x103d + -0x9 * 0x5 + 0x106c) + (_0x159555(0x209) + '\x20') : '';
                                                                    _0x5385da[_0x159555(0x266)](_0x159555(0x7a6) + _0x159555(0x665) + _0x159555(0x6f9) + _0x159555(0x584) + _0x159555(0x341) + '\x20' + _0x30b3b7 + '\x20' + _0x463118 + _0x159555(0x265) + _0x1a85b6[_0x159555(0x613)](-0x118c * -0x1 + 0x2637 + 0x7 * -0x7f7) + '.\x20' + _0x4e3ba5 + (_0x159555(0x31e) + _0x159555(0x704)));
                                                                } else
                                                                    _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x34b)]);
                                                            } else
                                                                _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x635)]);
                                                        } catch (_0x3714e4) {
                                                            console[_0x159555(0x3cc)](_0x3714e4), _0x5385da[_0x159555(0x266)](_0x159555(0x19e) + _0x159555(0x44a) + _0x159555(0x821) + _0x159555(0x811) + _0x159555(0x2ca) + _0x159555(0x20a) + _0x3714e4);
                                                        }
                                                    else {
                                                        if (_0x486f0c[_0x159555(0x56a)](_0x141f91[0x13 * -0x1c6 + 0x10a4 + 0x110e], _0x486f0c[_0x159555(0x291)]))
                                                            try {
                                                                if (_0x486f0c[_0x159555(0x30e)](_0x39c0b7, _0x486f0c[_0x159555(0x57c)])) {
                                                                    _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x264)]);
                                                                    return;
                                                                }
                                                                if (_0x16d34a) {
                                                                    if (_0x16d34a[_0x159555(0x6f7)])
                                                                        return _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x71e)]);
                                                                    if (_0x141f91[-0xd * 0xb + 0x1 * -0x18eb + 0x197b]) {
                                                                        const _0x1b0891 = _0x141f91[-0x2 * -0x3ba + -0x4f9 * 0x4 + -0xd * -0xf5]?.[_0x159555(0x6a0) + 'e'](), _0x4e5d6a = _0x486f0c[_0x159555(0x720)](Math[_0x159555(0x326)](_0x486f0c[_0x159555(0x6ff)](Math[_0x159555(0x703)](), _0x486f0c[_0x159555(0x21d)](_0x486f0c[_0x159555(0x2b9)](-0x2 * 0x8b5 + -0x1751 * -0x1 + -0x51f, -0x6a * 0x4f + 0x5c9 * -0x5 + 0x3dcb), -0x22da + 0x10b * -0xa + -0x2d49 * -0x1))), -0x1f * 0x62 + -0x1357 + 0x25 * 0xd9);
                                                                        if (_0x16d34a[_0x159555(0x7d8)] && _0x486f0c[_0x159555(0x2e0)](hasItem, _0x16d34a, _0x1b0891)) {
                                                                            const _0x1765da = {
                                                                                'seller': _0x16d34a[_0x159555(0x3f6)],
                                                                                'item': _0x1b0891,
                                                                                'prize': _0x4e5d6a
                                                                            };
                                                                            trades[_0x159555(0x553)](_0x1765da), _0x5385da[_0x159555(0x266)](_0x159555(0x791) + _0x159555(0x4a9) + _0x1b0891 + (_0x159555(0x56f) + 'r\x20') + _0x4e5d6a + _0x159555(0x475));
                                                                        } else
                                                                            _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x563)]);
                                                                    } else {
                                                                        if (_0x486f0c[_0x159555(0x30e)](_0x141f91[-0xebf * 0x1 + -0x991 + 0x1851], _0x486f0c[_0x159555(0x5dd)])) {
                                                                            const _0x83825f = _0x486f0c[_0x159555(0x2cd)](_0x1e14dd, trades);
                                                                            _0x5385da[_0x159555(0x266)](_0x159555(0x2d8) + _0x159555(0x739) + '\x0a\x0a' + _0x83825f);
                                                                        } else
                                                                            _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x56e)]);
                                                                    }
                                                                } else
                                                                    _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x635)]);
                                                            } catch (_0x263018) {
                                                                console[_0x159555(0x3cc)](_0x486f0c[_0x159555(0x57f)], _0x263018), _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x7f6)]);
                                                            }
                                                        else {
                                                            if (_0x486f0c[_0x159555(0x6f5)](_0x141f91[0x22a + 0x10d8 + -0x656 * 0x3], _0x486f0c[_0x159555(0x623)]) || _0x486f0c[_0x159555(0x64b)](_0x141f91[-0x1bf2 + 0x1d51 + -0x15f], _0x486f0c[_0x159555(0x64d)]))
                                                                try {
                                                                    if (_0x486f0c[_0x159555(0x5b3)](_0x39c0b7, _0x486f0c[_0x159555(0x57c)])) {
                                                                        _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x264)]);
                                                                        return;
                                                                    }
                                                                    if (_0x16d34a) {
                                                                        const _0x2b7551 = _0x16d34a[_0x159555(0x2bf)] || 0x1b85 + -0xb8b + -0xffa;
                                                                        _0x5385da[_0x159555(0x266)](_0x159555(0x630) + _0x159555(0x803) + _0x2b7551 + _0x159555(0x475));
                                                                    } else
                                                                        _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x635)]);
                                                                } catch (_0x1a5f95) {
                                                                    console[_0x159555(0x3cc)](_0x486f0c[_0x159555(0x57f)], _0x1a5f95), _0x5385da[_0x159555(0x266)](_0x159555(0x19e) + _0x159555(0x44a) + _0x159555(0x821) + _0x159555(0x811) + _0x159555(0x37b) + _0x1a5f95);
                                                                }
                                                            else {
                                                                if (_0x486f0c[_0x159555(0x468)](_0x141f91[-0x1 * -0xbf6 + 0x2f7 + 0x1 * -0xeed], _0x486f0c[_0x159555(0x7ba)]))
                                                                    try {
                                                                        if (_0x486f0c[_0x159555(0x80d)](_0x39c0b7, _0x486f0c[_0x159555(0x57c)])) {
                                                                            _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x264)]);
                                                                            return;
                                                                        }
                                                                        if (_0x16d34a) {
                                                                            !_0x141f91[-0x1c60 + 0x356 + 0x190b] && _0x5385da[_0x159555(0x266)](_0x159555(0x4d1) + _0x159555(0x4a4) + _0x159555(0x754) + _0x159555(0x2d3) + _0x159555(0x648) + _0x159555(0x28d) + _0x159555(0x5b1) + _0x159555(0x485) + _0x159555(0x3de) + _0x159555(0x381) + _0x159555(0x4b7) + _0x159555(0x336) + _0x159555(0x77d) + _0x159555(0x321) + _0x159555(0x5c0) + _0x159555(0x5bc) + _0x159555(0x31f) + _0x159555(0x5b7));
                                                                            const _0x3aa465 = _0x141f91[-0x2571 + 0x2f1 + 0x2281]?.[_0x159555(0x6a0) + 'e'](), _0xdcf855 = _0x486f0c[_0x159555(0x44b)](loadBankData);
                                                                            !_0x16d34a[_0x159555(0x1da)] && (_0x16d34a[_0x159555(0x1da)] = {
                                                                                'statement': 0x0,
                                                                                'balance': 0x0,
                                                                                'loan': 0x0,
                                                                                'lastLoanDate': 0x0
                                                                            });
                                                                            if (_0x486f0c[_0x159555(0x54b)](_0x3aa465, _0x486f0c[_0x159555(0x623)]))
                                                                                return _0x5385da[_0x159555(0x266)](_0x159555(0x405) + _0x159555(0x3eb) + _0x159555(0x5aa) + '\x20' + _0x16d34a[_0x159555(0x1da)][_0x159555(0x80a)] + '$.');
                                                                            const _0x49f94c = _0x486f0c[_0x159555(0x419)](parseFloat, _0x141f91[-0x2658 + -0x1fce + 0x4628]);
                                                                            if (_0x486f0c[_0x159555(0x3a8)](_0x3aa465, _0x486f0c[_0x159555(0x6e4)])) {
                                                                                if (_0x486f0c[_0x159555(0x65e)](_0x16d34a[_0x159555(0x2bf)], _0x49f94c)) {
                                                                                    const _0x96db46 = _0x486f0c[_0x159555(0x383)][_0x159555(0x1bf)]('|');
                                                                                    let _0x5c708d = -0xca9 + 0x52f * 0x3 + -0x2e4;
                                                                                    while (!![]) {
                                                                                        switch (_0x96db46[_0x5c708d++]) {
                                                                                        case '0':
                                                                                            _0x16d34a[_0x159555(0x1da)][_0x159555(0x43d)] = _0x486f0c[_0x159555(0x2b7)](_0x16d34a[_0x159555(0x1da)][_0x159555(0x80a)], _0x16d34a[_0x159555(0x1da)][_0x159555(0x4af)]);
                                                                                            continue;
                                                                                        case '1':
                                                                                            fs[_0x159555(0x7ed) + _0x159555(0x22b)](_0x486f0c[_0x159555(0x5ab)], JSON[_0x159555(0x44f)](_0xf9d454, null, -0x1 * 0xb4f + -0x25e4 + 0x3135), _0x486f0c[_0x159555(0x78a)]);
                                                                                            continue;
                                                                                        case '2':
                                                                                            return _0x5385da[_0x159555(0x266)](_0x159555(0x4c3) + _0x159555(0x332) + _0x159555(0x4b6) + _0x159555(0x2cc) + _0x159555(0x493) + _0x159555(0x672) + _0x16d34a[_0x159555(0x1da)][_0x159555(0x80a)] + '$.');
                                                                                        case '3':
                                                                                            _0x486f0c[_0x159555(0x819)](saveBankData, _0xdcf855);
                                                                                            continue;
                                                                                        case '4':
                                                                                            _0x16d34a[_0x159555(0x1da)][_0x159555(0x80a)] = _0x486f0c[_0x159555(0x324)](_0x16d34a[_0x159555(0x1da)][_0x159555(0x80a)] || 0x531 + -0x2fd * -0x3 + -0xe28, _0x49f94c);
                                                                                            continue;
                                                                                        case '5':
                                                                                            _0x16d34a[_0x159555(0x2bf)] -= _0x49f94c;
                                                                                            continue;
                                                                                        }
                                                                                        break;
                                                                                    }
                                                                                } else
                                                                                    return _0x5385da[_0x159555(0x266)](_0x159555(0x441) + _0x159555(0x2dc) + _0x159555(0x489) + _0x159555(0x4ef) + _0x159555(0x47e) + _0x159555(0x30c) + _0x16d34a[_0x159555(0x2bf)] + '.');
                                                                            }
                                                                            if (_0x486f0c[_0x159555(0x29b)](_0x3aa465, _0x486f0c[_0x159555(0x556)])) {
                                                                                if (_0x486f0c[_0x159555(0x382)](_0x16d34a[_0x159555(0x1da)][_0x159555(0x80a)], _0x49f94c)) {
                                                                                    const _0x55458b = _0x486f0c[_0x159555(0x5d4)][_0x159555(0x1bf)]('|');
                                                                                    let _0x1d0886 = 0xb * -0x163 + 0x18c1 + -0x980;
                                                                                    while (!![]) {
                                                                                        switch (_0x55458b[_0x1d0886++]) {
                                                                                        case '0':
                                                                                            fs[_0x159555(0x7ed) + _0x159555(0x22b)](_0x486f0c[_0x159555(0x5ab)], JSON[_0x159555(0x44f)](_0xf9d454, null, 0x582 + -0x155d + 0xfdd), _0x486f0c[_0x159555(0x78a)]);
                                                                                            continue;
                                                                                        case '1':
                                                                                            _0x16d34a[_0x159555(0x2bf)] = _0x486f0c[_0x159555(0x46a)](_0x16d34a[_0x159555(0x2bf)] || 0x7 * 0x26e + 0x2 * -0x317 + -0xad4, _0x49f94c);
                                                                                            continue;
                                                                                        case '2':
                                                                                            _0x16d34a[_0x159555(0x1da)][_0x159555(0x43d)] = _0x486f0c[_0x159555(0x4ac)](_0x16d34a[_0x159555(0x1da)][_0x159555(0x80a)], _0x16d34a[_0x159555(0x1da)][_0x159555(0x4af)]);
                                                                                            continue;
                                                                                        case '3':
                                                                                            _0x16d34a[_0x159555(0x1da)][_0x159555(0x80a)] -= _0x49f94c;
                                                                                            continue;
                                                                                        case '4':
                                                                                            _0x486f0c[_0x159555(0x761)](saveBankData, _0xdcf855);
                                                                                            continue;
                                                                                        case '5':
                                                                                            return _0x5385da[_0x159555(0x266)](_0x159555(0x7ca) + _0x159555(0x564) + _0x159555(0x68d) + _0x159555(0x346) + _0x159555(0x2bc) + _0x159555(0x432) + _0x16d34a[_0x159555(0x1da)][_0x159555(0x80a)] + '$.');
                                                                                        }
                                                                                        break;
                                                                                    }
                                                                                } else
                                                                                    return _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x511)]);
                                                                            }
                                                                            if (_0x486f0c[_0x159555(0x256)](_0x3aa465, _0x486f0c[_0x159555(0x223)])) {
                                                                                const _0x581a33 = _0x486f0c[_0x159555(0x304)](calculateLoanAmount, _0x16d34a[_0x159555(0x1da)][_0x159555(0x80a)]);
                                                                                if (_0x486f0c[_0x159555(0x6d9)](_0x581a33, 0xdbb * 0x2 + 0x1 * -0x13c + -0x1a3a)) {
                                                                                    const _0x8d1c01 = _0x486f0c[_0x159555(0x269)][_0x159555(0x1bf)]('|');
                                                                                    let _0x4e80de = -0x65 * 0x3f + 0x1a07 + -0x12c;
                                                                                    while (!![]) {
                                                                                        switch (_0x8d1c01[_0x4e80de++]) {
                                                                                        case '0':
                                                                                            _0x486f0c[_0x159555(0x835)](saveBankData, _0xdcf855);
                                                                                            continue;
                                                                                        case '1':
                                                                                            fs[_0x159555(0x7ed) + _0x159555(0x22b)](_0x486f0c[_0x159555(0x5ab)], JSON[_0x159555(0x44f)](_0xf9d454, null, -0xe2e * -0x2 + 0x1956 + 0x4 * -0xd6c), _0x486f0c[_0x159555(0x78a)]);
                                                                                            continue;
                                                                                        case '2':
                                                                                            return _0x5385da[_0x159555(0x266)](_0x159555(0x7a4) + _0x159555(0x23e) + _0x159555(0x5a5) + 'd\x20' + _0x581a33 + (_0x159555(0x1e3) + _0x159555(0x2a1) + _0x159555(0x799) + _0x159555(0x474) + 's\x20') + _0x16d34a[_0x159555(0x1da)][_0x159555(0x80a)] + '$.');
                                                                                        case '3':
                                                                                            _0x16d34a[_0x159555(0x1da)][_0x159555(0x80a)] += _0x581a33;
                                                                                            continue;
                                                                                        case '4':
                                                                                            _0x16d34a[_0x159555(0x1da)][_0x159555(0x43d)] = _0x486f0c[_0x159555(0x355)](_0x16d34a[_0x159555(0x1da)][_0x159555(0x80a)], _0x16d34a[_0x159555(0x1da)][_0x159555(0x4af)]);
                                                                                            continue;
                                                                                        case '5':
                                                                                            _0x16d34a[_0x159555(0x1da)][_0x159555(0x4af)] += _0x581a33;
                                                                                            continue;
                                                                                        }
                                                                                        break;
                                                                                    }
                                                                                } else
                                                                                    return _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x45b)]);
                                                                            }
                                                                            if (_0x486f0c[_0x159555(0x2d2)](_0x3aa465, _0x486f0c[_0x159555(0x2ff)])) {
                                                                                const _0x300a2b = _0x16d34a[_0x159555(0x1da)][_0x159555(0x5e7) + 'te'] || 0xd11 * -0x2 + -0x1c42 + -0xec * -0x3b, _0x1c7795 = Date[_0x159555(0x66f)](), _0x57b6ea = _0x486f0c[_0x159555(0x624)](_0x486f0c[_0x159555(0x329)](_0x1c7795, _0x300a2b), -0x1d66ad + -0xea * 0x38a7 + 0x1 * 0x881dd3);
                                                                                return _0x16d34a[_0x159555(0x1da)][_0x159555(0x5e7) + 'te'] = _0x1c7795, _0x16d34a[_0x159555(0x1da)][_0x159555(0x43d)] = _0x486f0c[_0x159555(0x2ea)](_0x16d34a[_0x159555(0x1da)][_0x159555(0x80a)], _0x16d34a[_0x159555(0x1da)][_0x159555(0x4af)]), _0x486f0c[_0x159555(0x835)](saveBankData, _0xdcf855), fs[_0x159555(0x7ed) + _0x159555(0x22b)](_0x486f0c[_0x159555(0x5ab)], JSON[_0x159555(0x44f)](_0xf9d454, null, 0x6ea + 0x1121 + -0x1809), _0x486f0c[_0x159555(0x78a)]), _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x294)]);
                                                                            }
                                                                        } else
                                                                            return _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x315)]);
                                                                    } catch (_0x5f107c) {
                                                                        return console[_0x159555(0x3cc)](_0x486f0c[_0x159555(0x57f)], _0x5f107c), _0x5385da[_0x159555(0x266)](_0x159555(0x19e) + _0x159555(0x44a) + _0x159555(0x821) + _0x159555(0x811) + _0x159555(0x2e9) + _0x159555(0x20a) + _0x5f107c);
                                                                    }
                                                                else {
                                                                    if (_0x486f0c[_0x159555(0x468)](_0x141f91[-0x9 * -0x11c + 0x74e + 0x8a5 * -0x2], _0x486f0c[_0x159555(0x32d)]))
                                                                        try {
                                                                            if (_0x486f0c[_0x159555(0x2ab)](_0x39c0b7, _0x486f0c[_0x159555(0x57c)])) {
                                                                                _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x264)]);
                                                                                return;
                                                                            }
                                                                            if (_0x16d34a) {
                                                                                const _0x59f103 = _0x141f91[-0x53 * -0x3 + -0x7 * 0x26b + 0xff5]?.[_0x159555(0x6a0) + 'e'](), _0x53be5d = _0x486f0c[_0x159555(0x7b6)](loadJobData);
                                                                                if (!_0x59f103)
                                                                                    return _0x5385da[_0x159555(0x266)](_0x159555(0x412) + _0x159555(0x193) + _0x159555(0x57a) + _0x159555(0x499) + _0x159555(0x1d2) + 'o');
                                                                                !_0x16d34a[_0x159555(0x2e7)] && (_0x16d34a[_0x159555(0x2e7)] = {
                                                                                    'salary': 0x0,
                                                                                    'lastWorkDate': 0x0,
                                                                                    'workCount': 0x0
                                                                                });
                                                                                const _0x1449d1 = Date[_0x159555(0x66f)](), _0x412fa3 = _0x16d34a[_0x159555(0x2e7)][_0x159555(0x211) + 'te'] || 0x79 * 0x16 + -0x5b9 * -0x1 + -0x1 * 0x101f, _0x3c6f70 = _0x486f0c[_0x159555(0x303)](_0x486f0c[_0x159555(0x587)](_0x1449d1, _0x412fa3), -0x60bb9c + 0x2c3b * 0x279 + -0x5 * -0x875a5);
                                                                                if (_0x486f0c[_0x159555(0x468)](_0x59f103, _0x486f0c[_0x159555(0x1ec)]))
                                                                                    return _0x5385da[_0x159555(0x266)](_0x159555(0x670) + _0x159555(0x833) + _0x159555(0x478) + _0x16d34a[_0x159555(0x2e7)][_0x159555(0x1ef)] + '$.');
                                                                                if (_0x486f0c[_0x159555(0x65e)](_0x16d34a[_0x159555(0x2e7)][_0x159555(0x1d7)], 0x1cbc + -0x2 * 0x731 + 0x10 * -0xe5))
                                                                                    return _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x30d)]);
                                                                                if (_0x486f0c[_0x159555(0x4e2)](_0x3c6f70, -0x1f85 * 0x1 + -0x305 + -0x25 * -0xef) && _0x486f0c[_0x159555(0x7c3)](_0x59f103, _0x486f0c[_0x159555(0x4fb)]))
                                                                                    return _0x5385da[_0x159555(0x266)](_0x159555(0x225) + _0x159555(0x59b) + _0x159555(0x4e3) + _0x159555(0x339) + _0x159555(0x756) + _0x159555(0x3dd) + _0x159555(0x374) + _0x159555(0x682) + _0x486f0c[_0x159555(0x22d)](-0x2a1 * 0x7 + -0x14 * 0x17b + 0x300d * 0x1, _0x16d34a[_0x159555(0x2e7)][_0x159555(0x1d7)]) + (_0x159555(0x7cf) + _0x159555(0x3f0) + _0x159555(0x7c1) + _0x159555(0x7c0)));
                                                                                if (_0x486f0c[_0x159555(0x38f)](_0x59f103, _0x486f0c[_0x159555(0x4fb)])) {
                                                                                    const _0x41837a = _0x486f0c[_0x159555(0x816)](calculateSalary);
                                                                                    return _0x16d34a[_0x159555(0x2e7)][_0x159555(0x1ef)] = _0x41837a, _0x16d34a[_0x159555(0x2e7)][_0x159555(0x211) + 'te'] = _0x1449d1, _0x16d34a[_0x159555(0x2e7)][_0x159555(0x1d7)] += -0x313 * 0x5 + 0x4 * 0x36d + 0x1ac, _0x16d34a[_0x159555(0x2bf)] += _0x41837a, _0x486f0c[_0x159555(0x304)](saveJobData, _0x53be5d), fs[_0x159555(0x7ed) + _0x159555(0x22b)](_0x486f0c[_0x159555(0x5ab)], JSON[_0x159555(0x44f)](_0xf9d454, null, -0x2437 + -0x2ee + 0x2727 * 0x1), _0x486f0c[_0x159555(0x78a)]), _0x5385da[_0x159555(0x266)](_0x159555(0x375) + _0x159555(0x23e) + _0x159555(0x6e3) + _0x41837a + (_0x159555(0x333) + 'e\x20') + _0x486f0c[_0x159555(0x3c9)](0x85d + -0x892 + -0x3f * -0x1, _0x16d34a[_0x159555(0x2e7)][_0x159555(0x1d7)]) + (_0x159555(0x7cf) + _0x159555(0x3f0) + _0x159555(0x7c1) + _0x159555(0x7c0)));
                                                                                }
                                                                            } else
                                                                                return _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x315)]);
                                                                        } catch (_0x2ca602) {
                                                                            return console[_0x159555(0x3cc)](_0x486f0c[_0x159555(0x57f)], _0x2ca602), _0x5385da[_0x159555(0x266)](_0x159555(0x19e) + _0x159555(0x44a) + _0x159555(0x821) + _0x159555(0x811) + _0x159555(0x3a6) + _0x159555(0x305) + _0x2ca602);
                                                                        }
                                                                    else {
                                                                        if (_0x486f0c[_0x159555(0x596)](_0x141f91[-0x1fdc + 0x1102 + 0x76d * 0x2], _0x486f0c[_0x159555(0x2fd)]))
                                                                            try {
                                                                                if (_0x486f0c[_0x159555(0x54b)](_0x39c0b7, _0x486f0c[_0x159555(0x57c)])) {
                                                                                    _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x264)]);
                                                                                    return;
                                                                                }
                                                                                if (!_0x16d34a)
                                                                                    return _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x315)]);
                                                                                const _0x2ff1ae = _0x141f91[-0x242b + -0x1bf + -0x1 * -0x25eb], _0x423fa8 = _0xf9d454[_0x159555(0x813)](_0x13bc44 => _0x13bc44[_0x159555(0x3f6)] === _0x2ff1ae);
                                                                                if (!_0x423fa8)
                                                                                    return _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x28f)]);
                                                                                if (_0x423fa8[_0x159555(0x6f7)])
                                                                                    return _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x5d1)]);
                                                                                if (_0x16d34a[_0x159555(0x6f7)])
                                                                                    return _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x661)]);
                                                                                if (_0x486f0c[_0x159555(0x2ab)](_0x16d34a[_0x159555(0x6bc)], _0x423fa8[_0x159555(0x6bc)]))
                                                                                    return _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x423)]);
                                                                                if (_0x16d34a[_0x159555(0x2a7)] && _0x486f0c[_0x159555(0x30e)](_0x16d34a[_0x159555(0x2a7)][_0x159555(0x3b5)], _0x486f0c[_0x159555(0x650)]))
                                                                                    return _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x410)]);
                                                                                if (_0x423fa8[_0x159555(0x2a7)] && _0x486f0c[_0x159555(0x54b)](_0x423fa8[_0x159555(0x2a7)][_0x159555(0x3b5)], _0x486f0c[_0x159555(0x650)]))
                                                                                    return _0x5385da[_0x159555(0x266)](_0x159555(0x48e) + _0x423fa8[_0x159555(0x6ef)] + (_0x159555(0x5b8) + _0x159555(0x5db)));
                                                                                if (_0x423fa8[_0x159555(0x5f6) + _0x159555(0x6e7)])
                                                                                    return _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x1d8)]);
                                                                                return _0x423fa8[_0x159555(0x5f6) + _0x159555(0x6e7)] = {
                                                                                    'status': _0x486f0c[_0x159555(0x7d9)],
                                                                                    'requesterID': _0x16d34a[_0x159555(0x7d2)]
                                                                                }, _0x16d34a[_0x159555(0x5f6) + _0x159555(0x6e7)] = {
                                                                                    'status': _0x486f0c[_0x159555(0x7d9)],
                                                                                    'requesterID': null
                                                                                }, fs[_0x159555(0x7ed) + _0x159555(0x22b)](_0x486f0c[_0x159555(0x5ab)], JSON[_0x159555(0x44f)](_0xf9d454, null, 0x6 * 0x12a + -0x25 * 0x89 + 0xcd3), _0x486f0c[_0x159555(0x78a)]), _0x3efdcf[_0x159555(0x455) + 'e'](_0x159555(0x1d6) + '\x20' + _0x16d34a[_0x159555(0x6ef)] + (_0x159555(0x202) + _0x159555(0x2de) + _0x159555(0x217) + _0x159555(0x687) + _0x159555(0x70e) + _0x159555(0x3a2) + _0x159555(0x566) + _0x159555(0x72a) + _0x159555(0x275) + _0x159555(0x5cc) + _0x159555(0x597) + '.'), _0x423fa8[_0x159555(0x7d2)]), _0x5385da[_0x159555(0x266)](_0x159555(0x5a9) + _0x159555(0x31c) + _0x159555(0x59a) + _0x159555(0x1cd) + _0x423fa8[_0x159555(0x6ef)] + '.');
                                                                            } catch (_0x402a4a) {
                                                                                return console[_0x159555(0x3cc)](_0x486f0c[_0x159555(0x57f)], _0x402a4a), _0x5385da[_0x159555(0x266)](_0x159555(0x3fb) + _0x159555(0x230) + _0x159555(0x6d2) + _0x159555(0x543) + _0x159555(0x79b) + _0x159555(0x71a) + _0x402a4a);
                                                                            }
                                                                        else {
                                                                            if (_0x486f0c[_0x159555(0x616)](_0x141f91[-0x1 * -0xf41 + -0x63e + -0x903], _0x486f0c[_0x159555(0x800)]))
                                                                                try {
                                                                                    if (_0x486f0c[_0x159555(0x256)](_0x39c0b7, _0x486f0c[_0x159555(0x57c)])) {
                                                                                        _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x264)]);
                                                                                        return;
                                                                                    }
                                                                                    if (_0x16d34a && _0x16d34a[_0x159555(0x5f6) + _0x159555(0x6e7)] && _0x486f0c[_0x159555(0x256)](_0x16d34a[_0x159555(0x5f6) + _0x159555(0x6e7)][_0x159555(0x3b5)], _0x486f0c[_0x159555(0x7d9)])) {
                                                                                        const _0xeff2b5 = _0x16d34a[_0x159555(0x5f6) + _0x159555(0x6e7)][_0x159555(0x579) + 'D'], _0x68e6bc = _0xf9d454[_0x159555(0x813)](_0xcb85de => _0xcb85de[_0x159555(0x7d2)] === _0xeff2b5);
                                                                                        if (_0x68e6bc) {
                                                                                            const _0xb4188a = _0x486f0c[_0x159555(0x57d)][_0x159555(0x1bf)]('|');
                                                                                            let _0x307441 = -0x6b * 0x26 + 0xcaa * 0x2 + 0x1 * -0x972;
                                                                                            while (!![]) {
                                                                                                switch (_0xb4188a[_0x307441++]) {
                                                                                                case '0':
                                                                                                    _0x68e6bc[_0x159555(0x5f6) + _0x159555(0x6e7)] = null;
                                                                                                    continue;
                                                                                                case '1':
                                                                                                    fs[_0x159555(0x7ed) + _0x159555(0x22b)](_0x486f0c[_0x159555(0x5ab)], JSON[_0x159555(0x44f)](_0xf9d454, null, -0x2576 + -0xe1c + 0x3394), _0x486f0c[_0x159555(0x78a)]);
                                                                                                    continue;
                                                                                                case '2':
                                                                                                    _0x5385da[_0x159555(0x498)](_0x159555(0x7fd) + _0x159555(0x1a1) + _0x159555(0x2c9) + _0x16d34a[_0x159555(0x6ef)] + (_0x159555(0x58a) + _0x159555(0x452)) + _0x68e6bc[_0x159555(0x6ef)] + '.', _0x68e6bc[_0x159555(0x7d2)]);
                                                                                                    continue;
                                                                                                case '3':
                                                                                                    _0x68e6bc[_0x159555(0x2a7)] = {
                                                                                                        'status': _0x486f0c[_0x159555(0x650)],
                                                                                                        'partnerID': _0x16d34a[_0x159555(0x7d2)]
                                                                                                    };
                                                                                                    continue;
                                                                                                case '4':
                                                                                                    _0x16d34a[_0x159555(0x2a7)] = {
                                                                                                        'status': _0x486f0c[_0x159555(0x650)],
                                                                                                        'partnerID': _0xeff2b5
                                                                                                    };
                                                                                                    continue;
                                                                                                case '5':
                                                                                                    _0x16d34a[_0x159555(0x5f6) + _0x159555(0x6e7)] = null;
                                                                                                    continue;
                                                                                                case '6':
                                                                                                    return _0x5385da[_0x159555(0x266)](_0x159555(0x7fd) + _0x159555(0x1a1) + _0x159555(0x45c) + _0x159555(0x7a5) + 'o\x20' + _0x68e6bc[_0x159555(0x6ef)] + '.');
                                                                                                }
                                                                                                break;
                                                                                            }
                                                                                        } else
                                                                                            return _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x513)]);
                                                                                    } else
                                                                                        return _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x7ec)]);
                                                                                } catch (_0x278b30) {
                                                                                    return console[_0x159555(0x3cc)](_0x486f0c[_0x159555(0x57f)], _0x278b30), _0x5385da[_0x159555(0x266)](_0x159555(0x3fb) + _0x159555(0x230) + _0x159555(0x6d2) + _0x159555(0x543) + _0x159555(0x47b) + _0x159555(0x403) + _0x159555(0x33c) + _0x278b30);
                                                                                }
                                                                            else {
                                                                                if (_0x486f0c[_0x159555(0x227)](_0x141f91[0x1a84 + 0xd8 * 0x2a + -0x3df4], _0x486f0c[_0x159555(0x50f)]))
                                                                                    try {
                                                                                        if (_0x486f0c[_0x159555(0x588)](_0x39c0b7, _0x486f0c[_0x159555(0x57c)])) {
                                                                                            _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x264)]);
                                                                                            return;
                                                                                        }
                                                                                        if (_0x16d34a && _0x16d34a[_0x159555(0x5f6) + _0x159555(0x6e7)] && _0x486f0c[_0x159555(0x69e)](_0x16d34a[_0x159555(0x5f6) + _0x159555(0x6e7)][_0x159555(0x3b5)], _0x486f0c[_0x159555(0x7d9)])) {
                                                                                            const _0x5c49aa = _0x16d34a[_0x159555(0x5f6) + _0x159555(0x6e7)][_0x159555(0x579) + 'D'], _0x8dec19 = _0xf9d454[_0x159555(0x813)](_0x56b2c2 => _0x56b2c2[_0x159555(0x7d2)] === _0x5c49aa);
                                                                                            return _0x8dec19 ? (_0x16d34a[_0x159555(0x5f6) + _0x159555(0x6e7)] = null, _0x8dec19[_0x159555(0x5f6) + _0x159555(0x6e7)] = null, fs[_0x159555(0x7ed) + _0x159555(0x22b)](_0x486f0c[_0x159555(0x5ab)], JSON[_0x159555(0x44f)](_0xf9d454, null, -0x1852 + 0xc75 * -0x3 + -0xc57 * -0x5), _0x486f0c[_0x159555(0x78a)]), _0x5385da[_0x159555(0x266)](_0x159555(0x1f9) + _0x159555(0x1fe) + _0x159555(0x6ca) + _0x159555(0x740) + _0x159555(0x190) + _0x8dec19[_0x159555(0x6ef)] + '.')) : _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x513)]);
                                                                                        } else
                                                                                            return _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x7ec)]);
                                                                                    } catch (_0x20f1d2) {
                                                                                        return console[_0x159555(0x3cc)](_0x486f0c[_0x159555(0x57f)], _0x20f1d2), _0x5385da[_0x159555(0x266)](_0x159555(0x3fb) + _0x159555(0x230) + _0x159555(0x6d2) + _0x159555(0x543) + _0x159555(0x64f) + _0x159555(0x592) + _0x159555(0x71a) + _0x20f1d2);
                                                                                    }
                                                                                else {
                                                                                    if (_0x486f0c[_0x159555(0x64b)](_0x141f91[-0xa * -0x1e7 + -0x756 + -0x4 * 0x2ec], _0x486f0c[_0x159555(0x732)]))
                                                                                        try {
                                                                                            if (_0x486f0c[_0x159555(0x727)](_0x39c0b7, _0x486f0c[_0x159555(0x57c)])) {
                                                                                                _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x264)]);
                                                                                                return;
                                                                                            }
                                                                                            if (_0x16d34a) {
                                                                                                const _0x537bcb = _0x141f91[0xc84 + -0x13ef + -0x5 * -0x17c]?.[_0x159555(0x6a0) + 'e']();
                                                                                                if (_0x486f0c[_0x159555(0x2a8)](_0x537bcb, _0x486f0c[_0x159555(0x247)])) {
                                                                                                    if (_0x16d34a[_0x159555(0x4a1)] && _0x486f0c[_0x159555(0x79a)](_0x16d34a[_0x159555(0x4a1)], -0x1 * -0x18a5 + 0x2 * -0x2a1 + 0x1363 * -0x1)) {
                                                                                                        const _0x5ada11 = _0x486f0c[_0x159555(0x746)](getRandomNumber, -0x97 + -0x16dc + 0x17a5, 0x2 * 0x289 + 0x1baf * -0x1 + -0x71 * -0x35);
                                                                                                        if (_0x486f0c[_0x159555(0x767)](_0x16d34a[_0x159555(0x2bf)], _0x5ada11)) {
                                                                                                            const _0x1be5ef = _0x486f0c[_0x159555(0x44c)][_0x159555(0x1bf)]('|');
                                                                                                            let _0x1d5271 = 0x1489 + -0x1111 * -0x1 + 0x2 * -0x12cd;
                                                                                                            while (!![]) {
                                                                                                                switch (_0x1be5ef[_0x1d5271++]) {
                                                                                                                case '0':
                                                                                                                    _0x16d34a[_0x159555(0x735)] = 0x1158 + -0x18a6 + 0x7b2;
                                                                                                                    continue;
                                                                                                                case '1':
                                                                                                                    return _0x5385da[_0x159555(0x266)](_0x159555(0x768) + _0x159555(0x19a) + _0x159555(0x454) + _0x159555(0x3b8) + 'd\x20' + _0x5ada11 + (_0x159555(0x461) + _0x159555(0x3c2) + _0x159555(0x306) + _0x159555(0x331) + _0x159555(0x3f1) + '.'));
                                                                                                                case '2':
                                                                                                                    _0x16d34a[_0x159555(0x4a1)] = 0x1caa + 0x1b * -0xe + -0x74 * 0x3c;
                                                                                                                    continue;
                                                                                                                case '3':
                                                                                                                    fs[_0x159555(0x7ed) + _0x159555(0x22b)](_0x486f0c[_0x159555(0x5ab)], JSON[_0x159555(0x44f)](_0xf9d454, null, -0x14d6 + 0xd * -0x217 + 0x3003), _0x486f0c[_0x159555(0x78a)]);
                                                                                                                    continue;
                                                                                                                case '4':
                                                                                                                    _0x16d34a[_0x159555(0x2bf)] -= _0x5ada11;
                                                                                                                    continue;
                                                                                                                }
                                                                                                                break;
                                                                                                            }
                                                                                                        } else
                                                                                                            return _0x5385da[_0x159555(0x266)](_0x159555(0x441) + _0x159555(0x3e4) + _0x159555(0x823) + _0x159555(0x2e5) + _0x159555(0x7d1) + _0x159555(0x2a3) + _0x159555(0x262) + _0x5ada11 + _0x159555(0x475));
                                                                                                    } else
                                                                                                        return _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x743)]);
                                                                                                } else {
                                                                                                    if (_0x486f0c[_0x159555(0x5b3)](_0x537bcb, _0x486f0c[_0x159555(0x659)])) {
                                                                                                        if (_0x16d34a[_0x159555(0x730)]) {
                                                                                                            const _0x44c931 = _0x486f0c[_0x159555(0x5ea)](getRandomNumber, 0x13 * 0x169 + -0x1c2a + 0x17d, -0x19e7 + 0xee3 + 0xb68);
                                                                                                            return _0x486f0c[_0x159555(0x3e7)](_0x16d34a[_0x159555(0x2bf)], _0x44c931) ? (_0x16d34a[_0x159555(0x2bf)] -= _0x44c931, _0x16d34a[_0x159555(0x62f)] = null, fs[_0x159555(0x7ed) + _0x159555(0x22b)](_0x486f0c[_0x159555(0x5ab)], JSON[_0x159555(0x44f)](_0xf9d454, null, -0x4 * -0x45f + -0x236a + 0x11f0), _0x486f0c[_0x159555(0x78a)]), _0x5385da[_0x159555(0x266)](_0x159555(0x507) + _0x159555(0x723) + _0x159555(0x2f6) + _0x159555(0x1f6) + _0x159555(0x63b) + _0x44c931 + (_0x159555(0x2f3) + _0x159555(0x1b0) + _0x159555(0x676) + 'y.'))) : _0x5385da[_0x159555(0x266)](_0x159555(0x441) + _0x159555(0x3e4) + _0x159555(0x823) + _0x159555(0x2e5) + _0x159555(0x4eb) + _0x159555(0x73f) + _0x159555(0x586) + _0x44c931 + _0x159555(0x475));
                                                                                                        } else
                                                                                                            return _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x6b3)]);
                                                                                                    } else
                                                                                                        return _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x51b)]);
                                                                                                }
                                                                                            } else
                                                                                                return _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x352)]);
                                                                                        } catch (_0x5e9780) {
                                                                                            return console[_0x159555(0x3cc)](_0x486f0c[_0x159555(0x57f)], _0x5e9780), _0x5385da[_0x159555(0x266)](_0x159555(0x3fb) + _0x159555(0x230) + _0x159555(0x6d2) + _0x159555(0x755) + _0x159555(0x7bc) + _0x159555(0x71a) + _0x5e9780);
                                                                                        }
                                                                                    else {
                                                                                        if (_0x486f0c[_0x159555(0x67f)](_0x141f91[0x98b * 0x1 + 0xb43 * -0x3 + 0x183e], _0x486f0c[_0x159555(0x43c)]))
                                                                                            try {
                                                                                                if (_0x486f0c[_0x159555(0x61c)](_0x39c0b7, _0x486f0c[_0x159555(0x57c)])) {
                                                                                                    _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x264)]);
                                                                                                    return;
                                                                                                }
                                                                                                if (_0x16d34a) {
                                                                                                    if (_0x486f0c[_0x159555(0x19f)](_0x141f91[0x2 * 0x974 + -0x2675 + 0x138e], 'on'))
                                                                                                        _0x16d34a[_0x159555(0x6f7)] = !![], _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x234)]);
                                                                                                    else {
                                                                                                        if (_0x486f0c[_0x159555(0x19f)](_0x141f91[0xc51 + 0x1d71 + -0x29c1 * 0x1], _0x486f0c[_0x159555(0x250)]))
                                                                                                            _0x16d34a[_0x159555(0x6f7)] = ![], _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x534)]);
                                                                                                        else
                                                                                                            return _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x6f3)]);
                                                                                                    }
                                                                                                    fs[_0x159555(0x7ed) + _0x159555(0x22b)](_0x486f0c[_0x159555(0x5ab)], JSON[_0x159555(0x44f)](_0xf9d454, null, -0x1 * -0x12af + 0x1c * 0x14b + -0x36e1), _0x486f0c[_0x159555(0x78a)]);
                                                                                                } else
                                                                                                    return _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x352)]);
                                                                                            } catch (_0x3000ba) {
                                                                                                return console[_0x159555(0x3cc)](_0x486f0c[_0x159555(0x57f)], _0x3000ba), _0x5385da[_0x159555(0x266)](_0x159555(0x3fb) + _0x159555(0x230) + _0x159555(0x6d2) + _0x159555(0x755) + _0x159555(0x697) + _0x159555(0x4aa) + _0x3000ba);
                                                                                            }
                                                                                        else {
                                                                                            if (_0x486f0c[_0x159555(0x67f)](_0x141f91[-0x201c + -0x1 * -0x12b9 + 0xd63], _0x486f0c[_0x159555(0x7ef)]))
                                                                                                try {
                                                                                                    if (_0x486f0c[_0x159555(0x38f)](_0x39c0b7, _0x486f0c[_0x159555(0x57c)])) {
                                                                                                        _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x264)]);
                                                                                                        return;
                                                                                                    }
                                                                                                    if (_0x16d34a) {
                                                                                                        const _0x357935 = _0x486f0c[_0x159555(0x34e)](parseFloat, _0x141f91[0x11e6 + 0x71 * -0xe + -0xbb6]);
                                                                                                        if (_0x486f0c[_0x159555(0x714)](isNaN, _0x357935) || _0x486f0c[_0x159555(0x2f8)](_0x357935, 0x7cd * 0x1 + -0xb3 * 0x1f + 0xde0))
                                                                                                            return _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x76d)]);
                                                                                                        if (_0x486f0c[_0x159555(0x6d9)](_0x52f241[_0x159555(0x36a)][_0x159555(0x6fa)], 0x1382 + -0xb * 0x1b3 + -0xd1 * 0x1)) {
                                                                                                            const _0x249e78 = _0x52f241[_0x159555(0x36a)][-0x622 + 0x3 * -0x191 + 0xad5]?.['id'] || '';
                                                                                                            if (_0x249e78) {
                                                                                                                const _0x15e0fd = _0xf9d454[_0x159555(0x813)](_0x3ec1a0 => _0x3ec1a0[_0x159555(0x3f6)] === _0x249e78);
                                                                                                                _0x15e0fd ? _0x486f0c[_0x159555(0x75b)](_0x16d34a[_0x159555(0x2bf)], _0x357935) ? (_0x16d34a[_0x159555(0x2bf)] -= _0x357935, _0x15e0fd[_0x159555(0x2bf)] = _0x486f0c[_0x159555(0x56b)](_0x15e0fd[_0x159555(0x2bf)] || 0xe8c + 0x3c7 * 0x7 + 0x28fd * -0x1, _0x357935), fs[_0x159555(0x7ed) + _0x159555(0x22b)](_0x486f0c[_0x159555(0x5ab)], JSON[_0x159555(0x44f)](_0xf9d454, null, 0x164a + 0x1750 + 0x1 * -0x2d98), _0x486f0c[_0x159555(0x78a)]), _0x5385da[_0x159555(0x266)](_0x159555(0x7bd) + 'd\x20' + _0x357935 + _0x159555(0x313) + _0x15e0fd[_0x159555(0x6ef)] + '.')) : _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x701)]) : _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x417)]);
                                                                                                            } else
                                                                                                                _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x21b)]);
                                                                                                        } else {
                                                                                                            if (_0x141f91[0x16 * -0xef + -0x9c2 + 0x1e4d]) {
                                                                                                                const _0x469c2e = _0x141f91[-0x50 * -0x5 + -0x1 * 0x216 + 0x87], _0xeaeda0 = _0xf9d454[_0x159555(0x813)](_0x5b9a4d => _0x5b9a4d[_0x159555(0x3f6)] === _0x469c2e);
                                                                                                                _0xeaeda0 ? _0x486f0c[_0x159555(0x376)](_0x16d34a[_0x159555(0x2bf)], _0x357935) ? (_0x16d34a[_0x159555(0x2bf)] -= _0x357935, _0xeaeda0[_0x159555(0x2bf)] = _0x486f0c[_0x159555(0x205)](_0xeaeda0[_0x159555(0x2bf)] || 0x1ec + -0x5c4 + 0x3d8, _0x357935), fs[_0x159555(0x7ed) + _0x159555(0x22b)](_0x486f0c[_0x159555(0x5ab)], JSON[_0x159555(0x44f)](_0xf9d454, null, -0x1a * -0x41 + -0x1 * 0x111e + 0xa86), _0x486f0c[_0x159555(0x78a)]), _0x5385da[_0x159555(0x266)](_0x159555(0x7bd) + 'd\x20' + _0x357935 + _0x159555(0x313) + _0xeaeda0[_0x159555(0x6ef)] + '.')) : _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x701)]) : _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x370)]);
                                                                                                            } else
                                                                                                                _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x6a3)]);
                                                                                                        }
                                                                                                    } else
                                                                                                        _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x583)]);
                                                                                                } catch (_0x35087b) {
                                                                                                    console[_0x159555(0x3cc)](_0x486f0c[_0x159555(0x57f)], _0x35087b), _0x5385da[_0x159555(0x266)](_0x159555(0x3fb) + _0x159555(0x230) + _0x159555(0x6d2) + _0x159555(0x74d) + _0x159555(0x4ba) + _0x159555(0x71a) + _0x35087b);
                                                                                                }
                                                                                            else {
                                                                                                if (_0x486f0c[_0x159555(0x2d2)](_0x141f91[0x3 * -0xaea + 0x215b * 0x1 + -0x9d * 0x1], _0x486f0c[_0x159555(0x74b)])) {
                                                                                                    if (_0x486f0c[_0x159555(0x3a8)](_0x39c0b7, _0x486f0c[_0x159555(0x57c)])) {
                                                                                                        _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x264)]);
                                                                                                        return;
                                                                                                    }
                                                                                                    !_0x16d34a && _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x583)]), _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x664)]);
                                                                                                } else
                                                                                                    _0x5385da[_0x159555(0x266)](_0x486f0c[_0x159555(0x49e)]);
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } catch (_0x4aedc3) {
            console[_0x159555(0x3cc)](_0x486f0c[_0x159555(0x46c)], _0x4aedc3);
        }
    }
};
function getRandomNumber(_0x2f9a0d, _0x5e8b11) {
    const _0x5852ac = _0x5bb60f, _0x37fc94 = {
            'feuYw': function (_0x6c1148, _0x55aafd) {
                return _0x6c1148 + _0x55aafd;
            },
            'tjcpR': function (_0x1c919c, _0x2b9b47) {
                return _0x1c919c * _0x2b9b47;
            },
            'FFRng': function (_0x54c1a0, _0x615e21) {
                return _0x54c1a0 + _0x615e21;
            },
            'EOKqH': function (_0x221cca, _0x51a3bd) {
                return _0x221cca - _0x51a3bd;
            }
        };
    return Math[_0x5852ac(0x326)](_0x37fc94[_0x5852ac(0x593)](_0x37fc94[_0x5852ac(0x794)](Math[_0x5852ac(0x703)](), _0x37fc94[_0x5852ac(0x72d)](_0x37fc94[_0x5852ac(0x226)](_0x5e8b11, _0x2f9a0d), -0x1532 + -0x217d + 0x36b0)), _0x2f9a0d));
}
function generateUniqueID(_0x188857) {
    const _0x5b7bc0 = _0x5bb60f, _0x54bb15 = Date[_0x5b7bc0(0x66f)]();
    return '' + _0x54bb15;
}
function hasItem(_0x17f523, _0x2cf7b9) {
    const _0x2ebe8f = _0x5bb60f, _0x22fdd7 = {
            'HqYMf': function (_0x4711f6, _0x2bfc41) {
                return _0x4711f6 > _0x2bfc41;
            }
        };
    return _0x17f523[_0x2ebe8f(0x7d8)][_0x2ebe8f(0x4fc) + _0x2ebe8f(0x76a)](_0x2cf7b9) && _0x22fdd7[_0x2ebe8f(0x216)](_0x17f523[_0x2ebe8f(0x7d8)][_0x2cf7b9], -0xfd * -0x1 + -0xcb * 0x7 + -0x49 * -0x10);
}
function getUniqueUploadId() {
    const _0x145497 = _0x5bb60f, _0x323699 = {
            'jrdlv': _0x145497(0x1f5) + _0x145497(0x5ce) + _0x145497(0x267) + _0x145497(0x83c),
            'YNPgf': function (_0x309d11, _0x2e0719) {
                return _0x309d11 < _0x2e0719;
            },
            'cVbWH': function (_0x324b57, _0x470173) {
                return _0x324b57 * _0x470173;
            }
        }, _0x1ffe8b = _0x323699[_0x145497(0x528)];
    let _0x41ec59 = '';
    for (let _0x351af9 = -0x189 * -0x8 + 0x88a * -0x4 + -0x19 * -0xe0; _0x323699[_0x145497(0x296)](_0x351af9, 0x8ed * 0x1 + 0x1a72 + -0x2356 * 0x1); _0x351af9++) {
        _0x41ec59 += _0x1ffe8b[_0x145497(0x494)](Math[_0x145497(0x326)](_0x323699[_0x145497(0x775)](Math[_0x145497(0x703)](), _0x1ffe8b[_0x145497(0x6fa)])));
    }
    return _0x41ec59;
}
function loadExistingPets() {
    const _0x190649 = _0x5bb60f, _0x21bac7 = {
            'NqRvB': _0x190649(0x391),
            'qjyVU': _0x190649(0x70c)
        };
    try {
        return JSON[_0x190649(0x18d)](fs[_0x190649(0x4e8) + 'nc'](_0x21bac7[_0x190649(0x6ad)], _0x21bac7[_0x190649(0x523)])) || [];
    } catch (_0x594842) {
        return [];
    }
}
function loadBankData() {
    const _0x12af8c = _0x5bb60f, _0x205f2a = {
            'PPyKE': _0x12af8c(0x4e9) + _0x12af8c(0x261),
            'VZIVf': _0x12af8c(0x70c),
            'qIoTq': _0x12af8c(0x37a) + _0x12af8c(0x790) + _0x12af8c(0x220)
        };
    try {
        const _0x30a7c3 = fs[_0x12af8c(0x4e8) + 'nc'](_0x205f2a[_0x12af8c(0x482)], _0x205f2a[_0x12af8c(0x5b2)]);
        return JSON[_0x12af8c(0x18d)](_0x30a7c3) || {};
    } catch (_0x2d1e45) {
        return console[_0x12af8c(0x3cc)](_0x205f2a[_0x12af8c(0x6e8)], _0x2d1e45), {};
    }
}
function saveBankData(_0xc8f1d2) {
    const _0x344720 = _0x5bb60f, _0x51801b = {
            'GCJWw': _0x344720(0x4e9) + _0x344720(0x261),
            'fUfxG': _0x344720(0x70c),
            'zVmyB': _0x344720(0x7ce) + _0x344720(0x41d) + _0x344720(0x786)
        };
    try {
        fs[_0x344720(0x7ed) + _0x344720(0x22b)](_0x51801b[_0x344720(0x4fd)], JSON[_0x344720(0x44f)](_0xc8f1d2, null, 0x1 * 0xd71 + -0x1c3 * 0x1 + -0xbac), _0x51801b[_0x344720(0x1ad)]);
    } catch (_0x3e6ed2) {
        console[_0x344720(0x3cc)](_0x51801b[_0x344720(0x310)], _0x3e6ed2);
    }
}
function generateBankId() {
    const _0x5e8a2f = _0x5bb60f, _0x1e56cc = {
            'yvaWI': _0x5e8a2f(0x7df) + _0x5e8a2f(0x29a) + _0x5e8a2f(0x488),
            'Xkgws': function (_0x36b95d, _0x1d7a19) {
                return _0x36b95d < _0x1d7a19;
            },
            'NoWcI': function (_0x183027, _0xd16cb4) {
                return _0x183027 * _0xd16cb4;
            }
        }, _0x263045 = _0x1e56cc[_0x5e8a2f(0x20c)];
    let _0x4b897c = '';
    for (let _0x77796b = 0x11f + 0x1cc * -0xd + 0x163d * 0x1; _0x1e56cc[_0x5e8a2f(0x825)](_0x77796b, 0x11c0 + 0x99 + -0x1253); _0x77796b++) {
        _0x4b897c += _0x263045[_0x5e8a2f(0x494)](Math[_0x5e8a2f(0x326)](_0x1e56cc[_0x5e8a2f(0x32c)](Math[_0x5e8a2f(0x703)](), _0x263045[_0x5e8a2f(0x6fa)])));
    }
    return _0x4b897c;
}
function calculateLoanAmount(_0x3459f8) {
    const _0x4cbe66 = _0x5bb60f, _0x254448 = {
            'HNgNr': function (_0xb2528e, _0x4b7e05) {
                return _0xb2528e >= _0x4b7e05;
            },
            'KkuBQ': function (_0x59227c, _0x586059) {
                return _0x59227c * _0x586059;
            },
            'ntKfY': function (_0x581764, _0x3a2124) {
                return _0x581764 / _0x3a2124;
            }
        };
    return _0x254448[_0x4cbe66(0x81d)](_0x3459f8, 0x5a * -0x17 + 0x1b20 + -0x11de * 0x1) ? _0x254448[_0x4cbe66(0x3c7)](Math[_0x4cbe66(0x326)](_0x254448[_0x4cbe66(0x248)](_0x3459f8, -0xc0d + 0x1246 * 0x1 + -0x1 * 0x50d)), 0x864 * 0x3 + -0x2647 + -0x41 * -0x43) : -0x4be * -0x7 + 0x1f97 * 0x1 + 0x217 * -0x1f;
}
function calculateSalary() {
    const _0x4bd790 = _0x5bb60f, _0x2c31dc = {
            'wMidE': function (_0xe25186, _0x2f95a2) {
                return _0xe25186 + _0x2f95a2;
            },
            'iYIUO': function (_0x1f7867, _0x5c6b52) {
                return _0x1f7867 * _0x5c6b52;
            }
        };
    return _0x2c31dc[_0x4bd790(0x5ac)](Math[_0x4bd790(0x326)](_0x2c31dc[_0x4bd790(0x23a)](Math[_0x4bd790(0x703)](), 0xd * -0x25b + -0x2504 + 0x4407)), -0x6db + 0xd * -0x2db + 0x101 * 0x2c);
}
function loadJobData() {
    const _0x1fa420 = _0x5bb60f, _0x4d60e6 = {
            'DvHED': _0x1fa420(0x309) + 'on',
            'CKdeM': _0x1fa420(0x70c),
            'OAjqS': _0x1fa420(0x37a) + _0x1fa420(0x318) + _0x1fa420(0x786)
        };
    try {
        const _0x12688e = fs[_0x1fa420(0x4e8) + 'nc'](_0x4d60e6[_0x1fa420(0x42e)], _0x4d60e6[_0x1fa420(0x6b4)]);
        return JSON[_0x1fa420(0x18d)](_0x12688e) || {};
    } catch (_0x416ab9) {
        return console[_0x1fa420(0x3cc)](_0x4d60e6[_0x1fa420(0x378)], _0x416ab9), {};
    }
}
function saveJobData(_0x25d4e5) {
    const _0x2adceb = _0x5bb60f, _0xfee5b0 = {
            'zVWrB': _0x2adceb(0x309) + 'on',
            'zpPxD': _0x2adceb(0x70c),
            'OYdFX': _0x2adceb(0x7ce) + _0x2adceb(0x311) + 'a:'
        };
    try {
        fs[_0x2adceb(0x7ed) + _0x2adceb(0x22b)](_0xfee5b0[_0x2adceb(0x1c0)], JSON[_0x2adceb(0x44f)](_0x25d4e5, null, 0x205f + 0x1047 + -0x30a4), _0xfee5b0[_0x2adceb(0x3a7)]);
    } catch (_0x3ced7e) {
        console[_0x2adceb(0x3cc)](_0xfee5b0[_0x2adceb(0x567)], _0x3ced7e);
    }
}
function sleep(_0x4ebe98) {
    return new Promise(_0x4e1145 => setTimeout(_0x4e1145, _0x4ebe98));
}
function initiateMarriageRequest(_0x3c7abd, _0x4fff3a) {
    const _0xe7ed6 = _0x5bb60f, _0x13d8e9 = {
            'AoblZ': _0xe7ed6(0x31b),
            'yVPeI': _0xe7ed6(0x1a2),
            'bgRuc': _0xe7ed6(0x391),
            'aUYNd': _0xe7ed6(0x70c)
        }, _0x5f1aef = _0x13d8e9[_0xe7ed6(0x7fc)][_0xe7ed6(0x1bf)]('|');
    let _0x4b43fa = -0x15a7 + 0x350 * -0xa + 0x25 * 0x17b;
    while (!![]) {
        switch (_0x5f1aef[_0x4b43fa++]) {
        case '0':
            _0x3c7abd[_0xe7ed6(0x5f6) + _0xe7ed6(0x6e7)] = {
                'status': _0x13d8e9[_0xe7ed6(0x74e)],
                'requesterID': null
            };
            continue;
        case '1':
            return message[_0xe7ed6(0x266)](_0xe7ed6(0x5bd) + _0xe7ed6(0x3fa) + _0xe7ed6(0x458) + _0xe7ed6(0x3d7) + _0x4fff3a[_0xe7ed6(0x6ef)] + _0xe7ed6(0x449));
        case '2':
            api[_0xe7ed6(0x455) + 'e'](_0xe7ed6(0x243) + _0x3c7abd[_0xe7ed6(0x6ef)] + (_0xe7ed6(0x202) + _0xe7ed6(0x2de) + _0xe7ed6(0x217) + _0xe7ed6(0x687) + _0xe7ed6(0x70e) + _0xe7ed6(0x78e) + _0xe7ed6(0x58b) + _0xe7ed6(0x7f1) + _0xe7ed6(0x4ae) + _0xe7ed6(0x50d) + _0xe7ed6(0x766) + _0xe7ed6(0x577)), _0x4fff3a[_0xe7ed6(0x7d2)]);
            continue;
        case '3':
            _0x4fff3a[_0xe7ed6(0x5f6) + _0xe7ed6(0x6e7)] = {
                'status': _0x13d8e9[_0xe7ed6(0x74e)],
                'requesterID': _0x3c7abd[_0xe7ed6(0x7d2)]
            };
            continue;
        case '4':
            fs[_0xe7ed6(0x7ed) + _0xe7ed6(0x22b)](_0x13d8e9[_0xe7ed6(0x81b)], JSON[_0xe7ed6(0x44f)](existingPets, null, 0xab + -0x1a2d * -0x1 + -0x1ad6), _0x13d8e9[_0xe7ed6(0x6d1)]);
            continue;
        }
        break;
    }
}
function _0x520a() {
    const _0x3930ad = [
        'ner\x20is\x20she',
        'peration.\x20',
        '💼\x20Withdraw',
        'rk\x0a-\x20pet\x20j',
        'e.jpg',
        '\x0a-\x20pet\x20ran',
        'Error\x20savi',
        '\x20work\x20sess',
        'ng\x20details',
        'he\x20healing',
        'uid',
        '\x20is\x20not\x20si',
        'Allow\x20your',
        'dizziness',
        'save',
        'pretzel',
        'items',
        'ofatH',
        'uOnMu',
        'eous:**\x0a-\x20',
        'fOWpN',
        'cipient\x20pe',
        'BlLiw',
        'abcdefghij',
        'al\x20sick**\x0a',
        'deposit',
        'ohTHn',
        'height',
        'author',
        'background',
        '👍\x20Your\x20pet',
        '\x20reached\x20t',
        'already\x20ma',
        'https://ca',
        'k\x20loan**\x0a\x20',
        'g\x20`-pet\x20cr',
        'gtSOR',
        'writeFileS',
        'platinum',
        'nsGTg',
        'llowed.',
        '.\x20If\x20you\x20w',
        '\x20pending\x20m',
        '\x20moment.',
        'gfhdY',
        '\x20**pet\x20job',
        'IucOG',
        'DKNjw',
        '🕵️‍♂️\x20Your\x20pet',
        '🚫\x20Insuffic',
        'peach',
        '\x0a😊\x20Happine',
        'AoblZ',
        '💒\x20Congratu',
        '600\x2050px\x20A',
        '❌\x20This\x20nam',
        'XDBIo',
        'another\x20pe',
        'er)\x20|\x20(pet',
        'ance:\x20',
        '#000000',
        'drawImage',
        'ey\x20from\x20yo',
        'd\x20gained\x20a',
        '\x20item\x20name',
        'ype\x20\x27pet\x20h',
        'statement',
        'cheese',
        'et.\x20Create',
        'rFxdh',
        '\x0aHunger:\x20',
        'AXkwj',
        'tion\x20a\x20use',
        'essing\x20the',
        '\x20Tip:**\x0a\x20\x20',
        'find',
        'GmkHh',
        's\x20availabl',
        'OSbPz',
        '\x20one\x20using',
        'ARQTs',
        'Fcjio',
        'marriage.',
        'bgRuc',
        'ties\x20for\x20y',
        'HNgNr',
        '\x20using:\x20\x27p',
        '\x0a-\x20pet\x20bat',
        'BCmeW',
        'while\x20proc',
        '*\x0a\x20\x20\x20\x20Allo',
        'ugh\x20coins\x20',
        'r\x20\x27pet\x20tra',
        'Xkgws',
        'pet\x20job\x20wo',
        'rried.',
        'ties.\x0a\x0a\x0a\x20\x20',
        '\x20has\x20been\x20',
        'FRgbs',
        'rBYJW',
        'taInW',
        'RhSkQ',
        '\x20use\x20valid',
        'ing\x20circle',
        '😰\x20Your\x20pet',
        'WdxiZ',
        'ccurred:',
        'rent\x20job\x20s',
        '\x20pet\x20hospi',
        'xqxDb',
        ',\x20male),\x20n',
        'to\x20enable\x20',
        'croissant',
        'your\x20fello',
        'ins.\x0a\x0a\x0a\x20\x20-',
        'mkgBR',
        '456789',
        'r\x20pet\x20to\x20t',
        'ccurred:\x20',
        'withdraw',
        'pet\x20ID.\x20No',
        '\x20-\x20**pet\x20j',
        'parse',
        '😾\x20I\x27m\x20hidd',
        'yuQQB',
        '\x20from\x20',
        'ptional\x20bi',
        'mango',
        'Commands*💼',
        'You\x20got\x20a\x20',
        'm(s).',
        'k\x27\x20to\x20heal',
        'some',
        'sex',
        'r\x20your\x20pet',
        '\x27s\x20injury\x20',
        'master.png',
        'd\x20to\x20',
        '1784628hPcpXJ',
        '❌\x20An\x20error',
        'kEwvz',
        'bllkc',
        'lations!\x20Y',
        'pending',
        '\x20others.\x0a\x0a',
        'ne\x20using\x20-',
        'forEach',
        'oEHfO',
        'User\x20pet\x20d',
        'FeMYu',
        'kHCgl',
        'ith\x20is\x20cur',
        '\x20you\x20have\x20',
        '\x20item\x20to\x20t',
        'fUfxG',
        'replenish\x20',
        '\x20pet\x20ID\x20is',
        'ur\x20pet\x20is\x20',
        'asu',
        'o\x20support\x20',
        'right',
        'married',
        'zPTvC',
        'a\x20valid\x20po',
        'ank\x20is\x20now',
        'PqGrH',
        '\x20and\x20quant',
        'ate...`.',
        'ck.\x20No\x20tre',
        'lhcFa',
        'r\x20donation',
        'nigga',
        'split',
        'zVWrB',
        'ailable.',
        '.\x20Earned\x20',
        'em_name\x20qu',
        'ying\x20to\x20cl',
        '🙈\x20The\x20targ',
        'the\x20list\x20o',
        'WrykQ',
        'MglUz',
        '😷\x20Oh\x20no!\x20',
        'e\x20requests',
        'pngtree-br',
        'osMoi',
        'uest\x20to\x20',
        'the\x20opposi',
        'rowse\x20item',
        'play',
        'beginPath',
        'et\x20job\x20inf',
        'evel.\x20Go\x20t',
        '\x20reject**\x0a',
        'h\x20injury\x20l',
        '💍\x20Your\x20pet',
        'workCount',
        'sPbeM',
        'cmJIC',
        'bank',
        'aJCVR',
        'op\x20(how\x20ma',
        '\x20-\x20**pet\x20b',
        'e\x20for\x20rand',
        'rank',
        'nd\x20name\x20fo',
        'e\x20your\x20pet',
        'e...`.',
        '$,\x20and\x20you',
        'en.\x20If\x20you',
        'dpcaC',
        'if\x20injured',
        'in\x20constru',
        'headache',
        'change',
        'op**\x0a\x20\x20\x20\x20B',
        'o\x20view\x20tra',
        'GDwAQ',
        '\x20is\x20out\x20of',
        'sushi',
        'salary',
        'found.\x20Ple',
        'createRead',
        'pet\x20bal\x0a-\x20',
        '61542kMIMAn',
        '\x20rank\x20comm',
        'ABCDEFGHIJ',
        '\x20treated.\x20',
        'ssful!',
        'shop',
        '💔\x20You\x20have',
        'width',
        '\x20\x20List\x20ava',
        'filter',
        'bronze',
        '\x20rejected\x20',
        'HADsr',
        'de\x20mode,\x20u',
        'marriage\x20r',
        '\x20has\x20sent\x20',
        'ss:\x20',
        'our\x20pet\x20to',
        'oVraK',
        'ur.',
        'NMGtu',
        'jEYac',
        '\x20discount!',
        'and.\x20',
        'Your\x20marri',
        'yvaWI',
        ')**\x0a\x20\x20\x20\x20Wi',
        'gender.\x20Av',
        'GhaUq',
        '🔍\x20The\x20pet\x20',
        'lastWorkDa',
        'off',
        'ose\x20a\x20diff',
        'ted\x20with\x20t',
        '🐾\x20You\x20alre',
        'HqYMf',
        '\x20request.\x20',
        'hfkXr',
        'ob**\x0a\x20\x20\x20\x20E',
        'VXTQP',
        'QuxSX',
        'writeFile',
        'ApCjL',
        've\x20that\x20it',
        '🐾Available',
        'ata:',
        'tkcRS',
        'cherry',
        'qiCjm',
        'leep\x0a\x0a**Pe',
        '⌛\x20You\x20can\x20',
        'EOKqH',
        'JjoCe',
        '\x20\x20\x20\x20Show\x20y',
        '\x20with\x20is\x20c',
        'marshmallo',
        'ync',
        'CnInq',
        'Wcvfu',
        'pet\x20hospit',
        'Energy\x20inc',
        'ccurred\x20wh',
        ')\x27\x20to\x20trad',
        'girl',
        '\x20Single',
        'HhjPK',
        'ailable\x20ge',
        'tails.\x0a\x0a\x0a\x20',
        'https://i.',
        'while\x20hand',
        'Name:\x20',
        'iYIUO',
        'idden.\x20You',
        'd>\x20<amount',
        'se\x20\x27pet\x20ho',
        'cessful!\x20Y',
        '\x0a💡\x20Exp:\x20',
        'until\x20you\x20',
        'gzMJD',
        '3|1|2|4|0|',
        'Your\x20pet\x20',
        'are:\x20',
        'er.\x20You\x20ca',
        '\x20has\x20no\x20en',
        'QPGPV',
        'ntKfY',
        '\x0aEnergy:\x205',
        'nachos',
        'Vrhkz',
        'using\x20thei',
        '\x20-\x20**pet\x20h',
        '😷\x20',
        '-pet\x20chang',
        'rYbzi',
        'hoose\x20a\x20di',
        '❌\x20Invalid\x20',
        '\x20-\x20**pet\x20p',
        'QrUDv',
        'vomiting',
        'hpkum',
        'hotdog',
        '\x20for\x20the\x20p',
        'kontol',
        '\x20data\x20not\x20',
        'ess:',
        'nders\x20are\x20',
        '\x0a\x0aNote:\x20Ma',
        'hO6NvML.jp',
        'atment\x20nee',
        'zfFgT',
        'son',
        '\x20need\x20',
        ')\x20(food\x20na',
        'uMJbI',
        '(s)\x20for\x20$',
        'reply',
        'UVWXYZ0123',
        'et\x20details',
        'pHKfl',
        'e\x20commands',
        'SxQMg',
        'sing\x20the\x20s',
        'rently\x20hid',
        '6QGUFoo.jp',
        'et\x20donate*',
        'aCwvi',
        'ne\x20using\x20`',
        '\x0aHappiness',
        'imgur.com/',
        '*Banking:*',
        'nt\x20to\x20reje',
        'HEOfb',
        'y\x20decrease',
        'id**\x0a\x20\x20\x20\x20V',
        '\x0a\x0a**Employ',
        'pay\x20the\x20lo',
        '2|6',
        'fillStyle',
        'an\x20from\x20yo',
        'Silver',
        'y\x20and\x20happ',
        'tions.\x0a\x0a\x0a\x20',
        'a\x20virtual\x20',
        'ot\x20have\x20a\x20',
        'winCount',
        'messageRep',
        'cuKlv',
        'ds:**\x0a\x0a\x0a\x20\x20',
        'grandmaste',
        'nk\x0a-\x20pet\x20b',
        'ikh.\x20🚫',
        'qOvbY',
        'onze-award',
        'nation\x20amo',
        'posit\x20(amo',
        'pet\x20donate',
        'mUrDb',
        'ils\x20update',
        'PELnB',
        't\x20have\x20a\x20p',
        'cept\x27\x20or\x20\x27',
        'tIZZO',
        'iZDHl',
        'YNPgf',
        '😟\x20',
        'balance\x0a-\x20',
        '\x0aNew\x20Gende',
        'klmnopqrst',
        'rRqxW',
        'exp',
        '\x20Please\x20wa',
        'WDQJj',
        'eal.',
        'happiness',
        'r\x20new\x20bank',
        '🍲\x20You\x20fed\x20',
        '\x20cost.\x20You',
        'IGCGm',
        '\x20trade\x20wit',
        'magi',
        'marriage',
        'GAzUa',
        'jjlit',
        '\x20image:',
        'zbxnc',
        'uploadId',
        'r\x20or\x20provi',
        '❌\x20You\x20don\x27',
        '.\x20You\x20have',
        'unts\x20found',
        'BPhaU',
        'UjzLs',
        'tions:**\x0a-',
        'you\x20want\x20t',
        'apple',
        'reojB',
        'rXdBp',
        '\x20sick\x20with',
        'clgRB',
        'pet\x20battle',
        '600\x20100px\x20',
        'tatement\x20b',
        '/28000',
        'MmBin',
        'coins',
        'middle',
        'eate\x20(gend',
        'eep**\x0a\x20\x20\x20\x20',
        '7HZRCNu',
        'QKhtb',
        'p\x0a-\x20pet\x20sh',
        'd\x20pets.\x0a\x0a\x0a',
        'sort',
        '\x20Stats:\x0aEn',
        'our\x20pet\x20',
        '\x20shop\x20comm',
        'details\x20(p',
        '\x20bank\x20stat',
        'EhTrj',
        '🛒\x20Sorry,\x20w',
        'hvEWg',
        'rank.',
        '\x20Available',
        'YntaY',
        'eposit:\x20`p',
        'VlbOJ',
        '-\x20**pet\x20sh',
        'ent.',
        'e\x20proposal',
        '📜\x20Trade\x20Up',
        'aw\x20(amount',
        '/5tPRBS4R/',
        'gESEu',
        't\x20have\x20suf',
        '\x20pet\x20play\x0a',
        'a\x20marriage',
        'ncreased\x20t',
        'BieUw',
        'readFile',
        'urn\x20off\x20hi',
        'DIKVu',
        '❌\x20Partner\x20',
        'to\x20cover\x20t',
        'eams!',
        'job',
        'ble\x20Comman',
        '\x20bank\x20comm',
        'yEOfc',
        'ank.\x0a\x0a\x0a\x20\x20-',
        'sheikh\x20far',
        'opose\x20marr',
        'dden.\x20No\x20o',
        'with\x20non-z',
        'min',
        'aILoh',
        'HZzkS',
        '\x20coins.\x20Yo',
        'st.',
        'pZIOX',
        's\x20has\x20been',
        'XalYT',
        'ZdMFk',
        'heal.',
        'le\x20for\x20a\x20l',
        '🍔\x20Your\x20pet',
        '❌\x20No\x20pendi',
        'ZpHEH',
        'keys',
        'ECJxV',
        'gender.',
        'vbhpu',
        'ank\x20deposi',
        'SilYC',
        'FPIzj',
        'nd.\x20',
        '\x20has\x20full\x20',
        'hAfIL',
        '\x20pet\x20ID\x20fo',
        'jobData.js',
        'arried.\x20💍',
        'gVcbA',
        'lance\x20is\x20',
        'SnrCX',
        'SdXYJ',
        'waffle',
        'zVmyB',
        'ng\x20job\x20dat',
        'font',
        '\x20coins\x20to\x20',
        'CwVgY',
        'tMpPR',
        'mgwfJ',
        '\x20are\x20now\x20m',
        'ing\x20job\x20da',
        'er\x20(female',
        'de\x20listing',
        '3|0|4|2|1',
        '\x20sent\x20a\x20ma',
        'ate\x20gender',
        'Enjoy\x20your',
        'loanpay\x20(a',
        'found.',
        'unt)`\x0aLoan',
        'orange',
        'OUWCb',
        'HnNBa',
        'boy',
        'floor',
        '\x20is\x20sick.\x20',
        'command.\x20🤖',
        'YrtgU',
        'ioned\x20user',
        'le\x20image.',
        'NoWcI',
        'FJYFX',
        'BOX\x20CHAT',
        'h\x20new\x20pet\x20',
        'ned',
        'energy\x20and',
        'successful',
        '$.\x20You\x20hav',
        'details',
        'w\x20pets.\x0a\x0a\x0a',
        '\x20`pet\x20bank',
        '\x20does\x20not\x20',
        'ing\x20rank\x20i',
        '\x20hour.\x20Ple',
        'Stream',
        'de\x20off\x27.',
        'ommand.\x20',
        'te\x20gender.',
        'y\x27\x20or\x20\x27sic',
        'ient\x20funds',
        '\x0a-\x20pet\x20pid',
        '\x20purchased',
        'findIndex',
        'fs-extra',
        'et\x27s\x20name\x20',
        'BDdbW',
        'new\x20bank\x20s',
        'zMxqm',
        'ommand.',
        '\x20and\x20',
        'BTVSZ',
        'cjIWy',
        't\x20Informat',
        '\x0a⚡\x20Energy:',
        'soHNa',
        'e,\x20see\x20det',
        'e\x20for\x20purc',
        'prize',
        'RfyZq',
        'g\x20to\x20sleep',
        '!\x20🌟\x20Your\x20r',
        'YKarM',
        'VtHiM',
        'k\x20details.',
        '\x0a\x20\x20\x20\x20Creat',
        'KXdsp',
        '❌\x20The\x20repl',
        '-\x20pet\x20bank',
        'ed\x20with\x20yo',
        '\x20to\x20',
        '✨\x20Pet\x20deta',
        'xsJjT',
        'ave\x20any\x20in',
        'idden.',
        '\x0a🏆\x20Win\x20Cou',
        '\x20Deposit\x20m',
        'dNXuN',
        'he\x20maximum',
        '.\x20Keep\x20pla',
        '\x0a-\x20pet\x20sho',
        '4|3|5|0|1|',
        'werfull\x20pe',
        'mentions',
        'our\x20pet\x20or',
        'not\x20eligib',
        'pet\x20top**\x0a',
        'antity\x27\x0a\x0a📌',
        '\x20\x20-\x20**pet\x20',
        'NWKSi',
        '\x20**pet\x20mar',
        'cookie',
        'rejected',
        'ing\x20again.',
        '💼\x20Work\x20suc',
        'OuDIx',
        'WXvwn',
        'OAjqS',
        'OQFEf',
        'Error\x20load',
        '\x20command.\x20',
        'BYtZs',
        'trim',
        'cache',
        '8943286pIEIEz',
        '**\x0a\x20\x20\x20\x20Cha',
        'draw\x20(amou',
        'vgTRD',
        'xSGtE',
        'closePath',
        'your\x20pet\x20w',
        'e\x20Status:',
        '.\x20Create\x20o',
        'bread',
        'PNFoI',
        '🚫\x20Please\x20c',
        'r\x20this\x20don',
        'ht!\x20Your\x20p',
        'xrlJt',
        'hospital',
        'onFUf',
        'uGolZ',
        'pets.json',
        'oceNf',
        '\x0aBio:\x20',
        'nd\x20earn\x20co',
        'e\x20of\x20a\x20hig',
        'he\x20top-ran',
        'ank\x20statem',
        'json:',
        'cough',
        'heVms',
        't\x20have\x20the',
        '\x20|\x20',
        'only\x20marry',
        'ital\x20and\x20t',
        '\x0aPrize:\x20',
        'hidden.\x20Yo',
        '-\x20pet\x20feed',
        't,\x20use\x20\x27pe',
        'UZAEX',
        'BhJwl',
        'et\x20hospita',
        '\x20job\x20comma',
        'zpPxD',
        'lCRek',
        'and\x20gender',
        'r\x20pets\x27\x20de',
        '\x20pet,\x20incr',
        'of\x20current',
        'rtElG',
        'ry:\x2050\x0aRan',
        'o.\x0a\x0a\x0a\x20\x20-\x20*',
        '\x20is\x20now\x20hi',
        'he\x20followi',
        'rgy.\x20You\x20c',
        'e:\x20-pet\x20do',
        'strawberry',
        'status',
        'de\x20list\x0a\x0a*',
        'pancake',
        'ealed.\x20Pai',
        '\x20items:\x20',
        'e\x20provide\x20',
        '\x20`-pet\x20hel',
        'UMZhi',
        'XzIit',
        't**\x0a\x20\x20\x20\x20Vi',
        'battle',
        'ade\x20(item\x20',
        'IuWEk',
        'w\x20your\x20pet',
        '\x0a-\x20pet\x20hid',
        'quote.png',
        'RGeIm',
        '\x20to\x20work\x20a',
        'KkuBQ',
        '🐾\x20**Availa',
        'VaCxe',
        'p\x20to\x20',
        'e\x20with\x20a\x20p',
        'error',
        'XUqKh',
        'Master',
        'om\x20coins\x20o',
        'ur\x20pet\x27s\x20b',
        'ity\x20to\x20buy',
        '\x0a🌟\x20Level:\x20',
        '🎉\x20Congratu',
        'spital\x20sic',
        'brownie',
        'on\x27t\x20add\x20b',
        'st\x20to\x20',
        '190436NSjEVk',
        'd\x0a\x0a**Trans',
        'pet\x20job\x0a-\x20',
        'bank**\x0a\x20\x20\x20',
        'Check\x20the\x20',
        'efore\x20work',
        '\x20bank\x20with',
        'rSmuv',
        'erent\x20name',
        'until\x20it\x20g',
        'king\x20pets.',
        'et\x20ID.',
        't\x20have\x20eno',
        'amount)\x0a\x0a*',
        '\x20\x20\x20Take\x20a\x20',
        'FrdQM',
        '\x20name`.',
        '...',
        'tal\x20injury',
        'rent\x20bank\x20',
        '\x20a\x20pet\x20of\x20',
        'ZigpU',
        'oney\x20into\x20',
        '\x20pet\x27s\x20ban',
        'ions\x20remai',
        '\x20no\x20injury',
        'dNGLc',
        '\x20\x20If\x20your\x20',
        'zzblX',
        'bbwHX',
        'petID',
        'hmSNN',
        'an\x27t\x20battl',
        'evel.',
        'ent\x20a\x20marr',
        'An\x20error\x20o',
        'level',
        'ge.',
        'sleep',
        'ne\x20can\x20int',
        'itive\x20numb',
        'fic\x20inputs',
        'd\x20user:\x20',
        'ceptance\x20c',
        '\x27s\x20pet\x20has',
        '💰\x20Your\x20cur',
        '\x20Accept\x20a\x20',
        '\x0a-\x20pet\x20ban',
        'ergy\x20to\x20ba',
        '❓\x20Invalid\x20',
        'ails,\x20get\x20',
        'er)\x20for\x20th',
        'piness\x20and',
        'ad\x20names.',
        '\x20from\x20usin',
        '\x20credit;\x20t',
        'wCgXS',
        'ur\x20pet!\x20Ha',
        '💼*Pet\x20Job\x20',
        '/1tkMBWLJ/',
        '5|4|0|3|1|',
        '\x27s\x20win\x20cou',
        '\x20leveled\x20u',
        'YuUib',
        'wCVKL',
        'hboxm',
        'Moxlw',
        'tZXSb',
        '\x0a\x0a\x20\x20-\x20**pe',
        'ng\x20bank\x20da',
        't\x0a\x0a**Healt',
        'ate...\x27',
        'ata\x20not\x20fo',
        'an\x20now\x20int',
        'imb\x20the\x20le',
        'iMPxF',
        'textBaseli',
        '🎉\x20You\x20play',
        'Image.jpg',
        'opponent\x20p',
        '3|5|4|0|1|',
        'The\x20pet\x20yo',
        'seller',
        '/70',
        'rial',
        'lzMBw',
        'DvHED',
        '4|2|0|3|1',
        '\x20-\x20**pet\x20r',
        '💔\x20You\x20are\x20',
        'alance\x20is\x20',
        '🐾\x20Pet\x20crea',
        'pital\x20sick',
        '\x20View\x20your',
        'oose\x20from\x20',
        'cake',
        'der.',
        'ed\x20user\x20fo',
        'er\x20is\x20',
        'data',
        'LkfPD',
        'balance',
        'spffH',
        'bangke',
        'it\x20until\x20t',
        '💰\x20You\x20don\x27',
        '.\x20🏆\x20Energy',
        '\x0a-\x20pet\x20tra',
        '\x20for\x20each\x20',
        '😩\x20Your\x20pet',
        'e\x20(on/off)',
        'diarrhea',
        'Omhhl',
        '.\x20💍',
        '\x20occurred\x20',
        'BahvM',
        'RYEAZ',
        '-pet\x20creat',
        'nd.',
        'stringify',
        'ion:**\x0a-\x20p',
        'iage\x20to\x20an',
        'rried\x20to\x20',
        '\x20loan\x0a-\x20pe',
        'has\x20been\x20h',
        'sendMessag',
        'ppiness\x20in',
        'nt\x20is\x20',
        'iage\x20reque',
        'oes\x20not\x20ha',
        '\x20and\x20hunge',
        'zmjdU',
        'ou\x20are\x20now',
        'ly\x20sick,\x20u',
        'eract\x20with',
        '\x0a💰\x20Coins:\x20',
        '524UlNrjL',
        '\x20coins.\x20No',
        'et\x20or\x20othe',
        'iew\x20the\x20ID',
        'ice\x20cream',
        '\x20\x20\x20View\x20de',
        '\x20view\x20othe',
        'wxawj',
        'BsGsL',
        'mUHeN',
        'Luefp',
        'nd\x20marriag',
        'weTon',
        'getData?id',
        'tle\x20with\x20t',
        'ing\x20backgr',
        'ero\x20win\x20co',
        'kCCVa',
        'loan\x20from\x20',
        'IDzaT',
        '\x20balance\x20i',
        '\x20coins.',
        '🚫\x20Invalid\x20',
        'battle\x20wit',
        'alary\x20is\x20',
        'Congratula',
        'This\x20user\x20',
        'arriage\x20ac',
        't\x20to\x20',
        'unt.\x20Pleas',
        'current\x20ba',
        'none',
        'coconut',
        'ou\x20want\x20to',
        'PPyKE',
        '\x20stock.',
        'd!\x0aNew\x20Nam',
        'draw:\x20`pet',
        'slice',
        'Invalid\x20re',
        'uvwxyz',
        'ficient\x20co',
        'mand.\x20',
        '\x20energy\x20an',
        'info',
        'fferent\x20na',
        '💔\x20',
        'ergy:\x20',
        'and.\x20Use\x20\x27',
        'anjing',
        '\x20pet\x20found',
        'ement\x20bala',
        'charAt',
        '.\x20\x0a\x0a💡\x20Leve',
        'al\x20injury*',
        'salad',
        'send',
        'b\x20work\x0a-\x20p',
        'npay\x0a\x0a**Re',
        'XtRyd',
        'HDCwU',
        'ry\x20(pet\x20ID',
        'vdWWo',
        'LvYKc',
        '\x20**pet\x20ban',
        'injury',
        'AJGdO',
        'k\x0a-\x20pet\x20to',
        'ank\x20Comman',
        '\x20limit\x20for',
        '\x0a\x0a**Pet\x20Ac',
        '\x20\x20\x20\x20Reject',
        'iJcel',
        'ne!\x20Your\x20',
        'd.\x20',
        'p\x0a-\x20pet\x20pi',
        'BBHwJ',
        'h\x20a\x20desire',
        'ant\x20to\x20rej',
        'loan',
        'ew\x20a\x20list\x20',
        'rom\x20replie',
        'MOcqy',
        'now.\x20Wait\x20',
        'reject',
        '⌛\x20The\x20targ',
        '!\x20Your\x20new',
        'nt)`\x0aLoan:',
        'feoCS',
        'OgplB',
        'donate\x27\x20co',
        'join',
        'lations!\x20',
        '\x20\x20\x20\x20Treat\x20',
        'LFpJy',
        'exports',
        'grape',
        'loanpay',
        'xJMgM',
        '💼\x20Deposit\x20',
        'equest.',
        'u\x20want\x20to\x20',
        'tbin.cat-v',
        '0.png',
        '4|0|2|5|3|',
        '\x20isn\x27t\x20hun',
        '/3x81t0c5/',
        'his\x20scared',
        'bkHWp',
        '\x20woke\x20up!\x0a',
        '135PWdCHL',
        'ts**\x0a\x0a',
        'No\x20trade\x20l',
        '💰💼\x20**Pet\x20B',
        'sEHmtT0.jp',
        'he\x20real\x20ow',
        'trade',
        'hXPbb',
        '-png-image',
        'r\x20ID.\x0a\x0a\x0a\x20\x20',
        'guklP',
        'ASrbj',
        'eate...`.',
        'Invalid\x20co',
        'master',
        'burger',
        'pet',
        'thdraw\x20mon',
        'MNhOA',
        '\x0a\x0a🆔\x20Pet\x20ID',
        'EtZma',
        'once\x20every',
        '❌\x20The\x20ment',
        'CsjIX',
        'hide\x20mode\x20',
        'QfwuS',
        'readFileSy',
        'bankData.j',
        'ttle\x20with\x20',
        'he\x20treatme',
        'ation.',
        'Invalid\x20ra',
        'Bronze',
        'ins.\x20Your\x20',
        '⚠️\x20Your\x20pet',
        'se\x20\x27pet\x20hi',
        'de\x20a\x20valid',
        'ith\x20your\x20o',
        '\x20want\x20to\x20t',
        '\x0a🏆\x20Wins:\x20',
        '*pet\x20play*',
        '\x0a🍲\x20Hungry:',
        'aderboard!',
        'g\x20energy.\x0a',
        'pid',
        'nCTYe',
        'hasOwnProp',
        'GCJWw',
        'OpAWi',
        'mage:',
        'ading\x20back',
        '-\x20**pet\x20tr',
        'me)\x27.',
        'donate',
        '16SkThOz',
        'hide\x20on**\x0a',
        'Access\x20den',
        '🌡️\x20Your\x20pet',
        'hide\x20mode.',
        'from',
        'help',
        'et\x20pet\x20is\x20',
        'sitive\x20num',
        'ect,\x20use\x20\x27',
        't\x20have\x20',
        'RfXuG',
        '🙈\x20The\x20pet\x20',
        'QhkIA',
        'r\x20limits\x20i',
        'zZBXR',
        'ur\x20pet\x20to\x20',
        'yCipL',
        'pear',
        '329464KXFJwY',
        '\x20`-pet\x20cre',
        '0\x0aHappines',
        '🚫\x20User\x20pet',
        'Howfv',
        'ets\x20hungry',
        'rovide\x20bot',
        'tails\x20of\x20y',
        '.\x20You\x20cann',
        'feed',
        'ood\x20amount',
        'erience:\x20',
        'qjyVU',
        'k\x27\x20to\x20trea',
        '\x0a-\x20pet\x20hos',
        '\x20in\x20your\x20b',
        '\x20trade\x20lis',
        'jrdlv',
        'Invalid\x20do',
        'babi',
        'tle\x20becaus',
        '\x20Use\x20\x27on\x27\x20',
        '.\x20Buy\x20food',
        'mand.',
        'nt:\x20',
        'No\x20mention',
        '\x20with\x20your',
        'o\x20disable\x20',
        'rash',
        'Xqkhw',
        'de\x20mode.',
        '\x20hidden\x20pe',
        '\x20opportuni',
        'you.',
        'rejected.\x20',
        'leep\x20comma',
        'kiwi',
        '1.0',
        '1.png',
        'DSmey',
        'ied\x20user\x20d',
        '\x0aGender:\x20',
        'ilable\x20job',
        '\x20gender\x20na',
        'sing\x20the\x20m',
        '*Miscellan',
        'et\x20is\x20goin',
        'avocado',
        'available\x20',
        'donut',
        'iness.\x0a\x0a\x0a\x20',
        'ew\x20pet\x20gen',
        'Xxjig',
        '\x20single',
        'me.\x20The\x20pr',
        'unt)**\x0a\x20\x20\x20',
        'nk:',
        'et\x20pet\x20alr',
        '\x20\x20\x20\x20View\x20t',
        'memek',
        'push',
        'rovide\x20the',
        '/SK8hVPPv/',
        'ZcooJ',
        '\x20commands🐾',
        '\x20doesn\x27t\x20h',
        'lease\x20use\x20',
        'ISmSH',
        ')**\x0a\x20\x20\x20\x20Pr',
        'disable\x20hi',
        'XGtyG',
        'wn\x20pet.',
        'cLQXa',
        'trade\x20comm',
        'found\x20for\x20',
        'textAlign',
        'KAwpe',
        'al\x20success',
        '\x0a🆔\x20Pet\x20ID:',
        't\x20accept\x27.',
        'OYdFX',
        'You\x20don\x27t\x20',
        'WmefJ',
        'mJKWD',
        'ILiBo',
        '\x0a🥇\x20Rank:\x20',
        'qInoB',
        'heuoZ',
        '\x20is\x20buy\x20fo',
        'reased\x20to\x20',
        '\x20\x20\x20\x20Hide\x20y',
        'cally.\x0a\x0a\x0a\x20',
        'ortunities',
        'k:\x20Bronze\x0a',
        'list',
        'bangsat',
        't\x27.\x20💌',
        'fever',
        'requesterI',
        '\x0a\x0a-\x20pet\x20jo',
        'a\x20valid\x20pe',
        'cVZnu',
        'UtIYE',
        'Platinum',
        'TCdhB',
        '\x20pet.\x20If\x20y',
        'it.',
        'iVDvm',
        'FdLDE',
        'us!\x20You\x27ve',
        'item\x20name)',
        'ou\x20need\x20',
        'GxGQw',
        'THuVR',
        '\x20with\x20gend',
        '\x20is\x20now\x20ma',
        'et\x20accept\x27',
        'et\x20id)**\x0a\x20',
        'n\x20item\x20for',
        'd\x20prize.\x0a\x0a',
        'ilable.',
        'nnot\x20use\x20t',
        'de\x20list\x27\x20t',
        'jection\x20co',
        'feuYw',
        'ehhDh',
        'UOLph',
        'pLPKG',
        'et\x20reject\x27',
        '.\x20Take\x20you',
        'iHZYB',
        'rriage\x20req',
        'only\x20work\x20',
        'h\x20coins\x20fo',
        'nder:',
        '\x20of\x20your\x20p',
        '\x20has\x20died.',
        'splice',
        'utf-8',
        '\x20/\x20',
        '\x20\x20Upload\x20a',
        'marry',
        'ou\x20borrowe',
        'se\x20the\x20ite',
        'our\x20pet\x20fr',
        'SGRdn',
        '💍\x20You\x20have',
        'balance\x20is',
        'tRneS',
        'wMidE',
        'Rank-Icon-',
        'flu',
        'rice',
        'Aucrr',
        'unt)`\x0aWith',
        'VZIVf',
        'CzvUl',
        'circleImag',
        'hGBau',
        'VfaIh',
        'mount)`',
        '\x20is\x20alread',
        'NoBwF',
        'center',
        'y**\x0a\x20\x20\x20\x20Re',
        '`pet\x20bank\x20',
        'You\x20have\x20s',
        '❌\x20Please\x20d',
        'ting\x20pets.',
        '\x20Payment:\x20',
        'BqOFW',
        'et\x20shop\x20(f',
        '\x20image.\x20',
        'he\x20trade\x20c',
        'ycoyD',
        'ading\x20circ',
        'get',
        'ient\x20coins',
        'nly\x20fallen',
        'ing-with-s',
        '\x20your\x20pet\x20',
        'ct,\x20use\x20\x27p',
        'jury\x27\x20to\x20h',
        'KLMNOPQRST',
        '\x20your\x20pet.',
        'ling\x20autom',
        'oYycI',
        'rade.',
        'emale.',
        'Edmdg',
        'et\x20that\x20ha',
        'lBibz',
        'actions:**',
        'candy',
        'ovided\x20nam',
        'Hzako',
        'y\x20married.',
        '\x20coins\x0a\x0a',
        'KjevL',
        '🔍\x20Pet\x20ID\x20f',
        '\x0a👫\x20Marriag',
        'und.',
        'f\x20availabl',
        '\x20using\x20\x27pe',
        'l\x20sick\x27.\x20🏥',
        '*\x0a\x20\x20\x20\x20Play',
        'other\x20pet\x20',
        '\x20job\x20work*',
        'lastLoanDa',
        'xplore\x20job',
        'ljvyn',
        'zWEtB',
        't\x20ID.',
        '❌\x20Insuffic',
        'urrently\x20h',
        'taco',
        '10UyjsTr',
        'carrot',
        'eir\x20ID.\x0a\x0a\x0a',
        '6698892QQezWQ',
        'Silver-5.p',
        'wmFjF',
        'tarNV',
        'marriageRe',
        'ble\x20items\x20',
        '**🏆\x20Top\x20po',
        'Arial',
        'roposal.\x0a\x0a',
        'hJDMj',
        'have\x20enoug',
        '-6100837.p',
        'AOHPO',
        '\x20create\x20a\x20',
        '\x20working\x20i',
        't\x20(amount)',
        'alid\x20quant',
        '❌\x20Please\x20p',
        '\x0aItem:\x20',
        '\x20marry\x20(pe',
        'ke\x20sure\x20to',
        'k\x20withdraw',
        '🚻\x20You\x20can\x20',
        'ground\x20ima',
        '😾\x20Please\x20p',
        '🍔\x20You\x20don\x27',
        '🚫\x20You\x20can\x27',
        'marriage\x20p',
        'HsDNn',
        'e\x20\x27-pet\x20ac',
        '🚨\x20An\x20error',
        'rywhr',
        'e\x20command.',
        'toFixed',
        'ank\x20withdr',
        'UPWPc',
        'YoemB',
        '\x20in\x20a\x20corn',
        '\x20pet.\x0a\x0a\x0a\x20\x20',
        '❌\x20You\x20are\x20',
        '\x20(pet\x20id)*',
        ':\x0a\x0a📛\x20Name:',
        'LRVzz',
        'n\x20an\x20hour.',
        'TCyxQ',
        'pet.\x20Creat',
        'Icon-rank-',
        '\x20trade\x20opp',
        'ttle.',
        'lWkhm',
        'Dbush',
        'g\x20the\x20pet!',
        'iWpAZ',
        'rovided\x20pe',
        ':**\x0a-\x20pet\x20',
        'pet\x20bio)**',
        'chocolate',
        's:\x2050\x0aHung',
        'VKlHI',
        'xp:\x200',
        'GlVUU',
        'sickness',
        '💰\x20Your\x20bal',
        'om\x20interac',
        'ith\x20',
        'ment:**\x0a-\x20',
        'ring\x20energ',
        'koEZZ',
        'max',
        'gold',
        'end\x20a\x20marr',
        'n\x20injury\x20o',
        '\x20to\x20purcha',
        'Paid\x20',
        't\x27.\x20❌',
        '😴\x20Good\x20nig',
        'rocess\x20of\x20',
        '\x0aTotal\x20Exp',
        'pet\x20change',
        'canvas',
        'oan\x20at\x20the',
        '10.png',
        'pet\x20trade\x20',
        'e\x20request\x20',
        'Level:\x201\x0aE',
        '\x20(amount)\x0a',
        'et\x20bank\x20de',
        'bal',
        'vwgbW',
        'flwzY',
        'restore',
        'zaXLT',
        'Diamond',
        'arriage\x20re',
        'Asozb',
        'et.',
        'XjOCC',
        'name\x20and\x20n',
        'ction',
        '\x20is\x20hidden',
        'ment\x20succe',
        '/6qVqS31F/',
        'ger\x20hidden',
        'NTRdT',
        '❌\x20You\x20do\x20n',
        'ng\x20marriag',
        'The\x20mentio',
        '🚫\x20You\x20don\x27',
        'SifqX',
        '1.repl.co/',
        'is\x20banned',
        'STGKb',
        'FkVWR',
        'ge\x20in\x20a\x20ba',
        'nOuvz',
        'u\x20for\x20shop',
        'hungryLimi',
        '\x20lost\x20',
        'Invalid\x20ge',
        '\x20pet\x20to\x20sl',
        'ned\x20user\x20d',
        'item',
        'postimg.cc',
        'oned\x20user\x20',
        'ase\x20ensure',
        'now',
        '💼\x20Your\x20cur',
        'tar-design',
        'nce\x20is\x20',
        '6005MoLISz',
        'dy\x20taken.\x20',
        '-\x20**pet\x20sl',
        'now\x20health',
        'includes',
        '\x0a🆔\x20ID:\x20',
        'o\x20interact',
        'male\x20and\x20f',
        '\x20ID:\x20',
        '\x20a\x20marriag',
        '\x0a♂️\x20Gender:',
        'hospital\x20o',
        'GUUCr',
        't\x20id)\x0a-\x20pe',
        ':\x0aName:\x20',
        '\x20You\x20have\x20',
        '26lBDflg',
        'ound\x20image',
        'bgaUZ',
        'ied.\x20You\x20c',
        'If\x20you\x20wan',
        '\x20can\x27t\x20bat',
        'ide\x20off**\x0a',
        'nk\x20of\x20your',
        '!\x20Energy\x20i',
        'axios',
        'ful!\x20Your\x20',
        'our\x20pet.\x0a\x0a',
        'u\x20cannot\x20s',
        'qkjef',
        '\x20increased',
        '\x20and\x20energ',
        've\x20a\x20pet.',
        '\x0a-\x20pet\x20top',
        'ded.',
        'ady\x20have\x20a',
        'ide\x20comman',
        '*\x0a\x20\x20\x20\x20Heal',
        '\x0a👫\x20Status:',
        's\x20in\x20the\x20p',
        '\x20RIP.',
        'kNKGK',
        '\x20is\x20no\x20lon',
        'crRvk',
        'e\x20is\x20alrea',
        'toLowerCas',
        'accepted',
        'yBCRZ',
        'hEbvr',
        'fqlVs',
        '\x27s\x20details',
        '\x20bank.\x0a\x0a\x0a\x20',
        '\x20\x20\x20Feed\x20yo',
        'have\x20a\x20pet',
        'nausea',
        '\x20decreasin',
        'Rank.png',
        'ny\x20need)\x20(',
        'NqRvB',
        'e:\x20',
        '.\x20name:\x20',
        'female',
        '\x20and\x20speci',
        '⚠️\x20You\x20have',
        'Nsprt',
        'CKdeM',
        '\x20specify\x20a',
        't\x20using\x20th',
        'ank**\x0a\x20\x20\x20\x20',
        'energyLimi',
        'HdBmH',
        '❌\x20Error\x20lo',
        'jaSCK',
        'gender',
        '\x20battle\x20co',
        '\x0aUpload\x20ID',
        't\x20bank\x20loa',
        '\x20(petid)\x20(',
        'e\x20is\x20not\x20a',
        'popcorn',
        'utomatical',
        'HEDNY',
        'hcare:**\x0a-',
        'PQMQv',
        'IzkEm',
        't\x20it.',
        '\x20name)\x20|\x20(',
        'the\x20marria',
        'lationship',
        '🤷‍♂️\x20You\x20don\x27',
        'FPOHc',
        '.\x0a\x0a\x0a\x20\x20-\x20**',
        'tle\x20(pet\x20i',
        'DnPsa',
        'aUYNd',
        'ile\x20proces',
        'qqPyu',
        'hanged\x20the',
        'pet\x20not\x20fo',
        'or\x20\x27off\x27\x20t',
        'PID,\x20or\x20se',
        'arc',
        'MfOQP',
        'blueberry',
        'Gold',
        'arraybuffe',
        '-\x20**pet\x20ac',
        '-\x20**pet\x20cr',
        'create',
        'o\x20the\x20hosp',
        'jNVjC',
        's:**\x0a-\x20pet',
        'ou\x20earned\x20',
        'KirPR',
        '👀\x20Your\x20pet',
        '\x0a\x20\x20-\x20**pet',
        'quest',
        'qIoTq',
        'pizza',
        'LqBLe',
        'ot\x20send\x20a\x20',
        'eady\x20has\x20a',
        'e\x20item.',
        '.\x20Others\x20c',
        'petName',
        'your\x20pet\x27s',
        'r:\x20',
        '-icon-rank',
        'SCKkh',
        'diamond',
        'ysEQL',
        'mmand.\x20Use',
        'hide',
        'et\x20not\x20fou',
        'ping\x20with\x20',
        'length',
        'd)\x0a-\x20pet\x20s',
        'ospital\x20in',
        'glRte',
        'easing\x20hap',
        'zBjhV',
        'top',
        'gSYNC',
        '🚫\x20This\x20nam',
        'random',
        '\x20purchase!',
        'RvsOt',
        '🏆\x20The\x20winn',
        'h\x20a\x20sick\x20p',
        '\x20has\x200\x20ene',
        '*Financial',
        'map',
        't\x20battle\x20w',
        'utf8',
        '💼\x20Loan\x20pay',
        't\x20to\x20accep',
        'muWhH',
        '🐾\x20Your\x20pet',
        '*\x0a\x20\x20\x20\x20Dona',
        'pet\x20create',
        'Use\x20\x27injur',
        'cjTkM',
        'pet\x20gets\x20a',
        'e\x20one\x20usin',
        'uPaDM',
        'eMhWX',
        'water',
        'mmand.\x20',
        '4|2|5|1|3|',
        'nge\x20your\x20p',
        'nate\x20<petI',
        'lDUua',
        't\x20accept\x0a-',
        'HmQap',
        '*\x0a-\x20pet\x20ba',
        'ned\x20user\x27s',
        '\x27s\x20sicknes',
        'xJTot',
        'vyDmp',
        '\x20has\x20sudde',
        'fVCgg',
        'MRDuy',
        'ading\x20rank',
        '\x20If\x20you\x20wa',
        'interact\x20w',
        'atic\x20sickn',
        'FFRng',
        '\x20\x27pid\x27\x20com',
        'sponse.\x20Us',
        'sick',
        'vIjST',
        'aZkzJ',
        'hase.\x0a\x0a\x0a\x20\x20',
        'toBuffer',
        'energy',
        '/3N8n4ypZ/',
        'male',
        'Icon-Rank-',
        'load\x20List:',
        'You\x20have\x20b',
        '❌\x20Target\x20p',
        'silver',
        'ber.\x0a\x0ausag',
        'UNCMe',
        'nt\x20cost.\x20Y',
        'ge\x20request',
        'den.\x20You\x20c',
        'ob\x20info\x0a\x0a*',
        'hnKfj',
        'DBAgY',
        'age\x20reques',
        'ESXQe',
        'istings\x20av',
        'No\x20bio\x20ava',
        'pudding',
        'ank\x20loanpa',
        'Flsuj',
        'new\x20one,\x20p',
        'sing\x20the\x20\x27',
        'yVPeI',
        'aXvaR',
        '🥱\x20Your\x20pet',
        'accept',
        'r\x20mentione',
        'te\x20coins\x20t',
        'ds**\x20💼💰\x0a\x0aD',
        'sing\x20the\x20h',
        'ase\x20wait\x20b',
        '\x0a\x0a\x0a\x20\x20-\x20**p',
        't\x20shop:\x20it',
        'kPcMn',
        'bottom',
        'LBLxp',
        'Error\x20upda',
        'een\x20banned',
        '(item\x20name',
        'quest\x20or\x20i',
        'tions!\x20You',
        'AgKJH',
        'ID\x20not\x20fou',
        's\x20no\x20energ',
        '\x20\x27-pet\x20cre',
        '⚠️\x20',
        '-pet\x20rejec',
        'oaDiv',
        '🏥\x20Your\x20pet',
        't\x20feed**\x0a\x20',
        'erty',
        'Gold-5.png',
        '*\x0a\x20\x20\x20\x20Enga',
        'aUtUL',
        'RxbuV',
        '\x20info**\x0a\x20\x20',
        'energy.\x20Ch',
        '\x0a\x20\x20🌟\x20**Pro',
        'e\x20don\x27t\x20ha',
        'f\x20it\x27s\x20sic',
        '🙈\x20Your\x20pet',
        'cVbWH',
        'kSEXf',
        'path',
        'SWqAe',
        '\x20pet\x20ID\x20to',
        'senderID',
        '\x20trade\x20com',
        '🛒\x20Sorry,\x20',
        '\x20loan\x20(amo',
        'p`\x20to\x20see\x20',
        'You\x20can\x27t\x20',
        '🏆\x20No\x20pets\x20',
        'juries\x20to\x20',
        'your\x20pet\x20i',
        'em.\x20Availa',
        'current\x20ra',
        'gry\x20right\x20',
        'ta:',
        'uBKnj',
        'nbURZ',
        '/mD5yDdLT/',
        'mvxCo',
        'name)**\x0a\x20\x20',
        'Kzyuh',
        'creased\x20to',
        't,\x20use\x20\x27-p',
        'muffin',
        'ing\x20bank\x20d',
        '✨\x20Trade\x20do',
        'sjGoK',
        'banana',
        'tjcpR',
        '\x20pet\x20rejec',
        'h\x20gender\x20a',
        'cAwPZ',
        'eep,\x20resto',
        '\x20statement',
        'YPzZD',
        'arriage\x20co',
        'stomachach',
        'You\x27re\x20ban',
        'GrandMaste',
        'he\x20next\x20ho',
        '.\x20Sweet\x20dr',
        'anxAk',
        'hungry',
        'work',
        '💼\x20Loan\x20suc',
        '\x20married\x20t',
        '🛍️\x20Thank\x20yo',
        'cept**\x0a\x20\x20\x20',
        'clip',
        'fillText',
        '🆔\x20Your\x20pet',
        'Please\x20men',
        'rovide\x20a\x20v',
        '❌\x20No\x20menti',
        'k\x20automati',
        'Please\x20cho',
        '🐾\x20Pet\x20deta',
        'Level:\x20',
        'cold',
        'getContext',
        'HUFFS',
        'ity\x20(a\x20pos',
        'wRviq',
        'Exp:\x20',
        'he\x20hospita',
        'l\x20using\x20\x27p',
        'lncPD',
        'food\x20types',
        'ospital\x20co',
        'You\x20donate',
        'RoJcC',
        'sheikh',
        'hour.',
        'ning\x20this\x20',
        'ils\x20for\x20',
        'xpYIj',
        'qAbRC',
        'ame,\x20and\x20o',
        '\x20specified',
        '🥇\x20'
    ];
    _0x520a = function () {
        return _0x3930ad;
    };
    return _0x520a();
}
function handleMarriageResponse(_0x2ea934, _0x538f20, _0x5f59d0) {
    const _0x2b05f9 = _0x5bb60f, _0x683c66 = {
            'hAfIL': function (_0xec11ab, _0x51415c) {
                return _0xec11ab === _0x51415c;
            },
            'XzIit': _0x2b05f9(0x751),
            'kNKGK': _0x2b05f9(0x71b) + '0',
            'MOcqy': _0x2b05f9(0x6a1),
            'BPhaU': _0x2b05f9(0x391),
            'RhSkQ': _0x2b05f9(0x70c),
            'zfFgT': _0x2b05f9(0x4b4),
            'AXkwj': _0x2b05f9(0x4c8) + '1',
            'kHCgl': _0x2b05f9(0x373),
            'PqGrH': _0x2b05f9(0x487) + _0x2b05f9(0x72f) + _0x2b05f9(0x60f) + _0x2b05f9(0x293) + _0x2b05f9(0x766) + _0x2b05f9(0x63c)
        };
    if (_0x683c66[_0x2b05f9(0x307)](_0x2ea934, _0x683c66[_0x2b05f9(0x3bd)])) {
        const _0x83f16 = _0x683c66[_0x2b05f9(0x69c)][_0x2b05f9(0x1bf)]('|');
        let _0x7c3a6e = 0x26a3 + -0xfff + -0x45 * 0x54;
        while (!![]) {
            switch (_0x83f16[_0x7c3a6e++]) {
            case '0':
                return message[_0x2b05f9(0x266)](_0x2b05f9(0x479) + _0x2b05f9(0x760) + _0x2b05f9(0x349) + _0x5f59d0[_0x2b05f9(0x6ef)] + (_0x2b05f9(0x317) + _0x2b05f9(0x30a)));
            case '1':
                _0x5f59d0[_0x2b05f9(0x5f6) + _0x2b05f9(0x6e7)][_0x2b05f9(0x579) + 'D'] = null;
                continue;
            case '2':
                _0x5f59d0[_0x2b05f9(0x5f6) + _0x2b05f9(0x6e7)][_0x2b05f9(0x3b5)] = _0x683c66[_0x2b05f9(0x4b2)];
                continue;
            case '3':
                fs[_0x2b05f9(0x7ed) + _0x2b05f9(0x22b)](_0x683c66[_0x2b05f9(0x2b1)], JSON[_0x2b05f9(0x44f)](existingPets, null, -0xc * -0x338 + 0x1a * 0xdb + -0x3cdc), _0x683c66[_0x2b05f9(0x82d)]);
                continue;
            case '4':
                _0x538f20[_0x2b05f9(0x5f6) + _0x2b05f9(0x6e7)][_0x2b05f9(0x3b5)] = _0x683c66[_0x2b05f9(0x4b2)];
                continue;
            case '5':
                _0x538f20[_0x2b05f9(0x5f6) + _0x2b05f9(0x6e7)][_0x2b05f9(0x579) + 'D'] = null;
                continue;
            }
            break;
        }
    } else {
        if (_0x683c66[_0x2b05f9(0x307)](_0x2ea934, _0x683c66[_0x2b05f9(0x260)])) {
            const _0x1e8e62 = _0x683c66[_0x2b05f9(0x80f)][_0x2b05f9(0x1bf)]('|');
            let _0x23b51a = -0x33b + -0x1f3 + 0xdd * 0x6;
            while (!![]) {
                switch (_0x1e8e62[_0x23b51a++]) {
                case '0':
                    _0x5f59d0[_0x2b05f9(0x5f6) + _0x2b05f9(0x6e7)][_0x2b05f9(0x3b5)] = _0x683c66[_0x2b05f9(0x1a9)];
                    continue;
                case '1':
                    return message[_0x2b05f9(0x266)](_0x2b05f9(0x20b) + _0x2b05f9(0x745) + _0x2b05f9(0x47c) + _0x5f59d0[_0x2b05f9(0x6ef)] + (_0x2b05f9(0x829) + _0x2b05f9(0x539) + '💔'));
                case '2':
                    _0x538f20[_0x2b05f9(0x5f6) + _0x2b05f9(0x6e7)][_0x2b05f9(0x579) + 'D'] = null;
                    continue;
                case '3':
                    fs[_0x2b05f9(0x7ed) + _0x2b05f9(0x22b)](_0x683c66[_0x2b05f9(0x2b1)], JSON[_0x2b05f9(0x44f)](existingPets, null, 0x1ef3 + 0x22 * 0xe0 + -0x3cb1), _0x683c66[_0x2b05f9(0x82d)]);
                    continue;
                case '4':
                    _0x538f20[_0x2b05f9(0x5f6) + _0x2b05f9(0x6e7)][_0x2b05f9(0x3b5)] = _0x683c66[_0x2b05f9(0x1a9)];
                    continue;
                case '5':
                    _0x5f59d0[_0x2b05f9(0x5f6) + _0x2b05f9(0x6e7)][_0x2b05f9(0x579) + 'D'] = null;
                    continue;
                }
                break;
            }
        } else
            return message[_0x2b05f9(0x266)](_0x683c66[_0x2b05f9(0x1b8)]);
    }
}
