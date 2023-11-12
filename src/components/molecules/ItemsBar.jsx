import { IconButton } from "../atoms/IconButton";
import { ReactComponent as educationSvg } from '../../assets/svg/educationSvg.svg'
import { ReactComponent as statisticsSvg } from '../../assets/svg/statisticsSvg.svg'
import { ReactComponent as historySvg } from '../../assets/svg/historySvg.svg'
import { ReactComponent as createPointSvg } from '../../assets/svg/createPointSvg.svg'

function ItemsBar({ perfilurl, usuario }) {
    return (
        <div className="grid grid-cols-5 h-auto relative items-center justify-center">
            <IconButton SvgComponent={educationSvg} />
            <IconButton SvgComponent={statisticsSvg} />
            <IconButton className={'relative top-[-20px]'} SvgComponent={createPointSvg} />
            <IconButton SvgComponent={historySvg} />
            <div className="rounded-full w-auto h-auto flex items-center justify-center">
                <img className="w-[35px] h-[35px] border border-black rounded-full" src={perfilurl} alt={`esta es la foto de perfil de ${usuario}`} />
            </div>
        </div>
    )
};

export { ItemsBar };
