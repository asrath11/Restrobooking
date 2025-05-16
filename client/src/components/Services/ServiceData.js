import Bouquet from '../../assets/services/bouquet.png';
import Cakes from '../../assets/services/cakes.png';
import Decorations from '../../assets/services/decorations.png';
import EventPlanning from '../../assets/services/event-planning.png';
import FoodBeverages from '../../assets/services/food-beverages.png';
import Gifts from '../../assets/services/gifts.png';
import Screening from '../../assets/services/screening.png';

export const SERVICES = [
  {
    title: 'Food & Beverages',
    description: 'Premium catering services with gourmet options',
    img: FoodBeverages,
  },
  {
    title: 'Bouquets',
    description: 'Custom floral arrangements for every occasion',
    img: Bouquet,
  },
  {
    title: 'Gifts',
    description: 'Personalized gift packages and souvenirs',
    img: Gifts,
  },
  {
    title: 'Decorations',
    description: 'Theme-based venue decoration services',
    img: Decorations,
  },
  {
    title: 'Event Planning',
    description: 'Complete event coordination and management', // Updated description
    img: EventPlanning, // Corrected image reference
  },
  {
    title: 'Screening',
    description: 'Outdoor movie screenings and AV setups', // Updated description
    img: Screening, // Corrected image reference
  },
  {
    title: 'Cakes',
    description: 'Custom-designed cakes for special occasions', // Updated description
    img: Cakes, // Corrected image reference
  },
];
