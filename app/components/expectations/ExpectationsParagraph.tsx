import { FinalIcon } from "@/lib/utils";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type ExpectationsParagraphProps = {
    title: string;
    icon: string;
    description: string;
}

export const ExpectationsParagraph = ({ title, icon, description }: ExpectationsParagraphProps) => {
    return (
        <div className="flex flex-col gap-2 items-start">
            <FontAwesomeIcon icon={FinalIcon(icon) as IconProp} className="h-10 text-networking-lightGray" />
            <div className="text-networking-green text-3xl font-bold sm:h-20 pr-6 mt-3">{title}</div>
            <div className="text-base">{description}</div>
        </div>
    )
}