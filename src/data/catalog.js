import { existsSync } from 'node:fs';
// Looks for public/images/<base>.webp (or jpg, jpeg, png, avif). Returns null if none, so a placeholder shows.
const findImage = (base) => {
  for (const ext of ['webp', 'jpg', 'jpeg', 'png', 'avif']) {
    if (existsSync(`public/images/${base}.${ext}`)) return `/images/${base}.${ext}`;
  }
  return null;
};
export const site = {
  name: 'Dwarka Interiors',
  url: 'https://dwarkainteriors.pages.dev', // change to your own domain later
  phone: '+918130713517',
  phoneDisplay: '+91 81307 13517',
  wa: '918130713517',
  street: 'Shop No. 2, Plot No. 3, Ground Floor, Bajaj Enclave, Old Palam Road, Near Ram Mandir',
  city: 'New Delhi',
  zip: '110078',
};
export const waLink = (t = 'Hello Dwarka Interiors, I would like to enquire about your services.') =>
  `https://wa.me/${site.wa}?text=${encodeURIComponent(t)}`;

export const services = [
  { slug: 'wallpapers', name: 'Wallpapers', h1: 'Wallpaper installation in Dwarka, Delhi',
    blurb: 'Pattern, texture and colour for feature walls and full rooms.',
    intro: 'Wallpaper changes a room faster than paint. We help you choose a design for your light and furniture, then install it with clean joins and matched patterns.',
    points: ['Help choosing designs, colours and finishes for each room', 'Wall checks and preparation before installation', 'Pattern matching and neat joins at corners and edges', 'Clean-up after the job'],
    faq: ['How is wallpaper priced?', 'Pricing depends on the design, the wall area and the condition of the wall. Send photos and measurements on WhatsApp for a first idea; we confirm the price after a site visit.'] },
  { slug: 'pvc-panels', name: 'PVC panels', h1: 'PVC wall panels in Dwarka, Delhi',
    blurb: 'Slatted, textured and marble-look panels for walls and TV units.',
    intro: 'PVC panels add texture to a wall without heavy construction. They suit TV backdrops, bedroom headboard walls and entrances, and are easy to wipe clean.',
    points: ['Slat, marble-effect and textured panel designs', 'Suitable for feature walls, TV units and entrances', 'Quick installation with minimal mess', 'Easy-to-clean surface'],
    faq: ['Are PVC panels suitable for every wall?', 'They work on most interior walls. Damp walls need to be checked first, so we inspect the wall before recommending a panel.'] },
  { slug: 'false-ceilings', name: 'False ceilings', h1: 'False ceiling design in Dwarka, Delhi',
    blurb: 'Ceiling designs with the lighting planned in.',
    intro: 'A false ceiling hides wiring and gives you room to plan lighting. We design around your room height and the lighting you want, from a simple border to layered designs.',
    points: ['Ceiling designs matched to room size and height', 'Planned spot, cove and profile lighting', 'Concealed wiring and fittings', 'Finished and painted to match the room'],
    faq: ['Will a false ceiling make my room feel smaller?', 'It lowers the ceiling slightly. In rooms with less height we suggest slim designs or a border-only ceiling to keep the room open.'] },
  { slug: 'blinds-curtains', name: 'Blinds and curtains', h1: 'Window blinds and curtains in Dwarka, Delhi',
    blurb: 'Control light and privacy with window treatments made to fit.',
    intro: 'The right window treatment controls glare, adds privacy and finishes a room. We help you choose between blinds and curtains for each window, then measure and fit them.',
    points: ['Roller, zebra and other blind styles', 'Curtains in light-filtering or blackout fabrics', 'Measured on site for a proper fit', 'Neat fitting at your home'],
    faq: ['Should I choose blinds or curtains?', 'Blinds suit kitchens, offices and modern rooms where you want tight control over light. Curtains add softness in bedrooms and living rooms. Many homes use both.'] },
  { slug: 'flooring', name: 'Flooring', h1: 'Flooring in Dwarka, Delhi',
    blurb: 'Floor options to refresh a room from the ground up.',
    intro: 'Flooring sets the feel of a room and takes the most wear. We help you compare options for comfort, upkeep and budget, and install them neatly.',
    points: ['Options compared for look, durability and upkeep', 'Surface checks before laying', 'Neat finish at edges and doorways', 'Advice on care after installation'],
    faq: ['Can I change the flooring in just one room?', 'Yes. We can work room by room and help you match or contrast the new floor with the rest of your home.'] },
  { slug: 'artificial-grass', name: 'Artificial grass', h1: 'Artificial grass in Dwarka, Delhi',
    blurb: 'Green surfaces for balconies, terraces and play areas.',
    intro: 'Artificial grass brings green into balconies and terraces without watering or mowing. We measure the area, suggest a pile height for the use, and fit it with a clean edge.',
    points: ['Pile heights for balconies, terraces and play areas', 'Measured and cut to the exact area', 'Secure fitting with neat edges', 'No watering or mowing needed'],
    faq: ['Does artificial grass suit a sunny balcony?', 'Outdoor-rated turf is made to handle sun and rain. We recommend a suitable type when we see the space.'] },
  { slug: 'customized-wallpapers', name: 'Customised wallpapers', h1: 'Custom wallpaper in Dwarka, Delhi',
    blurb: 'A wall design made for your room: your image, colours or theme.',
    intro: 'Customised wallpaper makes a wall personal: a landscape, a child\'s theme or an artwork in your colours. We size the design to your wall and install it as one piece.',
    points: ['Design sized to your exact wall', 'Your own image, theme or colours', 'Preview before printing', 'Installed with matched joins'],
    faq: ['Can I use my own image?', 'Usually, if the image has high enough resolution for the size of your wall. Share it with us and we will tell you how large it can print.'] },
];

services.forEach((s) => { s.image = findImage('services/' + s.slug); });
export const heroImage = findImage('hero');
