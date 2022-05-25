import { NextRequest } from "next/server";

export function middleware(request) {
    const country = request.geo.country;
    return new Response(`Your country is ${country}`);
}
