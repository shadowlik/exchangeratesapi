/**
 * API Wrapper (https://exchangeratesapi.io/)
 * @author Henrique Marques <henrique@marquesfernandes.com>
 */
import axios from 'axios';

import { code, apiResponse } from './types';

// API Base URL
const url = 'https://api.exchangeratesapi.io';

/**
 * exchangeratesApiRequest
 *
 * @param {string} action
 * @param {code[]} symbols
 * @param {code} [base='USD']
 * @returns {Promise<apiResponse>}
 */
async function exchangeratesApiRequest(action: string, symbols: code[], base: code = 'USD'): Promise<apiResponse> {
    const urlSymbols = symbols.join(',');
    const options = {
        params: {
            base,
            symbols: urlSymbols,
        },
    };
    const { data } = await axios.get(`${url}/${action}`, options);

    return data;
};

/**
 *  Foreign exchange rates API with currency conversion
 *
 * @description Exchange rates API is a free service for current and historical foreign exchange rates published by the European Central Bank
 * @export
 * @class exchangeratesApi
 */
export default class exchangeratesApi {
    /**
     * Get the latest foreign exchange reference rates.
     *
     * @param {code[]} symbols
     * @param {code} base
     * @returns {Promise<apiResponse>}
     * @memberof exchangeratesApi
     */
    async latest(symbols: code[], base: code): Promise<apiResponse> {
        return await exchangeratesApiRequest('latest', symbols, base);
    };

    /**
     * Get historical rates for any day since 1999.
     *
     * @param {code[]} symbols
     * @param {code} base
     * @returns {Promise<apiResponse>}
     * @memberof exchangeratesApi
     */
    async general (symbols: code[], base: code): Promise<apiResponse> {
        return await exchangeratesApiRequest('', symbols, base);
    };

    /**
     * Get historical rates for a time period.
     *
     * @param {code[]} symbols
     * @param {code} base
     * @returns {Promise<apiResponse>}
     * @memberof exchangeratesApi
     */
    async history(symbols: code[], base: code): Promise<apiResponse> {
        return await exchangeratesApiRequest('history', symbols, base);
    };
};
