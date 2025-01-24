"use client";

import Script from 'next/script'

export default function Calendar() {
  return (
    <>
      <div data-url="https://calendly.com/charlene-voyages/30min?hide_gdpr_banner=1"
       data-resize="true"
       className="calendly-inline-widget w-full"
      />
      <Script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async/>
    </>
  )
}
