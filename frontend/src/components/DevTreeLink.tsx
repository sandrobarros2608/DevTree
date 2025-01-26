import { SocialNetwork } from "../types"

type DevTreeLinkProps = {
    link: SocialNetwork
}

export default function DevTreeLink({ link }: DevTreeLinkProps) {
    return (
        <li className="bg-white px-5 py-2 m-5 flex items-center gap-5 rounded-lg">
            <div
                className="w-12 h-12 bg-cover"
                style={{ backgroundImage: `url('/social/icon_${link.name}.svg')` }}>
            </div>

            <p className="capitalize">Visita mi: <span className="font-bold">{link.name}</span></p>
        </li>
    )
}