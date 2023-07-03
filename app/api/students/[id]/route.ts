import { NextResponse } from "next/server";

import { UserType } from "@/types";

const API_URL = process.env.API_URL;

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    const id = params.id;
    const res = await fetch(`${API_URL}/users/${id}`);
    const data = await res.json();

    return NextResponse.json(data);
};

// TODO: Add validation for params

export async function PUT(request: Request) {
    const data: UserType = await request.json();
    const res = await fetch(`${API_URL}/users/${data.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })

    const resultData = await res.json();
    return NextResponse.json(resultData);
};

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const id = params.id;

    const res = await fetch(`${API_URL}/users/${id}`, {
        method: "DELETE"
    });

    const data = await res.json();

    return NextResponse.json(data);
};