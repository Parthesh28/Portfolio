import { Card, CardContent } from "../app/components/ui/card";
import { Separator } from "../app/components/ui/separator";

function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }

    return age;
}

export default function AboutMeCard() {
    const age = calculateAge("2003-10-23"); // Replace with your actual birth date

    return (
        <Card className="bg-zinc-100 dark:bg-zinc-900 h-full">
            <CardContent className="pt-6 flex flex-col justify-between h-full">
                <div className="space-y-4">
                    <p className="text-base pb-2">
                        Hey there! I am <span className="font-semibold">Parthesh</span>, a {age}-y/o <span className="font-bold underline decoration-primary/30 underline-offset-4">developer from India</span> with a love for Blockchain and Android.
                    </p>
                    <Separator />
                    <p className="text-base pt-1">
                        My way to go in development is the <span className="font-semibold underline decoration-primary/30 underline-offset-4">JavaScript ecosystem</span>, with favourites as:
                    </p>
                    <ul className="list-disc list-inside pb-3">
                        <li>
                            <span className="font-bold">React Native</span> for Android
                        </li>
                        <li>
                            <span className="font-bold">Next.js</span> for Web Apps 
                        </li>
                        <li>
                            <span className="font-bold">Node.js</span> for Backend
                        </li>
                    </ul>
                </div>
                <Separator />
                <p className="italic text-base mb-3 mt-4">
                    I do not fear AI <span className="font-semibold underline decoration-primary/30 underline-offset-4">as it cannot take my job</span>, not because I am good, it is because I never had one!!
                </p>
            </CardContent>
        </Card>
    );
}
