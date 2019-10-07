// Currency Code - ISO 4217 (https://www.iban.com/currency-codes)
export type code =  "CAD" | "HKD" | "ISK" | "PHP" | "DKK" | "HUF" | "CZK" |
             "AUD" | "RON" | "SEK" | "IDR" | "INR" | "BRL" | "RUB" |
             "HRK" | "JPY" | "THB" | "CHF" | "SGD" | "PLN" | "BGN" |
             "TRY" | "CNY" | "NOK" | "NZD" | "ZAR" | "USD" | "MXN" |
             "ILS" | "GBP" | "KRW" | "MYR" | "EUR";

// API Response
interface apiResponse {
    rates: code[];
    base: code;
    date: string;
}