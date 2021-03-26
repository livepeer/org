type Props = {
  color: string;
};

export const LightIcon = ({ color }: Props) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9 12.75C11.0711 12.75 12.75 11.0711 12.75 9C12.75 6.92893 11.0711 5.25 9 5.25C6.92893 5.25 5.25 6.92893 5.25 9C5.25 11.0711 6.92893 12.75 9 12.75Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 0.75V2.25"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 15.75V17.25"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.16504 3.16504L4.23004 4.23004"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.7699 13.77L14.8349 14.835"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.75 9H2.25"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.75 9H17.25"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.16504 14.835L4.23004 13.77"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.7699 4.23004L14.8349 3.16504"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const DarkIcon = ({ color }: Props) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.4999 9.5925L16.9978 9.63851C17.0159 9.44227 16.9171 9.25367 16.7454 9.15691C16.5737 9.06015 16.3612 9.07327 16.2027 9.19042L16.4999 9.5925ZM9.15743 2.25L9.55951 2.5472C9.67665 2.38872 9.68977 2.1762 9.59301 2.00451C9.49625 1.83282 9.30766 1.73399 9.11142 1.75212L9.15743 2.25ZM16.002 9.54649C15.8928 10.7286 15.4492 11.8551 14.7231 12.7943L15.5142 13.4059C16.3565 12.3165 16.8711 11.0097 16.9978 9.63851L16.002 9.54649ZM14.7231 12.7943C13.9969 13.7334 13.0184 14.4463 11.9018 14.8496L12.2416 15.7902C13.5367 15.3223 14.6719 14.4953 15.5142 13.4059L14.7231 12.7943ZM11.9018 14.8496C10.7853 15.2529 9.57704 15.3299 8.41837 15.0716L8.20074 16.0476C9.54479 16.3473 10.9464 16.258 12.2416 15.7902L11.9018 14.8496ZM8.41837 15.0716C7.2597 14.8132 6.19857 14.2302 5.35915 13.3908L4.65204 14.0979C5.62577 15.0716 6.85668 15.7479 8.20074 16.0476L8.41837 15.0716ZM5.35915 13.3908C4.51973 12.5514 3.93673 11.4902 3.67837 10.3316L2.70234 10.5492C3.00203 11.8932 3.67831 13.1242 4.65204 14.0979L5.35915 13.3908ZM3.67837 10.3316C3.42002 9.17289 3.49699 7.9646 3.90028 6.84808L2.95976 6.50836C2.49194 7.80352 2.40265 9.20513 2.70234 10.5492L3.67837 10.3316ZM3.90028 6.84808C4.30358 5.73157 5.01651 4.75299 5.95567 4.02687L5.344 3.23576C4.25458 4.07806 3.42758 5.2132 2.95976 6.50836L3.90028 6.84808ZM5.95567 4.02687C6.89482 3.30075 8.02135 2.85712 9.20344 2.74788L9.11142 1.75212C7.7402 1.87884 6.43342 2.39346 5.344 3.23576L5.95567 4.02687ZM8.75534 1.9528C7.93672 3.0603 7.54279 4.42484 7.64521 5.79824L8.64244 5.72388C8.55783 4.58933 8.88325 3.4621 9.55951 2.5472L8.75534 1.9528ZM7.64521 5.79824C7.74763 7.17164 8.33959 8.46267 9.31342 9.4365L10.0205 8.7294C9.21606 7.92492 8.72705 6.85843 8.64244 5.72388L7.64521 5.79824ZM9.31342 9.4365C10.2873 10.4103 11.5783 11.0023 12.9517 11.1047L13.026 10.1075C11.8915 10.0229 10.825 9.53387 10.0205 8.7294L9.31342 9.4365ZM12.9517 11.1047C14.3251 11.2071 15.6896 10.8132 16.7971 9.99458L16.2027 9.19042C15.2878 9.86667 14.1606 10.1921 13.026 10.1075L12.9517 11.1047Z"
        fill={color}
      />
    </svg>
  );
};

export const SearchIcon = ({ color }: Props) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.7498 15.75L12.4873 12.4875"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const MobileMenuIcon = ({ color }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 6H21"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 12H21"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 18H21"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 6H3.01"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 12H3.01"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 18H3.01"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CloseMobileNav = ({ color }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 6L6 18"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 6L18 18"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
