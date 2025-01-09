import { Card, CardContent } from "../app/components/ui/card";
import { Separator } from "../app/components/ui/separator";
import { Smartphone, Globe, Server } from "lucide-react";

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
    const age = calculateAge("2003-10-23");

    return (
        <Card className="bg-zinc-100/70 dark:bg-zinc-900/70 backdrop-blur-sm h-full group">
            <CardContent className="pt-6 px-5 flex flex-col justify-between h-full">
                <div className="space-y-4">
                    <div className="relative">
                        <p className="text-base pb-2 relative z-10">
                            Hey there! I am{" "}
                            <span className="font-semibold bg-primary/10 px-1.5 py-0.5 rounded-md">Parthesh</span>,
                            a {age}-y/o{" "}
                            <span className="font-bold underline decoration-primary/40 underline-offset-4 hover:text-primary transition-colors">
                                developer from India
                            </span>
                            {" "}with a love for Blockchain and Android.
                        </p>
                    </div>

                    <Separator className="bg-primary/10" />

                    <div>
                        <p className="text-base pt-1">
                            My way to go in development is the{" "}
                            <span className="font-semibold underline decoration-primary/40 underline-offset-4">
                                JavaScript ecosystem
                            </span>
                            , with favourites as:
                        </p>
                        <ul className="list-none space-y-2 mt-3">
                            <li className="flex items-center gap-2 group/item">
                                <Smartphone className="w-4 h-4 text-primary/60 group-hover/item:text-primary transition-colors" />
                                <span className="font-bold group-hover/item:text-primary transition-colors">React Native</span>
                                <span className="text-zinc-600 dark:text-zinc-400">for Android</span>
                            </li>
                            <li className="flex items-center gap-2 group/item">
                                <Globe className="w-4 h-4 text-primary/60 group-hover/item:text-primary transition-colors" />
                                <span className="font-bold group-hover/item:text-primary transition-colors">Next.js</span>
                                <span className="text-zinc-600 dark:text-zinc-400">for Web Apps</span>
                            </li>
                            <li className="flex items-center gap-2 group/item">
                                <Server className="w-4 h-4 text-primary/60 group-hover/item:text-primary transition-colors" />
                                <span className="font-bold group-hover/item:text-primary transition-colors">Node.js</span>
                                <span className="text-zinc-600 dark:text-zinc-400">for Backend</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-4">
                    <Separator className="bg-primary/10 mb-4" />
                    <p className="italic text-base relative">
                        I do not fear AI as{" "}
                        <span className="font-semibold underline decoration-primary/40 underline-offset-4 not-italic">
                             it cannot take my job
                        </span>
                        , not because <span className="font-semibold underline decoration-primary/40 underline-offset-4 not-italic">
                            I am good,
                        </span> it is because I never had one.
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}