import { FC } from "react";
import IIconProps from "../icons/interfaces";

export const Persons: FC<IIconProps> = ({
  className,
  width = 68,
  height = 44,
  color = "none",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 68 44"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31.9941 30.2237C34.9291 28.2741 37.1583 25.4313 38.352 22.1162C39.5458 18.8011 39.6405 15.1897 38.6222 11.8166C37.6039 8.44347 35.5267 5.48777 32.6981 3.38693C29.8694 1.28609 26.4395 0.151733 22.916 0.151733C19.3925 0.151733 15.9626 1.28609 13.134 3.38693C10.3053 5.48777 8.2281 8.44347 7.20982 11.8166C6.19154 15.1897 6.28626 18.8011 7.47997 22.1162C8.67369 25.4313 10.903 28.2741 13.8379 30.2237C8.83116 32.0648 4.50841 35.3952 1.45116 39.7667C1.2519 39.9976 1.10311 40.2676 1.01436 40.5593C0.925605 40.8511 0.898843 41.1582 0.93579 41.461C0.972738 41.7637 1.07258 42.0554 1.2289 42.3172C1.38523 42.5791 1.59458 42.8054 1.84353 42.9815C2.09247 43.1577 2.3755 43.2799 2.67445 43.3402C2.9734 43.4006 3.28167 43.3977 3.57945 43.3319C3.87724 43.266 4.15796 43.1386 4.40361 42.9579C4.64925 42.7771 4.85439 42.547 5.00585 42.2823C7.02729 39.4106 9.70965 37.067 12.8267 35.4493C15.9438 33.8316 19.4042 32.9871 22.916 32.9871C26.4279 32.9871 29.8882 33.8316 33.0053 35.4493C36.1224 37.067 38.8047 39.4106 40.8262 42.2823C40.9776 42.547 41.1828 42.7771 41.4284 42.9579C41.6741 43.1386 41.9548 43.266 42.2526 43.3319C42.5504 43.3977 42.8586 43.4006 43.1576 43.3402C43.4565 43.2799 43.7395 43.1577 43.9885 42.9815C44.2374 42.8054 44.4468 42.5791 44.6031 42.3172C44.7594 42.0554 44.8593 41.7637 44.8962 41.461C44.9332 41.1582 44.9064 40.8511 44.8177 40.5593C44.7289 40.2676 44.5801 39.9976 44.3809 39.7667C41.3236 35.3952 37.0009 32.0648 31.9941 30.2237ZM10.8848 16.5792C10.8848 14.1996 11.5904 11.8735 12.9124 9.895C14.2344 7.91647 16.1134 6.37439 18.3118 5.46378C20.5103 4.55316 22.9294 4.3149 25.2632 4.77913C27.597 5.24336 29.7408 6.38922 31.4234 8.07182C33.106 9.75442 34.2519 11.8982 34.7161 14.232C35.1803 16.5659 34.9421 18.9849 34.0314 21.1834C33.1208 23.3818 31.5787 25.2608 29.6002 26.5828C27.6217 27.9048 25.2956 28.6104 22.916 28.6104C19.7251 28.6104 16.6649 27.3429 14.4086 25.0866C12.1523 22.8303 10.8848 19.7701 10.8848 16.5792ZM66.1465 42.8019C65.9139 42.9693 65.6503 43.0887 65.3711 43.1533C65.0918 43.2178 64.8026 43.2262 64.5201 43.1778C64.2376 43.1295 63.9676 43.0254 63.7257 42.8717C63.4838 42.7179 63.275 42.5176 63.1113 42.2823C61.0884 39.4119 58.4058 37.0693 55.2891 35.4515C52.1724 33.8336 48.7128 32.9879 45.2012 32.9855C44.621 32.9855 44.0646 32.755 43.6544 32.3447C43.2441 31.9345 43.0137 31.3781 43.0137 30.7979C43.0137 30.2178 43.2441 29.6614 43.6544 29.2512C44.0646 28.8409 44.621 28.6104 45.2012 28.6104C48.3921 28.6104 51.4522 27.3429 53.7085 25.0866C55.9648 22.8303 57.2324 19.7701 57.2324 16.5792C57.2324 13.3883 55.9648 10.3281 53.7085 8.07182C51.4522 5.81552 48.3921 4.54795 45.2012 4.54795C44.1024 4.55526 43.009 4.70227 41.9473 4.98545C41.6708 5.06475 41.3813 5.08875 41.0956 5.05606C40.8098 5.02337 40.5333 4.93464 40.2818 4.79495C40.0304 4.65526 39.809 4.46735 39.6302 4.24198C39.4515 4.01661 39.319 3.7582 39.2402 3.48154C39.0875 2.92329 39.1594 2.32744 39.4405 1.82152C39.7215 1.31559 40.1895 0.939778 40.7441 0.774513C42.1978 0.383125 43.6958 0.180935 45.2012 0.172951C48.7283 0.160256 52.1653 1.2865 55.0009 3.38415C57.8365 5.48179 59.9192 8.43877 60.9392 11.8152C61.9592 15.1917 61.862 18.8072 60.662 22.1239C59.4621 25.4407 57.2235 28.2815 54.2793 30.2237C59.2892 32.0723 63.6187 35.4005 66.6934 39.7667C67.0215 40.2423 67.1482 40.8284 67.0458 41.397C66.9433 41.9657 66.62 42.4707 66.1465 42.8019Z"
        fill="#5F5CF1"
      />
    </svg>
  );
};