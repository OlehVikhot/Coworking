export type ItemsData = {
  id: number;
  name: string;
  country: string;
  city: string;
  location: string;
  isVerified: boolean;
  addedDate: string;
  desciption: string;
  facebookLink: string;
  instagramLink: string;
  telegramLink: string;
  perksList: string[];
  filterList: string[];
  price: number;
  image: string;
  allImages: string[];
  rating: number;
  reviews: number;
  top: boolean;
};

export type userData = {
  name?: string;
  phone?: string;
  email: string;
  password: string;
};

export type Modal = {
  onClick: () => void;
  chooseNextStep: (
    type:
      | "NeedBookModal"
      | "SignUpModal"
      | "LogInModal"
      | "BookModal"
      | "BookInfoModal"
  ) => void;
};
