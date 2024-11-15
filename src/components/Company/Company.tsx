import React from "react";
import Footer from "../Bars/FootBar";
import Navbar from "../Bars/Navbar";
import tonyhawkImage from "@/assets/tonyHawk.png";
import leticiaImage from "@/assets/leticiaBufoni.png";
import rodneyImage from "@/assets/rodneyMullen.png";
import nyjahImage from "@/assets/nyjahHuston.png";

const Company = () => {
  const teamMembers = [
    {
      name: "Tony Hawk",
      role: "Founder & CEO",
      image: tonyhawkImage,
      instagram: "https://www.instagram.com/tonyhawk/",
    },
    {
      name: "Leticia Bufoni",
      role: "Pro Skater & Brand Ambassador",
      image: leticiaImage,
      instagram: "https://www.instagram.com/leticiabufoni/",
    },
    {
      name: "Rodney Mullen",
      role: "Chief Innovation Officer",
      image: rodneyImage,
      instagram: "https://www.instagram.com/rodneymullen/",
    },
    {
      name: "Nyjah Huston",
      role: "Lead Product Designer",
      image: nyjahImage,
      instagram: "https://www.instagram.com/nyjah/",
    },
  ];

  return (
    <>
      <Navbar isProductDetailPage={false} scroll={true} />
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-16">
            <h1 className="text-4xl font-bold text-black mb-4">
              About Sunset Skate Club{" "}
            </h1>
            <p className="text-xl text-gray-800">
              Pushing the boundaries of skateboarding since 2005
            </p>
          </header>

          <section className="bg-white shadow-lg rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-semibold text-black mb-6">
              Our Story
            </h2>
            <p className="text-gray-700 mb-4">
              Sunset Skate Club was born in 2005 in a small garage in
              California. Our founder, Tony Hawk, had a vision: to create
              skateboards that would revolutionize the industry and inspire
              skaters worldwide. What started as a passion project quickly grew
              into a global brand known for its innovative designs and
              uncompromising quality.
            </p>
            <p className="text-gray-700">
              From our humble beginnings to becoming a leader in the
              skateboarding world, we've stayed true to our roots. Every Sunset
              Skate Club board is a testament to our love for skating and our
              commitment to pushing the sport forward.
            </p>
          </section>

          <section className="bg-white shadow-lg rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-semibold text-black mb-6">
              Our Mission
            </h2>
            <p className="text-gray-700 mb-4">
              At Sunset Skate Club, our mission is to empower skaters of all
              levels to push their limits and express themselves through
              skateboarding. We're dedicated to crafting the highest quality
              skateboards and gear that enhance performance and style.
            </p>
            <p className="text-gray-700">
              We believe skateboarding is more than just a sport - it's a
              lifestyle, an art form, and a powerful tool for personal growth
              and community building. That's why we're committed to supporting
              skate culture and giving back to the communities that have
              supported us.
            </p>
          </section>

          <section className="bg-white shadow-lg rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-semibold text-black mb-6">
              Our Values
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li className="mb-2">
                Innovation: We're always looking for new ways to improve our
                products and the skating experience.
              </li>
              <li className="mb-2">
                Quality: We never compromise on the materials or craftsmanship
                of our boards.
              </li>
              <li className="mb-2">
                Sustainability: We're committed to eco-friendly practices in our
                production and operations.
              </li>
              <li className="mb-2">
                Community: We support and nurture the global skateboarding
                community.
              </li>
              <li>
                Inclusivity: We believe skateboarding is for everyone,
                regardless of age, gender, or background.
              </li>
            </ul>
          </section>

          <section className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-3xl font-semibold text-black mb-6">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-40 h-40 rounded-full mx-auto mb-4 object-cover transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
                    />
                  </a>
                  <h3 className="text-xl font-semibold text-black">
                    {member.name}
                  </h3>
                  <p className="text-gray-700">{member.role}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Company;
