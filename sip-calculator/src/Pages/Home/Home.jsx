import {
    TrendingUp,
    ArrowUpRight,
    Wallet,
    Repeat,
    Calculator,
    ArrowRight,
    Clock3,
    Sparkles,
} from "lucide-react";


const calculators = [
    {
        title: "SIP Calculator",
        description:
            "Calculate the potential returns on your monthly investments and plan your wealth-building journey.",
        icon: TrendingUp,
        color: "emerald",
        path: "/home/sip-calculator",
        available: true,
    },
    {
        title: "Step-Up SIP Calculator",
        description:
            "Increase your SIP contributions annually and discover how stepping up can accelerate your wealth.",
        icon: ArrowUpRight,
        color: "blue",
        path: "/home/step-up-sip-calculator",
        available: false,
    },
    {
        title: "SWP Calculator",
        description:
            "Estimate regular withdrawals from your investments while planning for your long-term financial needs.",
        icon: Wallet,
        color: "violet",
        path: "/home/swp-calculator",
        available: false,
    },
    {
        title: "STP Calculator",
        description:
            "Plan systematic transfers between mutual funds and explore different investment strategies.",
        icon: Repeat,
        color: "amber",
        path: "/home/stp-calculator",
        available: false,
    },
    {
        title: "Lumpsum Calculator",
        description:
            "Estimate how your one-time investment could grow over time with the power of compounding.",
        icon: Calculator,
        color: "rose",
        path: "/home/lumpsum-calculator",
        available: false,
    },
];

const themes = {
    emerald: {
        icon: "bg-emerald-50 text-emerald-600",
        hover: "group-hover:border-emerald-200",
        badge: "bg-emerald-50 text-emerald-700",
        arrow: "text-emerald-600",
    },
    blue: {
        icon: "bg-blue-50 text-blue-600",
        hover: "group-hover:border-blue-200",
        badge: "bg-blue-50 text-blue-700",
        arrow: "text-blue-600",
    },
    violet: {
        icon: "bg-violet-50 text-violet-600",
        hover: "group-hover:border-violet-200",
        badge: "bg-violet-50 text-violet-700",
        arrow: "text-violet-600",
    },
    amber: {
        icon: "bg-amber-50 text-amber-600",
        hover: "group-hover:border-amber-200",
        badge: "bg-amber-50 text-amber-700",
        arrow: "text-amber-600",
    },
    rose: {
        icon: "bg-rose-50 text-rose-600",
        hover: "group-hover:border-rose-200",
        badge: "bg-rose-50 text-rose-700",
        arrow: "text-rose-600",
    },
};

function CalculatorCard({calculator}){
    const Icon = calculator.icon;
    const theme = themes[calculator.color];

    
    return (
        <a
            href = {calculator.path}
            className="group border border-slate-200 bg-orange p-6"
        >
            {calculator.title}
        </a>
    );
}

export default function Home() {

    return (
        <main className="min-h-screen bg-slate-50">
            {/* Hero */}

            <section className="relative overflow-hidden bg-slate-950">
                <div>
                    <Sparkles />
                    Your financial journey starts here
                </div>

            </section>

            {/* Calculator Cards */}

            <section
                id="calculators"
                className="mx-auto max-w-7xl px-5 py-16"
            >
                <div className="flex flex-col justify-between gap-4"> 

                    <div>
                        <p className="text-sm font-semibold uppercase text-emerald-700 tracking-[0.18em]">
                            Financial Toolkit
                        </p>
                    
                        <h2 className="text-3xl font-bold text-slate-900 mt-3 tracking-tight">
                            Explore our calculators
                        </h2>

                        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                            Whether you're investing for the future or planning regular
              withdrawals, find the right calculator for your goals.
                        </p>
                    </div>

                    <span className="w-fit rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600">
                        5 Financial Tools
                    </span>

                </div>

                <div className="mt-10 grid grid-cols-3 gap-5">
                    {calculators.map((calculator) => (
                        <CalculatorCard
                            key={calculator.title}
                            calculator={calculator}
                        />
                    ))}

                </div>



            </section>


            {/* Footer Section */}
            <footer className="mt-4 border-t border-slate-400 bg-white">
                <div className="mx-auto max-w-7xl px-5 py-6">
                    <p className="text-xs leading-6 text-slate-500">
                        WealthWise provides illustrative illustration.
                    </p>
                </div>
            </footer>

        </main>
    );
}