import {Button} from "@/components/ui/button";
import CompanionCard from "@/components/CompanionCard"
import CTA from "@/components/CTA";
import CompanionsList from "@/components/CompanionsList";
import {recentSessions} from "@/constants";

const Page = () => {
  return (

    <main>
        <h1>popular companion card</h1>
        <section className="home-section">
            <CompanionCard
            id="123"
            name="neura the brainy explorer"
            topic="neural network of the brain"
            subject="science"
            duration={45}
            color="#ffefdb"
            />
            <CompanionCard
                id="789"
                name="Kamran the astronomer"
                topic="Black Matter Storm"
                subject="Astronomy"
                duration={45}
                color="#ffefdb"
            />
            <CompanionCard
            id="456"
            name="countsy the number wizard"
            topic="Derivatives and integrals"
            subject="Maths"
            duration={30}
            color="#ffefdb"

            />
        </section>
        <section className="home-section">
            <CompanionsList
            title="recently completed sessions"
            companions={recentSessions}
            classNames="w-2/3 max-lg:w-full"

            />
            <CTA/>
        </section>


    </main>

  )
}

export default Page
