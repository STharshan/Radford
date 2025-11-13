"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { SITE_NAME} from "../components/global"; // ✅ import global text

export default function WelcomeSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-16 md:py-24 bg-[#F9F6F1]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div data-aos="fade-right" data-aos-duration="1000">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#3C2E2B] mb-6">
              Welcome to {SITE_NAME}
            </h2>

            <p
              className="text-lg text-[#3C2E2B]/80 leading-relaxed mb-6"
              data-aos="fade-up"
              data-aos-delay="150"
            >
           Radford Care Group offers daytime activities for older people in Nottingham, with extended facilities for the more frail elderly. We are a registered charity that has provided a service to older people since 1968. We organise activities such as exercise, arts and crafts, speakers, entertainment, short and long day trips out, as well as linking up with other services to offer even more.
            </p>

            <p
              className="text-[#3C2E2B]/80 leading-relaxed mb-8"
              data-aos="fade-up"
              data-aos-delay="300"
            >
So come in and join us! Our centre is vibrant, busy and innovative – a special place that continues to be involved with our local community.  Please visit the rest of our site to learn more, or contact us with any enquiries you may have. 
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <a
                href="/facilities"
                className="inline-flex items-center justify-center h-10 px-6 text-sm font-medium text-white bg-primary bg-secondary-hover rounded-md shadow transition-all"
              >
                Explore Our Facilities
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center h-10 px-6 text-sm font-medium border border-[#3C2E2B]/20 rounded-md shadow-sm bg-white bg-secondary-hover text-black transition-all"
              >
                Arrange a Visit
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div
            className="relative aspect-4/3 rounded-lg overflow-hidden shadow-xl"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            <img
              src="a5.jpg"
              alt="Beechdale House entrance with elegant white columns and glass doors"
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
