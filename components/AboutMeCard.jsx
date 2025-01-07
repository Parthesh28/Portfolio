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
                    <p className="text-base">
                        Hey there! I am <span className="font-semibold">Parthesh</span>, a {age}-y/o <span className="font-bold underline decoration-primary/30 underline-offset-4">aspiring developer from Mumbai, India</span> with a passion for Blockchain and Android.
                    </p>
                    <Separator />
                    <p className="text-base pt-3">
                        My expertise lies in the <span className="font-semibold underline decoration-primary/30 underline-offset-4">JavaScript ecosystem</span>, with a focus on:
                    </p>
                    <ul className="list-disc list-inside">
                        <li>
                            <span className="font-bold">React-Native</span> for building on Android
                        </li>
                        <li>
                            <span className="font-bold">Node.js</span> for server-side development
                        </li>
                        <li>
                            <span className="font-bold">Next.js</span> for full-stack applications
                        </li>
                    </ul>
                </div>
                <Separator />
                <p className="text-base mb-3 mt-4">
                    Learning and implementing <span className="font-semibold underline decoration-primary/30 underline-offset-4">new technologies</span> is the way to go!! AI will not take my job.
                </p>
            </CardContent>
        </Card>
    );
}
