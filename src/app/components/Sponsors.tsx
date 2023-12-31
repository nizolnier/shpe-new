import bg from '../assets/wavepattern.svg'
import bgm from '../assets/wavepattern-mobile.svg'
import m from '../assets/micron.svg'
import boa from '../assets/boa.svg'
import i from '../assets/intel.svg'
import d from '../assets/disney.svg'
import q from '../assets/qorvo.svg'
import v from '../assets/verizon.svg'

interface Prop {
    isMobile: any
}

const Sponsors = ({isMobile} : Prop) => {
    return (<main className="2xl:h-[35rem] lg:h-[27rem] h-[45rem] bg-white">
        <img src={isMobile ? bgm.src : bg.src} className="absolute z-10 max-w-[100%] w-screen" />
        <section className="absolute z-20 2xl:pt-[6rem] lg:pt-[3.5em] flex flex-col items-center 2xl:h-[50rem] h-[45rem]">
            <p className="pb-4 text-center text-slate-300 2xl:text-3xl text-xl font-medium">Know some of our partners</p>
            <figure className={`${isMobile ? "flex-col h-[30rem]" : ""} flex justify-around items-center max-w-[100%] w-screen`}>
            <img className="2xl:w-[8%]" src={q.src} />
                <img className="2xl:w-[12%]" src={boa.src} />
                <img className="2xl:w-[8%]" src={i.src} />
                <img className="2xl:w-[10%]" src={d.src} />
                <img className="2xl:w-[6%]" src={m.src} />
                <img className="2xl:w-[10%]" src={v.src} />
            </figure>
        </section>
    </main>
    )
}

export default Sponsors