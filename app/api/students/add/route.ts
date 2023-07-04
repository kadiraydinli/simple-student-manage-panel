import { NextResponse } from 'next/server'

import { UserType } from '@/types';
import { getAPI_URL } from '@/libs/helper';

export async function POST(request: Request) {
    try {
        const data: UserType = await request.json();
        const res = await fetch(`${getAPI_URL}/users/add`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })

        const resultData = await res.json();
        return NextResponse.json(resultData);
    } catch (error) {
        console.log(error);
        return new NextResponse('Internal Error', { status: 500 });
    }
};