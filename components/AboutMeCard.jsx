import { Card, CardContent } from "../app/components/ui/card";
import { Separator } from "../app/components/ui/separator";
import { Smartphone, Globe, Server, Code } from "lucide-react";

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
        <Card className="bg-zinc-100/70 dark:bg-zinc-900/70 backdrop-blur-sm rounded-xl h-full border-primary/10">
            <CardContent className="pt-6 px-5 flex flex-col justify-between h-full">
                <div className="space-y-4">
                    {/* Header */}
                    <div>
                        <h3 className="text-xl font-medium mb-2">
                            <span className="bg-primary/10 px-2 py-1 rounded-md">Parthesh Purohit</span>
                            <span className="text-base text-zinc-600 dark:text-zinc-400 ml-2">{age} y/o Developer</span>
                        </h3>
                        <p className="text-base text-zinc-700 dark:text-zinc-300">
                            Developer from India with expertise in blockchain and mobile applications.
                        </p>
                    </div>

                    <Separator className="bg-primary/10" />

                    {/* Tech stack in 2x2 grid */}
                    <div>
                        <p className="text-base font-medium mb-3">
                            My working zone:
                        </p>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="flex items-center gap-2 bg-zinc-50/50 dark:bg-zinc-800/50 p-2 rounded-md">
                                <Smartphone className="w-5 h-5 text-primary" />
                                <div>
                                    <span className="font-medium">React Native</span>
                                    <span className="text-sm block text-zinc-500">for Android</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 bg-zinc-50/50 dark:bg-zinc-800/50 p-2 rounded-md">
                                <Globe className="w-5 h-5 text-primary" />
                                <div>
                                    <span className="font-medium">Next.js</span>
                                    <span className="text-sm block text-zinc-500">for Web Apps</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 bg-zinc-50/50 dark:bg-zinc-800/50 p-2 rounded-md">
                                <Server className="w-5 h-5 text-primary" />
                                <div>
                                    <span className="font-medium">Node.js</span>
                                    <span className="text-sm block text-zinc-500">for Backend</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 bg-zinc-50/50 dark:bg-zinc-800/50 p-2 rounded-md">
                                <Code className="w-5 h-5 text-primary" />
                                <div>
                                    <span className="font-medium">Anchor Lang</span>
                                    <span className="text-sm block text-zinc-500">for smart contracts</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <Separator className="bg-primary/10 mb-4" />
                    <p className="text-base">
                        Building something decentralized, one commit at a time. Connecting blockchain and mobile worlds.
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}