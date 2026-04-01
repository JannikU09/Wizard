"use server"

import { ClientPage } from "@/src/components/clientPage/page";
import { ProgressBar } from "@/src/components/progressBar/progressBar";

export default async function Page() {

    console.log("Server side Rendering");

    return (
        <div>
            <ProgressBar />
            <ClientPage />
        </div>
    )
}