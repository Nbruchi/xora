import { Element } from "react-scroll";
import { links, logos } from "../constants";
import { Marker } from "../components/Marker";

const Download = () => {
    return (
        <section>
            <Element
                name="download"
                className="relative pt-24 pb-32 g7 max-lg:pb-24 max-md:py-16"
            >
                <div className="container">
                    <div className="flex items-center">
                        <div className="relative mr-6 flex-540 max-xl:flex-280 max-lg:flex-256 max-md:flex-100">
                            <div className="mb-10">
                                <img
                                    src="/images/xora.svg"
                                    alt="logo"
                                    width={160}
                                    height={55}
                                />
                            </div>
                            <p className="max-w-md mb-10 body-1">
                                Try it now for free on iOS, Android, PC, Web -
                                whatever your flavor, we&apos;ve got you
                                covered.
                            </p>
                            <ul className="flex flex-wrap items-center gap-6">
                                {links.map(({ id, url, icon }) => (
                                    <li
                                        className="download_tech-link download_tech-link_last-before download_tech-link_last-after"
                                        key={id}
                                    >
                                        <a
                                            href={url}
                                            className="relative flex items-center justify-center duration-500 border-2 transition-borderColor size-22 download_tech-icon_before rounded-half border-s3 bg-s1"
                                        >
                                            <span className="absolute rotate-90 -top-2">
                                                <Marker />
                                            </span>
                                            <img
                                                src="/images/lines.svg"
                                                alt="lines"
                                                className="absolute object-contain size-13/20"
                                            />
                                            <span className="download_tech-icon">
                                                {icon}
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mb-10 max-md:hidden">
                            <div className="relative download_preview-before download_preview-after rounded-40 w-[955px] border-2 border-s5 p-6">
                                <div className="relative px-6 pb-6 rounded-3xl bg-s1 pt-14">
                                    <span className="bg-p2 download_preview-dot left-6" />
                                    <span className="bg-s3 download_preview-dot left-11" />
                                    <span className="bg-p1/15 download_preview-dot left-16" />
                                    <img
                                        src="/images/screen.jpg"
                                        alt="screen"
                                        width={855}
                                        height={655}
                                        className="rounded-xl"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="flex justify-center mt-24 max-lg:hidden">
                        {logos.map(({ height, id, title, url, width }) => (
                            <li key={id} className="mx-10">
                                <img
                                    src={url}
                                    alt={title}
                                    width={width}
                                    height={height}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </Element>
        </section>
    );
};

export default Download;
