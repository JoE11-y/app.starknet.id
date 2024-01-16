import React, { FunctionComponent } from "react";

const OptionIcon: FunctionComponent<IconProps> = ({ color, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M6.00001 13.4116V13.0286C6.00846 12.9976 6.02254 12.9694 6.02818 12.9385C6.1521 12.133 6.82239 11.4965 7.60813 11.443C8.48683 11.381 9.23035 11.8823 9.47255 12.6991C9.50353 12.8061 9.52606 12.9187 9.55423 13.0286V13.4116C9.54578 13.4369 9.5317 13.4595 9.52888 13.4876C9.40778 14.2311 8.87267 14.7972 8.14042 14.9578C8.0841 14.969 8.02777 14.9859 7.97144 15H7.58842C7.56307 14.9916 7.53772 14.9775 7.51238 14.9747C6.78013 14.8564 6.22251 14.3353 6.05351 13.6115C6.03661 13.5411 6.01691 13.4764 6.00001 13.4116ZM9.55424 2.58559L9.55423 2.96864C9.54578 2.99962 9.5317 3.02778 9.52888 3.05876C9.40214 3.86987 8.72904 4.50355 7.93483 4.55424C7.05895 4.61057 6.31825 4.10363 6.07886 3.28407C6.04788 3.17985 6.02535 3.07284 6 2.96863V2.5856C6.00845 2.56026 6.02253 2.53772 6.02816 2.51238C6.16335 1.78013 6.58862 1.30135 7.29833 1.07323C7.39127 1.04225 7.48985 1.02535 7.5856 1H7.96862C7.99397 1.00845 8.01932 1.02253 8.04467 1.02535C8.77973 1.14645 9.33455 1.66466 9.50353 2.38846C9.52044 2.45605 9.53734 2.52083 9.55424 2.58559ZM9.55423 7.80711V8.19013C9.54578 8.22111 9.5317 8.24928 9.52606 8.28025C9.39933 9.08855 8.70087 9.73912 7.9123 9.77292C7.02515 9.81235 6.27319 9.27724 6.06196 8.45205C6.03943 8.36474 6.01971 8.27744 6 8.19013V7.80711C6.00845 7.77613 6.02253 7.74796 6.02816 7.71699C6.15208 6.90869 6.85335 6.2581 7.64193 6.22151C8.52908 6.17926 9.28104 6.71718 9.49227 7.54237C9.5148 7.6325 9.53451 7.7198 9.55423 7.80711Z"
        fill={color}
      />
    </svg>
  );
};

export default OptionIcon;
