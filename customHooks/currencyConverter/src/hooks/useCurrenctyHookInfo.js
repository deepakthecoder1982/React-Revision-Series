import { useEffect, useState } from "react";

export const CurrencyInformation = (currency ) => {
    
    const [currencyData, setCurrencyData] = useState({});
    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setCurrencyData(data[currency]);
            } catch (error) {
                console.error("Error fetching currency data:", error);
            }
        };

        fetchData();
    }, [currency, url]);

    return [currencyData];
};
