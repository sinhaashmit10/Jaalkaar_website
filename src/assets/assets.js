import p_img1 from './p_img1.jpg'
import p_img2_1 from './p_img2_1.jpg'
import p_img3 from './p_img3.jpg'
import p_img3_2 from './p_img3_2.jpg'
import p_img3_3 from './p_img3_3.jpg'
import p_img3_4 from './p_img3_4.jpg'
import p_img4 from './p_img4.jpg'
import p_img5 from './p_img5.jpg'
import p_img6 from './p_img6.jpg'
import p_img7 from './p_img7.jpg'
import p_img8 from './p_img8.jpeg'
import p_img9 from './p_img9.jpeg'
import p_img10 from './p_img10.jpeg'
import p_img12_1 from './p_img12_1.jpg'
import p_img12_2 from './p_img12_2.jpg'
import p_img12_3 from './p_img12_3.jpg'
import p_img12_4 from './p_img12_4.jpg'
import border from './border.svg'
import bg_1 from './bg_1.jpeg'
import bg_2 from './bg_2.jpeg'
import hero_vid from './hero_vid.mp4';
import hero_vid2 from './hero_vid2.mp4';
import hand_01 from './hand_01.mp4';
import profile_icon2 from './profile_icon.svg'
import asset1 from './asset1.jpg'
import asset2 from './asset2.jpg'
import asset3 from './asset3.jpg'
import asset4 from './asset4.jpeg'
import asset5 from './asset5.jpg'
import asset6 from './asset6.JPG'
import asset7 from './asset7.jpg'
import p_img_founder from './p_img_founder.jpg'

import logo from './logo.png'
import hero_img from './hero_img.jpg'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import about_img from './about_img.jpg'
import contact_img from './contact_img.png'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'
import instagram_logo from './instagram_logo.svg'
import youtube_logo from './youtube_logo.svg'
import linkedin_logo from './linkedin_logo.svg'
import facebook_logo from './facebook_logo.svg'
import cross_icon from './cross_icon.png'

export const assets = {
    logo,
    border,
    hero_img,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    contact_img,
    razorpay_logo,
    stripe_logo,
    instagram_logo,
    facebook_logo,
    linkedin_logo,
    youtube_logo,
    cross_icon,
    bg_1,
    bg_2,
    hero_vid,
    hero_vid2,
    hand_01,
    profile_icon2,
    asset1,
    asset2,
    asset3,
    asset4,
    asset5,
    asset6,
    asset7,
    p_img_founder
}

export const products = [
    {
        _id: "aaaaa",
        name: "Bihar Rani Bavan Buti",
        description: "A true masterpiece, meticulously crafted with fine handwoven fabric, showcasing a harmonious blend of intricate buti patterns that are thoughtfully designed to evoke a sense of elegance and grace, providing an exquisite, luxurious feel that elevates the wearer’s experience.",
        details: "",
        price: 7000,
        image: [p_img1],
        category: "Women",
        subCategory: "Tussar Saree",
        fabric:"Tussar silk: Tussar silk, also known as 'Kosa silk', is a premium variety of silk renowned for its natural texture, rich gold sheen, and luxurious feel. Derived from the larvae of silkworms primarily found in wild forests, Tussar silk is mainly produced in India, particularly in the states of Jharkhand, Odisha, West Bengal, and Chhattisgarh.",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aaaab",
        name: "Madhubani Heritage Buti",
        description: "Made from soft and breathable silk, this saree offers comfort and elegance with its detailed motifs.",
        details: "",
        price: 8000,
        image: [p_img2_1],
        category: "Women",
        subCategory: "Saree",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaac",
        name: "Sonepur Silk Buti",
        description: "A luxurious Purple Bavan Buti Tussar Silk Saree, handwoven with intricate motifs, exuding timeless elegance and regal charm.",
        details: "Experience the epitome of grace and sophistication with this enchanting Purple Bavan Buti Tussar Silk Saree, a masterpiece that seamlessly blends heritage and elegance. Crafted from the finest tussar silk, this saree boasts a naturally rich and lustrous texture that adds depth and dimension to its design. The highlight of this creation is the exquisite Bavan Buti motifs—meticulously handwoven by skilled artisans—symbolizing the rich tradition of Indian craftsmanship. Each buti is a testament to the dedication and artistry that goes into creating this timeless piece. The vibrant purple hue of the saree exudes royalty and charm, making it an ideal choice for weddings, festive gatherings, and celebratory events. The subtle sheen of the tussar silk complements the intricate detailing, ensuring you stand out with understated elegance. The lightweight and breathable fabric ensures comfort without compromising on style, allowing you to carry this saree effortlessly for hours. Drape this saree with a traditional gold or kundan jewelry set to elevate its regal appeal. Whether you're attending a grand family function or looking to make a statement at a cultural event, this Purple Bavan Buti Tussar Silk Saree promises to be the perfect companion. Embrace this piece of heritage and let its timeless beauty reflect your refined taste in fashion.",
        price: 10000,
        image: [p_img3, p_img3_2, p_img3_3, p_img3_4],
        category: "Women",
        subCategory: "Saree",
        sizes: ["S", "L", "XL"],
        date: 1716234545448,
        bestseller: true
    },
    {
        _id: "aaaad",
        name: "Bavan Buti Royale",
        description: "A rich Banarasi fabric adorned with meticulously woven butis, perfect for traditional occasions.",
        details: "",
        price: 12000,
        image: [p_img4],
        category: "Women",
        subCategory: "Saree",
        sizes: ["S", "M", "XXL"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaae",
        name: "Bihar Blossom Buti",
        description: "A blend of cotton and silk, this saree combines comfort and luster with delicate buti detailing.",
        details: "",
        price: 15000,
        image: [p_img5],
        category: "Women",
        subCategory: "Saree",
        sizes: ["M", "L", "XL"],
        date: 1716622345448,
        bestseller: true
    },
    {
        _id: "aaaaf",
        name: "Bavan Buti Royale",
        description: "Woven on traditional handlooms, this saree is a tribute to timeless craftsmanship and heritage.",
        details: "",
        price: 14000,
        image: [p_img6],
        category: "Women",
        subCategory: "Saree",
        sizes: ["S", "L", "XL"],
        date: 1716623423448,
        bestseller: true
    },
    {
        _id: "aaaag",
        name: "Madhubani Bavan Buti",
        description: "Crafted from smooth satin fabric, this saree showcases an elegant sheen and intricate patterns.",
        details: "",
        price: 19000,
        image: [p_img7],
        category: "Women",
        subCategory: "Saree",
        sizes: ["S", "L", "XL"],
        date: 1716621542448,
        bestseller: false
    },
    {
        _id: "aaaah",
        name: "Bavan Buti",
        description: "Made with premium tussar silk, the saree exudes natural texture and highlights beautiful buti work.",
        details: "",
        price: 14000,
        image: [p_img8],
        category: "Women",
        subCategory: "Saree",
        sizes: ["S", "M", "L", "XL"],
        date: 1716622345448,
        bestseller: false
    },
    {
        _id: "aaaai",
        name: "Bavan Buti",
        description: "Featuring lightweight organza fabric, this saree offers a graceful drape with finely crafted butis.",
        details: "",
        price: 10000,
        image: [p_img9],
        category: "Women",
        subCategory: "saree",
        sizes: ["M", "L", "XL"],
        date: 1716621235448,
        bestseller: false
    },
    {
        _id: "aaaaj",
        name: "Bavan Buti",
        description: "Known for its durability and softness, this katan silk saree is adorned with intricate motifs.",
        details: "",
        price: 11000,
        image: [p_img10],
        category: "Women",
        subCategory: "Saree",
        sizes: ["S", "L", "XL"],
        date: 1716622235448,
        bestseller: false
    },
    {
        _id: "aaaak",
        name: "Bavan Buti",
        description: "A blend of traditional Chanderi fabric and exquisite buti designs, perfect for festive celebrations.",
        details: "",
        price: 12000,
        image: [p_img12_1, p_img12_2, p_img12_3, p_img12_4],
        category: "Women",
        subCategory: "Saree",
        sizes: ["S", "M", "L"],
        date: 1716623345448,
        bestseller: false
    }

]