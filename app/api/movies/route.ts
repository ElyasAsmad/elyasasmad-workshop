import { NextResponse } from "next/server";
import { data } from "./data";

const filteredData = {
    comingSoonMovies: data.comingSoonMovies,
    nowShowingMovies: data.nowShowingMovies,
}

export async function GET(req: Request) {
    return NextResponse.json(filteredData)
}