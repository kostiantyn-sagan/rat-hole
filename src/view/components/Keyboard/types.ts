// Source data
import { firstRow, secondRow, thirdRow, fourthRow, fifthRow } from './source-data';

export type KeysRow = Array<[string | null, string | null, string | null]>;

const transformKeysRow = (dataArray: KeysRow) => dataArray.map(([ ruCode, enCode, keyCode ]) => ({
    ruCode,
    enCode,
    keyCode,
}));

export const keyboardData = {
    firstRow:  transformKeysRow(firstRow),
    secondRow: transformKeysRow(secondRow),
    thirdRow:  transformKeysRow(thirdRow),
    fourthRow: transformKeysRow(fourthRow),
    fifthRow:  transformKeysRow(fifthRow),
};

export type IParsedKeys = ReturnType<typeof transformKeysRow>;
