type TFinishProps = {
    totalPoints: number;
};

export default function Finish({ totalPoints }: TFinishProps) {
    return (
        <div className="my-auto min-h-screen min-w-screen flex flex-col items-center pt-32 gap-16">
            <div className="flex flex-col items-center gap-4">
                <progress
                    className="progress progress-primary w-48"
                    value={totalPoints}
                    max="100"
                ></progress>
                <p className="prose-xl font-bold whitespace-normal">You are {totalPoints}% Gay</p>
            </div>
            <p className="prose-md whitespace-normal">Take the screenshot and post the results</p>
            <p className="prose-md">
                <a target="blank" href="http://twtr.openinapp.co/cnqzb" className="underline">
                    Follow @arxhique on X for more!
                </a>
            </p>
        </div>
    );
}
