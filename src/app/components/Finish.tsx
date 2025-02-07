import { map, orderBy } from "lodash-es";
import { ADMIN_LINK, TPersonality } from "../constants";
import { useEffect, useState } from "react";

type TFinishProps = {
    totalPoints: { [key in TPersonality]?: number };
    onClickAgain: () => void;
};

export default function Finish({ totalPoints, onClickAgain }: TFinishProps) {
    const [arrPoints, setArrPoints] = useState(
        map(totalPoints, (point, key) => {
            return {
                personality: key,
                point,
            };
        }),
    );

    useEffect(() => {
        setArrPoints(orderBy(arrPoints, "point", "desc"));

        console.log(arrPoints);
    }, []);

    return (
        <div className="flex flex-col items-center mt-16 gap-8">
            <div className="flex flex-col items-center gap-4">
                <p className="prose-xl font-bold whitespace-normal">
                    You are a {arrPoints[0].personality} type person!
                </p>

                <p className="prose-md whitespace-normal text-center px-16">
                    Here are some of your other dominant personalities in order:
                </p>

                <ol>
                    {arrPoints.map((point, index) => {
                        return index > 0 && index < 4 ? (
                            <li key={`point-${point.personality}`} className="prose-sm">
                                {point.personality}
                            </li>
                        ) : null;
                    })}
                </ol>
            </div>

            <div className="flex flex-col gap-4 items-center">
                <p className="prose-md whitespace-normal">
                    Take the screenshot and post the results
                </p>
                <p>OR</p>
                <button className="btn btn-primary" onClick={onClickAgain}>
                    Take the quiz again
                </button>
            </div>
            <p className="prose-md">
                <a target="blank" href={ADMIN_LINK} className="underline">
                    Follow @arxhique on X for more!
                </a>
            </p>
        </div>
    );
}
