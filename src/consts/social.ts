import type { Social } from "@/types/social";

import Facebook from "@/assets/svg/facebook.svg";
import Instagram from "@/assets/svg/instagram.svg";
import TikTok from "@/assets/svg/tiktok.svg";

export const SOCIAL: Social[] = [
  {
    id: "facebook",
    name: "Facebook",
    url: "https://www.facebook.com/kdoshstore",
    label: "Visitar perfil de Kdosh Store en Facebook",
    image: {
      logo: Facebook,
      width: 200,
      height: 200,
    },
  },

  {
    id: "instagram",
    name: "Instagram",
    url: "https://instagram.com/kdoshstore",
    label: "Visitar perfil de Kdosh Store en Instagram",
    image: {
      logo: Instagram,
      width: 200,
      height: 200,
    },
  },

  {
    id: "tiktok",
    name: "TikTok",
    url: "https://www.tiktok.com/@kdoshstore",
    label: "Visitar perfil de Kdosh Store en TikTok",
    image: {
      logo: TikTok,
      width: 200,
      height: 200,
    },
  },
];
