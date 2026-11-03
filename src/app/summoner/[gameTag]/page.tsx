import { Suspense } from "react";

interface Props {
    params: Promise<{
        gameTag: string;
    }>;
}

export default function SummonerPage({ params }: Props) {
    return (
        <div>
            <Suspense fallback={<p>Loading summoner...</p>}>
                <SummonerContent params={params} />
            </Suspense>
        </div>
    );
}

async function SummonerContent({ params }: Props) {
    const { gameTag } = await params;

    return <h2>{gameTag}</h2>;
}