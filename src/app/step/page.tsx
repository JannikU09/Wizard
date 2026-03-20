"use server"

import { ClientPage } from "@/src/components/clientPage/page";

export default async function Page() {

    console.log("Server side Rendering")

    return (
        <div>
            <ClientPage />
        </div>
    )
}