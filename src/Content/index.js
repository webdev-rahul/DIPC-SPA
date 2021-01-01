import heroImage from "./images/mainImage.jpg";

export default {
    nav: {
        logo: 'DIPC',
        links: [
            { text: "work", to: 'mywork' },
            { text: "Contact", to: 'mycontact' },
        ],
    },
    header: {
        img:
            `${heroImage}`,
        text: ['Hi!', "It's me Random.", 'I am '],
        typical: [
            'web developer. 🖥',
            2000,
            'Youtuber. 📹',
            2000,
            'Mobile Developer',
            2000,
        ],
        btnText: 'Discover More',
    },
}
