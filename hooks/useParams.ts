import { useEffect, useState } from "react";
import qs from "query-string";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { PER_PAGE_SIZES } from "@/types";

const useParams = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const page = searchParams.get("page") || "";
    const size = searchParams.get("size") || "";
    const [query, setQuery] = useState<{ page?: number; size?: number; search?: string }>({ page: parseInt(page) || 1, size: parseInt(size) || PER_PAGE_SIZES[0], search: "" });

    const setSize = (value: number) => {
        setQuery({ ...query, size: value });
    };

    const setPage = (value: number) => {
        setQuery({ ...query, page: value });
    };

    const setSearch = (value: string) => {
        setQuery({ ...query, search: value });
    };

    useEffect(() => {
        const urlWithParam = qs.stringifyUrl(
            {
                url: pathname,
                query: {
                    ...query,
                    page: query.page !== 1 ? query.page : "",
                    size: query.size !== 1 ? query.size : "",
                }
            },
            { skipEmptyString: true }
        );

        router.push(urlWithParam);
    }, [query, router, pathname]);

    return {
        setSize,
        setPage,
        setSearch,
        page: parseInt(page) || 1,
        size: parseInt(size) || PER_PAGE_SIZES[0],
    }
};

export default useParams;