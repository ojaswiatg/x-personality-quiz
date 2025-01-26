import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col pt-32 items-center">
            <h2>Not Found</h2>
            <p>Could not find requested page</p>
            <Link href="/">
                <p className="prose-md underline">Return Home</p>
            </Link>
        </div>
    );
}
