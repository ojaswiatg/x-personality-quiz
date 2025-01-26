import { ADMIN_LINK } from "../constants";

export default function Footer() {
    return (
        <p className="prose-sm whitespace-normal text-center px-8 absolute bottom-8">
            Created with ♥️ by{" "}
            <a target="blank" href={ADMIN_LINK} className="underline">
                @arxhique on X
            </a>
            . Follow for more! If you face any issues, feel free to text{" "}
            <a target="blank" href={ADMIN_LINK} className="underline">
                @arxhique on X
            </a>
        </p>
    );
}
