"use client";

import {useRef} from "react";
import useElementSize from "../_hooks/useElementSize";

export default function Calendar() {
  const parentRef = useRef(null);
  const {width, height} = useElementSize(parentRef);

  const calendarWidth = width;
  const calendarHeight = 350;

  return <div ref={parentRef} className={"flex w-full"}>
    <iframe
      src="https://calendar.zohocloud.ca/zc/ui/embed/#calendar=zz0801123082fb56b12df6ac069e5cbeaa97a1b4fc95d3ba2624de77585279cca0db30f75b0071dd89c55a14d88d2843b27b3a0e6a&title=info&type=1&language=fr&timezone=Europe%2FParis&showTitle=0&showTimezone=1&startingDayOfWeek=1&timeFormat=1&view=month&showDetail=0&theme=1&showAttendee=0&showSwitchingViews=1&eventColorType=bold&showAllEvents=0&showLogo=0"
      width={calendarWidth}
      height={calendarHeight}
      style={{border: 0, margin: 0, padding: 0}}
      loading="lazy"
      aria-hidden="false"
    />
  </div>
}
