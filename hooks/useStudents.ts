import { useState } from "react";

import { DataType, PER_PAGE_SIZES, UserType } from "@/types";

type GetStudentType = { page?: number, size?: number, search?: string }

const useStudents = () => {
    const [data, setData] = useState<DataType | null>(null);

    const getStudents = async ({ size = PER_PAGE_SIZES[0], page = 0, search }: GetStudentType) => {

        let url = "/api/students";

        if (search) {
            url += `?search=${search}`;
        }

        if (size) {
            url += `${search ? '&' : '?'}limit=${size}`;
        }

        if (page) {
            url += `&skip=${size * (page - 1)}`;
        }

        const res = await fetch(url, { method: "GET" });
        const result: DataType = await res.json();
        setData(result);
    };

    const deleteStudent = async (id: number) => {
        const res = await fetch(`/api/students/${id}`, { method: "DELETE" });
        const result: UserType = await res.json();

        return result && result.isDeleted;
    };

    return {
        getStudents,
        deleteStudent,
        students: data?.users || [],
        total: data?.total || 0,
        limit: data?.limit || 0
    }
};

export default useStudents;