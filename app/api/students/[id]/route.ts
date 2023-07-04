import { NextResponse } from "next/server";

import { UserType } from "@/types";
import { getAPI_URL } from "@/libs/helper";

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const id = params.id;
        const res = await fetch(`${getAPI_URL}/users/${id}`);
        const data = await res.json();

        return NextResponse.json(data);
    } catch (error) {
        console.log(error);
        return new NextResponse('Internal Error', { status: 500 });
    }
};

export async function PUT(request: Request) {
    try {
        const data: UserType = await request.json();
        const res = await fetch(`${getAPI_URL}/users/${data.id}`, {
            method: 'PUT',
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

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    try {
        const id = params.id;

        const res = await fetch(`${getAPI_URL}/users/${id}`, {
            method: "DELETE"
        });

        const data = await res.json();

        return NextResponse.json(data);
    } catch (error) {
        console.log(error);
        return new NextResponse('Internal Error', { status: 500 });
    }
};