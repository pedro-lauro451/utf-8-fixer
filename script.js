var input = document.getElementById('input');
let objectURL;
var binaryData = [];
const link = document.getElementById('link');

function convertToUtf8(string) {
    string = string
        .toString()
        .replace(/â‚¬/g, '€')
        .replace(/â€š/g, '‚')
        .replace(/Æ’/g, 'ƒ')
        .replace(/â€ž/g, '„')
        .replace(/â€¦/g, '…')
        .replace(/â€\u00A0/g, '†')
        .replace(/â€¡/g, '‡')
        .replace(/Ë†/g, 'ˆ')
        .replace(/â€°/g, '‰')
        .replace(/Å\u00A0/g, 'Š')
        .replace(/â€¹/g, '‹')
        .replace(/Å’/g, 'Œ')
        .replace(/Å½/g, 'Ž')
        .replace(/â€˜/g, '‘')
        .replace(/â€™/g, '’')
        .replace(/â€œ/g, '“')
        .replace(/â€\u009D/g, '”')
        .replace(/â€¢/g, '•')
        .replace(/â€“/g, '–')
        .replace(/â€”/g, '—')
        .replace(/Ëœ/g, '˜')
        .replace(/â„¢/g, '™')
        .replace(/Å¡/g, 'š')
        .replace(/â€º/g, '›')
        .replace(/Å“/g, 'œ')
        .replace(/Å¾/g, 'ž')
        .replace(/Å¸/g, 'Ÿ')
        .replace(/Â /g, ' ')
        .replace(/Â¡/g, '¡')
        .replace(/Â¢/g, '¢')
        .replace(/Â£/g, '£')
        .replace(/Â¤/g, '¤')
        .replace(/Â¥/g, '¥')
        .replace(/Â¦/g, '¦')
        .replace(/Â§/g, '§')
        .replace(/Â¨/g, '¨')
        .replace(/Â©/g, '©')
        .replace(/Âª/g, 'ª')
        .replace(/Â«/g, '«')
        .replace(/Â¬/g, '¬')
        .replace(/Â­/g, '­')
        .replace(/Â®/g, '®')
        .replace(/Â¯/g, '¯')
        .replace(/Â°/g, '°')
        .replace(/Â±/g, '±')
        .replace(/Â²/g, '²')
        .replace(/Â³/g, '³')
        .replace(/Â´/g, '´')
        .replace(/Âµ/g, 'µ')
        .replace(/Â¶/g, '¶')
        .replace(/Â·/g, '·')
        .replace(/Â¸/g, '¸')
        .replace(/Â¹/g, '¹')
        .replace(/Âº/g, 'º')
        .replace(/Â»/g, '»')
        .replace(/Â¼/g, '¼')
        .replace(/Â½/g, '½')
        .replace(/Â¾/g, '¾')
        .replace(/Â¿/g, '¿')
        .replace(/Ã€/g, 'À')
        .replace(/Ã‚/g, 'Â')
        .replace(/Ãƒ/g, 'Ã')
        .replace(/Ã„/g, 'Ä')
        .replace(/Ã…/g, 'Å')
        .replace(/Ã†/g, 'Æ')
        .replace(/Ã‡/g, 'Ç')
        .replace(/Ãˆ/g, 'È')
        .replace(/Ã‰/g, 'É')
        .replace(/ÃŠ/g, 'Ê')
        .replace(/Ã‹/g, 'Ë')
        .replace(/ÃŒ/g, 'Ì')
        .replace(/Ã\u008D/g, 'Í')
        .replace(/ÃŽ/g, 'Î')
        .replace(/Ã\u008F/g, 'Ï')
        .replace(/Ã\u0090/g, 'Ð')
        .replace(/Ã‘/g, 'Ñ')
        .replace(/Ã’/g, 'Ò')
        .replace(/Ã“/g, 'Ó')
        .replace(/Ã”/g, 'Ô')
        .replace(/Ã•/g, 'Õ')
        .replace(/Ã–/g, 'Ö')
        .replace(/Ã—/g, '×')
        .replace(/Ã˜/g, 'Ø')
        .replace(/Ã™/g, 'Ù')
        .replace(/Ãš/g, 'Ú')
        .replace(/Ã›/g, 'Û')
        .replace(/Ãœ/g, 'Ü')
        .replace(/Ã\u009D/g, 'Ý')
        .replace(/Ãž/g, 'Þ')
        .replace(/ÃŸ/g, 'ß')
        .replace(/Ã\u00A0/g, 'à')
        .replace(/Ã¡/g, 'á')
        .replace(/Ã¢/g, 'â')
        .replace(/Ã£/g, 'ã')
        .replace(/Ã¤/g, 'ä')
        .replace(/Ã¥/g, 'å')
        .replace(/Ã¦/g, 'æ')
        .replace(/Ã§/g, 'ç')
        .replace(/Ã¨/g, 'è')
        .replace(/Ã©/g, 'é')
        .replace(/Ãª/g, 'ê')
        .replace(/Ã«/g, 'ë')
        .replace(/Ã¬/g, 'ì')
        .replace(/Ã\u00AD/g, 'í')
        .replace(/Ã®/g, 'î')
        .replace(/Ã¯/g, 'ï')
        .replace(/Ã°/g, 'ð')
        .replace(/Ã±/g, 'ñ')
        .replace(/Ã²/g, 'ò')
        .replace(/Ã³/g, 'ó')
        .replace(/Ã´/g, 'ô')
        .replace(/Ãµ/g, 'õ')
        .replace(/Ã¶/g, 'ö')
        .replace(/Ã·/g, '÷')
        .replace(/Ã¸/g, 'ø')
        .replace(/Ã¹/g, 'ù')
        .replace(/Ãº/g, 'ú')
        .replace(/Ã»/g, 'û')
        .replace(/Ã¼/g, 'ü')
        .replace(/Ã½/g, 'ý')
        .replace(/Ã¾/g, 'þ')
        .replace(/Ã¿/g, 'ÿ');
    return string;
};

input.addEventListener('change', async function () {
    binaryData.push("\ufeff");
    if (objectURL) {
       URL.revokeObjectURL(objectURL);
    }
    await readXlsxFile(input.files[0])
        .then(
            function (data) {
                for (var y = 0; y < data.length; y++) {
                    for (var i = 0; i < data[y].length; i++) {
                        if(data[y][i] != null) {
                            data[y][i] = convertToUtf8(data[y][i]);
                        }
                    }
                binaryData.push(data[y] + '\n');
                }
            }
        )
        .catch(err => console.log(err));
        objectURL = URL.createObjectURL(new Blob(binaryData, {type: "text/csv;charset=UTF-8"}));
        link.href = objectURL;
        link.click();
});