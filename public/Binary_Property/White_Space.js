const set = require('regenerate')(0x20, 0x85, 0xA0, 0x1680, 0x202F, 0x205F, 0x3000);
set.addRange(0x9, 0xD).addRange(0x2000, 0x200A).addRange(0x2028, 0x2029);
exports.characters = set;
