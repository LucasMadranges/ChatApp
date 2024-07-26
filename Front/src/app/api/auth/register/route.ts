import {NextRequest, NextResponse} from "next/server";
import {registerDB} from "@/utils/lib/registerDB";

export async function POST(req: NextRequest) {
    const {firstname, lastname, email, password, confirmPassword} = await req.json();

    try {
        const user = registerDB(lastname, firstname, email, password, confirmPassword);

        console.log(user);

        return new NextResponse(JSON.stringify(user), {
            status: 201,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        return new NextResponse(JSON.stringify({message: "User creation failed", error}), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}
