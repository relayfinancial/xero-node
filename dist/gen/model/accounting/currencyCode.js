"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
* 3 letter alpha code for the currency – see list of currency codes
*/
var CurrencyCode;
(function (CurrencyCode) {
    CurrencyCode[CurrencyCode["AED"] = 'AED'] = "AED";
    CurrencyCode[CurrencyCode["AFN"] = 'AFN'] = "AFN";
    CurrencyCode[CurrencyCode["ALL"] = 'ALL'] = "ALL";
    CurrencyCode[CurrencyCode["AMD"] = 'AMD'] = "AMD";
    CurrencyCode[CurrencyCode["ANG"] = 'ANG'] = "ANG";
    CurrencyCode[CurrencyCode["AOA"] = 'AOA'] = "AOA";
    CurrencyCode[CurrencyCode["ARS"] = 'ARS'] = "ARS";
    CurrencyCode[CurrencyCode["AUD"] = 'AUD'] = "AUD";
    CurrencyCode[CurrencyCode["AWG"] = 'AWG'] = "AWG";
    CurrencyCode[CurrencyCode["AZN"] = 'AZN'] = "AZN";
    CurrencyCode[CurrencyCode["BAM"] = 'BAM'] = "BAM";
    CurrencyCode[CurrencyCode["BBD"] = 'BBD'] = "BBD";
    CurrencyCode[CurrencyCode["BDT"] = 'BDT'] = "BDT";
    CurrencyCode[CurrencyCode["BGN"] = 'BGN'] = "BGN";
    CurrencyCode[CurrencyCode["BHD"] = 'BHD'] = "BHD";
    CurrencyCode[CurrencyCode["BIF"] = 'BIF'] = "BIF";
    CurrencyCode[CurrencyCode["BMD"] = 'BMD'] = "BMD";
    CurrencyCode[CurrencyCode["BND"] = 'BND'] = "BND";
    CurrencyCode[CurrencyCode["BOB"] = 'BOB'] = "BOB";
    CurrencyCode[CurrencyCode["BRL"] = 'BRL'] = "BRL";
    CurrencyCode[CurrencyCode["BSD"] = 'BSD'] = "BSD";
    CurrencyCode[CurrencyCode["BTN"] = 'BTN'] = "BTN";
    CurrencyCode[CurrencyCode["BWP"] = 'BWP'] = "BWP";
    CurrencyCode[CurrencyCode["BYN"] = 'BYN'] = "BYN";
    CurrencyCode[CurrencyCode["BYR"] = 'BYR'] = "BYR";
    CurrencyCode[CurrencyCode["BZD"] = 'BZD'] = "BZD";
    CurrencyCode[CurrencyCode["CAD"] = 'CAD'] = "CAD";
    CurrencyCode[CurrencyCode["CDF"] = 'CDF'] = "CDF";
    CurrencyCode[CurrencyCode["CHF"] = 'CHF'] = "CHF";
    CurrencyCode[CurrencyCode["CLP"] = 'CLP'] = "CLP";
    CurrencyCode[CurrencyCode["CNY"] = 'CNY'] = "CNY";
    CurrencyCode[CurrencyCode["COP"] = 'COP'] = "COP";
    CurrencyCode[CurrencyCode["CRC"] = 'CRC'] = "CRC";
    CurrencyCode[CurrencyCode["CUC"] = 'CUC'] = "CUC";
    CurrencyCode[CurrencyCode["CUP"] = 'CUP'] = "CUP";
    CurrencyCode[CurrencyCode["CVE"] = 'CVE'] = "CVE";
    CurrencyCode[CurrencyCode["CZK"] = 'CZK'] = "CZK";
    CurrencyCode[CurrencyCode["DJF"] = 'DJF'] = "DJF";
    CurrencyCode[CurrencyCode["DKK"] = 'DKK'] = "DKK";
    CurrencyCode[CurrencyCode["DOP"] = 'DOP'] = "DOP";
    CurrencyCode[CurrencyCode["DZD"] = 'DZD'] = "DZD";
    CurrencyCode[CurrencyCode["EGP"] = 'EGP'] = "EGP";
    CurrencyCode[CurrencyCode["ERN"] = 'ERN'] = "ERN";
    CurrencyCode[CurrencyCode["ETB"] = 'ETB'] = "ETB";
    CurrencyCode[CurrencyCode["EUR"] = 'EUR'] = "EUR";
    CurrencyCode[CurrencyCode["FJD"] = 'FJD'] = "FJD";
    CurrencyCode[CurrencyCode["FKP"] = 'FKP'] = "FKP";
    CurrencyCode[CurrencyCode["GBP"] = 'GBP'] = "GBP";
    CurrencyCode[CurrencyCode["GEL"] = 'GEL'] = "GEL";
    CurrencyCode[CurrencyCode["GGP"] = 'GGP'] = "GGP";
    CurrencyCode[CurrencyCode["GHS"] = 'GHS'] = "GHS";
    CurrencyCode[CurrencyCode["GIP"] = 'GIP'] = "GIP";
    CurrencyCode[CurrencyCode["GMD"] = 'GMD'] = "GMD";
    CurrencyCode[CurrencyCode["GNF"] = 'GNF'] = "GNF";
    CurrencyCode[CurrencyCode["GTQ"] = 'GTQ'] = "GTQ";
    CurrencyCode[CurrencyCode["GYD"] = 'GYD'] = "GYD";
    CurrencyCode[CurrencyCode["HKD"] = 'HKD'] = "HKD";
    CurrencyCode[CurrencyCode["HNL"] = 'HNL'] = "HNL";
    CurrencyCode[CurrencyCode["HRK"] = 'HRK'] = "HRK";
    CurrencyCode[CurrencyCode["HTG"] = 'HTG'] = "HTG";
    CurrencyCode[CurrencyCode["HUF"] = 'HUF'] = "HUF";
    CurrencyCode[CurrencyCode["IDR"] = 'IDR'] = "IDR";
    CurrencyCode[CurrencyCode["ILS"] = 'ILS'] = "ILS";
    CurrencyCode[CurrencyCode["IMP"] = 'IMP'] = "IMP";
    CurrencyCode[CurrencyCode["INR"] = 'INR'] = "INR";
    CurrencyCode[CurrencyCode["IQD"] = 'IQD'] = "IQD";
    CurrencyCode[CurrencyCode["IRR"] = 'IRR'] = "IRR";
    CurrencyCode[CurrencyCode["ISK"] = 'ISK'] = "ISK";
    CurrencyCode[CurrencyCode["JEP"] = 'JEP'] = "JEP";
    CurrencyCode[CurrencyCode["JMD"] = 'JMD'] = "JMD";
    CurrencyCode[CurrencyCode["JOD"] = 'JOD'] = "JOD";
    CurrencyCode[CurrencyCode["JPY"] = 'JPY'] = "JPY";
    CurrencyCode[CurrencyCode["KES"] = 'KES'] = "KES";
    CurrencyCode[CurrencyCode["KGS"] = 'KGS'] = "KGS";
    CurrencyCode[CurrencyCode["KHR"] = 'KHR'] = "KHR";
    CurrencyCode[CurrencyCode["KMF"] = 'KMF'] = "KMF";
    CurrencyCode[CurrencyCode["KPW"] = 'KPW'] = "KPW";
    CurrencyCode[CurrencyCode["KRW"] = 'KRW'] = "KRW";
    CurrencyCode[CurrencyCode["KWD"] = 'KWD'] = "KWD";
    CurrencyCode[CurrencyCode["KYD"] = 'KYD'] = "KYD";
    CurrencyCode[CurrencyCode["KZT"] = 'KZT'] = "KZT";
    CurrencyCode[CurrencyCode["LAK"] = 'LAK'] = "LAK";
    CurrencyCode[CurrencyCode["LBP"] = 'LBP'] = "LBP";
    CurrencyCode[CurrencyCode["LKR"] = 'LKR'] = "LKR";
    CurrencyCode[CurrencyCode["LRD"] = 'LRD'] = "LRD";
    CurrencyCode[CurrencyCode["LSL"] = 'LSL'] = "LSL";
    CurrencyCode[CurrencyCode["LTL"] = 'LTL'] = "LTL";
    CurrencyCode[CurrencyCode["LYD"] = 'LYD'] = "LYD";
    CurrencyCode[CurrencyCode["MAD"] = 'MAD'] = "MAD";
    CurrencyCode[CurrencyCode["MDL"] = 'MDL'] = "MDL";
    CurrencyCode[CurrencyCode["MGA"] = 'MGA'] = "MGA";
    CurrencyCode[CurrencyCode["MKD"] = 'MKD'] = "MKD";
    CurrencyCode[CurrencyCode["MMK"] = 'MMK'] = "MMK";
    CurrencyCode[CurrencyCode["MNT"] = 'MNT'] = "MNT";
    CurrencyCode[CurrencyCode["MOP"] = 'MOP'] = "MOP";
    CurrencyCode[CurrencyCode["MRU"] = 'MRU'] = "MRU";
    CurrencyCode[CurrencyCode["MUR"] = 'MUR'] = "MUR";
    CurrencyCode[CurrencyCode["MVR"] = 'MVR'] = "MVR";
    CurrencyCode[CurrencyCode["MWK"] = 'MWK'] = "MWK";
    CurrencyCode[CurrencyCode["MXN"] = 'MXN'] = "MXN";
    CurrencyCode[CurrencyCode["MYR"] = 'MYR'] = "MYR";
    CurrencyCode[CurrencyCode["MZN"] = 'MZN'] = "MZN";
    CurrencyCode[CurrencyCode["NAD"] = 'NAD'] = "NAD";
    CurrencyCode[CurrencyCode["NGN"] = 'NGN'] = "NGN";
    CurrencyCode[CurrencyCode["NIO"] = 'NIO'] = "NIO";
    CurrencyCode[CurrencyCode["NOK"] = 'NOK'] = "NOK";
    CurrencyCode[CurrencyCode["NPR"] = 'NPR'] = "NPR";
    CurrencyCode[CurrencyCode["NZD"] = 'NZD'] = "NZD";
    CurrencyCode[CurrencyCode["OMR"] = 'OMR'] = "OMR";
    CurrencyCode[CurrencyCode["PAB"] = 'PAB'] = "PAB";
    CurrencyCode[CurrencyCode["PEN"] = 'PEN'] = "PEN";
    CurrencyCode[CurrencyCode["PGK"] = 'PGK'] = "PGK";
    CurrencyCode[CurrencyCode["PHP"] = 'PHP'] = "PHP";
    CurrencyCode[CurrencyCode["PKR"] = 'PKR'] = "PKR";
    CurrencyCode[CurrencyCode["PLN"] = 'PLN'] = "PLN";
    CurrencyCode[CurrencyCode["PYG"] = 'PYG'] = "PYG";
    CurrencyCode[CurrencyCode["QAR"] = 'QAR'] = "QAR";
    CurrencyCode[CurrencyCode["RON"] = 'RON'] = "RON";
    CurrencyCode[CurrencyCode["RSD"] = 'RSD'] = "RSD";
    CurrencyCode[CurrencyCode["RUB"] = 'RUB'] = "RUB";
    CurrencyCode[CurrencyCode["RWF"] = 'RWF'] = "RWF";
    CurrencyCode[CurrencyCode["SAR"] = 'SAR'] = "SAR";
    CurrencyCode[CurrencyCode["SBD"] = 'SBD'] = "SBD";
    CurrencyCode[CurrencyCode["SCR"] = 'SCR'] = "SCR";
    CurrencyCode[CurrencyCode["SDG"] = 'SDG'] = "SDG";
    CurrencyCode[CurrencyCode["SEK"] = 'SEK'] = "SEK";
    CurrencyCode[CurrencyCode["SGD"] = 'SGD'] = "SGD";
    CurrencyCode[CurrencyCode["SHP"] = 'SHP'] = "SHP";
    CurrencyCode[CurrencyCode["SLL"] = 'SLL'] = "SLL";
    CurrencyCode[CurrencyCode["SOS"] = 'SOS'] = "SOS";
    CurrencyCode[CurrencyCode["SPL"] = 'SPL'] = "SPL";
    CurrencyCode[CurrencyCode["SRD"] = 'SRD'] = "SRD";
    CurrencyCode[CurrencyCode["STN"] = 'STN'] = "STN";
    CurrencyCode[CurrencyCode["SVC"] = 'SVC'] = "SVC";
    CurrencyCode[CurrencyCode["SYP"] = 'SYP'] = "SYP";
    CurrencyCode[CurrencyCode["SZL"] = 'SZL'] = "SZL";
    CurrencyCode[CurrencyCode["THB"] = 'THB'] = "THB";
    CurrencyCode[CurrencyCode["TJS"] = 'TJS'] = "TJS";
    CurrencyCode[CurrencyCode["TMT"] = 'TMT'] = "TMT";
    CurrencyCode[CurrencyCode["TND"] = 'TND'] = "TND";
    CurrencyCode[CurrencyCode["TOP"] = 'TOP'] = "TOP";
    CurrencyCode[CurrencyCode["TRY_LIRA"] = 'TRY'] = "TRY_LIRA";
    CurrencyCode[CurrencyCode["TTD"] = 'TTD'] = "TTD";
    CurrencyCode[CurrencyCode["TVD"] = 'TVD'] = "TVD";
    CurrencyCode[CurrencyCode["TWD"] = 'TWD'] = "TWD";
    CurrencyCode[CurrencyCode["TZS"] = 'TZS'] = "TZS";
    CurrencyCode[CurrencyCode["UAH"] = 'UAH'] = "UAH";
    CurrencyCode[CurrencyCode["UGX"] = 'UGX'] = "UGX";
    CurrencyCode[CurrencyCode["USD"] = 'USD'] = "USD";
    CurrencyCode[CurrencyCode["UYU"] = 'UYU'] = "UYU";
    CurrencyCode[CurrencyCode["UZS"] = 'UZS'] = "UZS";
    CurrencyCode[CurrencyCode["VEF"] = 'VEF'] = "VEF";
    CurrencyCode[CurrencyCode["VND"] = 'VND'] = "VND";
    CurrencyCode[CurrencyCode["VUV"] = 'VUV'] = "VUV";
    CurrencyCode[CurrencyCode["WST"] = 'WST'] = "WST";
    CurrencyCode[CurrencyCode["XAF"] = 'XAF'] = "XAF";
    CurrencyCode[CurrencyCode["XCD"] = 'XCD'] = "XCD";
    CurrencyCode[CurrencyCode["XDR"] = 'XDR'] = "XDR";
    CurrencyCode[CurrencyCode["XOF"] = 'XOF'] = "XOF";
    CurrencyCode[CurrencyCode["XPF"] = 'XPF'] = "XPF";
    CurrencyCode[CurrencyCode["YER"] = 'YER'] = "YER";
    CurrencyCode[CurrencyCode["ZAR"] = 'ZAR'] = "ZAR";
    CurrencyCode[CurrencyCode["ZMW"] = 'ZMW'] = "ZMW";
    CurrencyCode[CurrencyCode["ZMK"] = 'ZMK'] = "ZMK";
    CurrencyCode[CurrencyCode["ZWD"] = 'ZWD'] = "ZWD";
    CurrencyCode[CurrencyCode["EMPTY_CURRENCY"] = ''] = "EMPTY_CURRENCY";
})(CurrencyCode = exports.CurrencyCode || (exports.CurrencyCode = {}));
//# sourceMappingURL=currencyCode.js.map