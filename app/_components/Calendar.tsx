"use client";

import {useRef} from "react";
import Script from 'next/script'
import useElementSize from "../_hooks/useElementSize";

export default function Calendar() {
  const parentRef = useRef(null);
  const {width, height} = useElementSize(parentRef);

  const calendarWidth = width;
  const calendarHeight = 350;

  return <div ref={parentRef} className={"flex w-full"}>
    <div data-url="https://calendly.com/charlene-voyages-info/30min?hide_gdpr_banner=1"
         data-resize="true"
         className="calendly-inline-widget w-full max-h-[600px]"
    />
    <Script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async/>
  </div>
}
