import { NextRequest, NextResponse } from "next/server";

const API_URL = process.env.API_URL;

export async function GET(request: NextRequest) {
    const requestUrl = new URL(request.url);
    const limit = requestUrl.searchParams.get('limit');
    const search = requestUrl.searchParams.get('search');
    const skip = requestUrl.searchParams.get('skip');

    let url = `${API_URL}/users`;

    if (search) {
        url += `/search?q=${search}`;
    }

    if (limit) {
        url += `${search ? '&' : '?'}limit=${limit}`;
    }

    if (skip) {
        url += `&skip=${skip}`;
    }

    const response = await fetch(url);
    const data = await response.json();

    return NextResponse.json(data);
}
