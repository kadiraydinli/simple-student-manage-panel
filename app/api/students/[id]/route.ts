import { NextResponse } from "next/server";

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
    // TODO: Send data
    const res = await request.json();
    return NextResponse.json({ res });
};

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const id = params.id;

    const res = await fetch(`${API_URL}/users/${id}`, {
        method: "DELETE"
    });

    const data = await res.json();

    return NextResponse.json(data);
};