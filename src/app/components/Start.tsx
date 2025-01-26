type TStartProps = {
    onClickStart: () => void;
};

export default function Start({ onClickStart }: TStartProps) {
    return (
        <div className="my-auto min-h-screen min-w-screen flex flex-col items-center pt-32 gap-16">
            <p className="prose-md whitespace-normal px-16 text-center">
                This quiz will determine how much gay you are!
            </p>
            <button className="btn btn-primary mt-4" onClick={onClickStart}>
                Start Quiz
            </button>
        </div>
    );
}
