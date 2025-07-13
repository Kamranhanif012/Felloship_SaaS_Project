import CompanionForm from "@/components/CompanionForm";
import {auth} from "@clerk/nextjs/server";
import {redirect} from "next/navigation";

const newCompanion = async () => {
    const {userId} = await auth();
    if(!userId) redirect('/sign-in');

    return (
        <main>
            <div>companionpage</div>
            <CompanionForm/>
        </main>
    )
}
export default newCompanion
