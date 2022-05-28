import { NextRequest } from "next/server";

export function middleware(request) {
    const country = request.geo.country || "unavailible";
    return new Response(`Your country is ${country}.`);
}
