"use client";
import {useCallback, useEffect, useState} from "react";

export function useQuery(query: () => Promise<any>) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchData = useCallback(async () => {
        setLoading(true);
        setError("");
        try {
            const result = await query();
            setData(result);
        } catch (error: any) {
            setError(error.message || "Une erreur est survenue");
        } finally {
            setLoading(false);
        }
    }, [query]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return {loading, data, error};
}
