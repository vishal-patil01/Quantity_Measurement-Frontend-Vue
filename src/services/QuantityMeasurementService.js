import httpservice from "./HttpService";

export default {
    getMainUnits() {
        return httpservice.get('type');
    },

    getSubUnit(selectedUnits) {
        return httpservice.get(`type/${selectedUnits}`);
    },

    getConvertedValue(value1, firstSubUnit1, secondSubUnit1) {
        const conversionDTO = {
            value: value1,
            firstUnitType: firstSubUnit1,
            secondUnitType: secondSubUnit1
        }
        return httpservice.post('converter', conversionDTO)
    }
}

