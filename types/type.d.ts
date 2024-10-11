declare interface AdCardProps {
  handleCardButtonPress: () => void;
  cardText: string;
  buttonText: string;
}

declare interface CategoryCardProps {
  imageSrc?: ImageSourcePropType;
  handleCardPress: (val: string) => void;
  cardText: string;
  selectedCard;
  type: string;
}
declare interface RecommendationProps {
  id: number;
  name: string;
  description: string;
  price: string;
  rating: number;
  category: string;
  itemImage: string;
}

declare interface ExtendedRecommendations extends RecommendationProps {
  handleClick: () => void;
}

declare interface OrderCardProps {
  id: number;
  status: string;
  price: number;
}

declare interface HeaderProps {
  location: string;
  onLocationPress: () => void;
  onNotificationPress: () => void;
  onFavouritesPress: () => void;
}

declare interface TitleAndAllProps {
  title: string;
  handleButtonPress: () => void;
}

declare interface CustomInputProps extends TextInputProps {
  label: string;
  icon?: string;
  multiline: boolean;
  iconName?: string;
  iconSize?: number;
  iconColor?: string;
  labelStyle?: TextStyle;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  iconStyle?: StyleProp<TextStyle>;
}

declare interface AdditionalCheckboxesProps {
  id: number;
  extra?: string;
  itemText: string;
  size: number;
  handleChecked: (isChecked: boolean) => void;
  type: string;
}

declare interface FoodDetailBarProps {
  iconName: IconProps<ComponentProps<typeof Ionicons>["name"]>;
  title: string;
  itemAmount: string;
  iconSize: number;
  iconColor: string;
}
declare interface DetailsPageProps {
  id: number;
  name: string;
  description: string;
  price: string;
  rating: number;
  category: string;
  itemImage: string;
}

declare interface ItemAndAmountProps {
  item: string;
  amount: string;
  numItems?: number;
}

declare interface SelectedExtras {
  id: number;
  name: string;
  price: string;
}

declare interface FilterOptionsProps {
  topIconName: IconProps<ComponentProps<typeof Ionicons>["name"]>;
  topIconSize: number;
  bottomIconName: IconProps<ComponentProps<typeof Ionicons>["name"]>;
  bottomIconSize: number;
  filterOptionName: string;
}

declare module "react-native-vector-icons/FontAwesome";
