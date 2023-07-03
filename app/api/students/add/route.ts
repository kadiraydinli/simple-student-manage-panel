import { NextResponse } from 'next/server'

import { UserType } from '@/types';

const API_URL = process.env.API_URL;

export async function POST(request: Request) {
    const data: UserType = await request.json();
    const res = await fetch(`${API_URL}/users/add`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })

    const resultData = await res.json();
    return NextResponse.json(resultData);
};