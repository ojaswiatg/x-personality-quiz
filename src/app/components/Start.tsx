import Link from "next/link";

type TStartProps = {
    onClickStart: () => void;
};

export default function Start({ onClickStart }: TStartProps) {
    return (
        <div className="flex flex-col items-center mt-16 gap-12 px-16">
            <p className="prose-md whitespace-normal text-center">
                This quiz will determine which animal type personality you have!
            </p>
            <button className="btn btn-primary mt-4" onClick={onClickStart}>
                Start Quiz
            </button>
            <p className="prose-sm text-gray-400 whitespace-normal text-center">
                Disclaimer: This is just a test made for fun and does not determine your actual
                personality. Do not bully others based on the results. Have fun!
            </p>
            <p className="prose-sm text-gray-400 whitespace-normal text-center">
                I do not collect any data. However, I encourage you to checkout{" "}
                <Link
                    className="underline"
                    target="blank"
                    href="https://vercel.com/legal/privacy-policy"
                >
                    {"Vercel's Privacy Policy Here"}
                </Link>
                .
            </p>
        </div>
    );
}
