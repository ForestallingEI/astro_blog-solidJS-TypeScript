import { For } from "solid-js";

type itemsType = {
    href: string;
    src: string;
    alt: string;
    name: string;
};

const items: itemsType[] = [
    {
        href: "https://picsum.photos/id/234/200/300",
        src: "https://picsum.photos/id/234/200/300",
        alt: "piscum",
        name: "piscum"
    },
    {
        href: "https://picsum.photos/id/237/200/300",
        src: "https://picsum.photos/id/237/200/300",
        alt: "piscum1",
        name: "piscum1"
    },
    {
        href: "https://picsum.photos/id/238/200/300",
        src: "https://picsum.photos/id/238/200/300",
        alt: "piscum2",
        name: "piscum2"
    },
];

export default function Images() {
    return (
        <>
            <h2>Gallery</h2>
            <div style="display:flex; gap:1rem;">
                <For each={items}>
                    {(item) => {
                        return (
                            <>
                                <div class="gallery">
                                    <a target="_blank" href={item.href}>
                                        <img src={item.src} alt={item.alt} />
                                    </a>
                                    <div class="desc">{item.name}</div>
                                </div>
                            </>
                        );
                    }
                    }
                </For>
            </div>
        </>
    );
}
