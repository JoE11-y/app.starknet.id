import React, { FunctionComponent } from "react";

const AddFilledIcon: FunctionComponent<IconProps> = ({ color, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 17"
      width={width}
      height={width}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 16C11.866 16 15 12.866 15 9C15 5.13401 11.866 2 8 2C4.13401 2 1 5.13401 1 9C1 12.866 4.13401 16 8 16ZM7.45455 9.62222V11.9333C7.45455 11.9452 7.45445 11.9586 7.45435 11.9733C7.45245 12.2514 7.44734 13 8 13C8.72727 13 8.72727 12.1704 8.72727 11.9333V9.62222H11.0909C11.0999 9.62222 11.1101 9.62231 11.1216 9.6224C11.3426 9.62426 12 9.62977 12 9.08889C12 8.52 11.4545 8.37778 11.0909 8.37778H8.72727V6.06667C8.72727 5.82963 8.72727 5 8 5C7.44734 5 7.45245 5.74856 7.45435 6.02674C7.45445 6.04142 7.45455 6.05479 7.45455 6.06667V8.37778H4.90909C4.72727 8.37778 4 8.55556 4 9.08889C4 9.62977 4.65743 9.62426 4.87843 9.6224C4.88987 9.62231 4.90014 9.62222 4.90909 9.62222H7.45455Z"
        fill={color}
      />
    </svg>
  );
};

export default AddFilledIcon;
