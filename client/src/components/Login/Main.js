import React from "react";

export const Main = () => {
  return (
    <>
      <div className="bg-gray-100">
        <nav class="bg-white shadow-lg">
          <div class="max-w-7xl mx-auto px-4">
            <div class="flex justify-between items-center py-4">
              <div class="text-2xl font-bold text-gray-800">
                <a href="#">AIDS Care Hospital</a>
              </div>
              <div class="hidden md:flex space-x-4">
                <a href="#" class="text-gray-800 hover:text-red-600">
                  Home
                </a>
                <a href="#services" class="text-gray-800 hover:text-red-600">
                  Services
                </a>
                <a href="#about" class="text-gray-800 hover:text-red-600">
                  About
                </a>
                <a href="#contact" class="text-gray-800 hover:text-red-600">
                  Contact
                </a>
                <a href="/login" class="text-gray-800 hover:text-red-600">
                  Login
                </a>
              </div>
              <div class="md:hidden">
                <button class="text-gray-800 focus:outline-none">
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>

        <section class="relative bg-white h-screen flex items-center justify-center">
          <img
            src="https://png.pngtree.com/background/20230403/original/pngtree-ward-green-illustration-background-picture-image_2270017.jpg"
            alt="Hospital"
            class="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <div class="relative z-10 text-center">
            <h1 class="text-4xl md:text-6xl font-bold text-gray-900">
              Welcome to AIDS Care Hospital
            </h1>
            <p class="mt-4 text-lg md:text-2xl text-gray-700">
              Compassionate Care for People Living with HIV/AIDS
            </p>
            <a
              href="#services"
              class="mt-8 inline-block bg-red-600 text-white py-2 px-6 rounded-full hover:bg-red-700"
            >
              Explore Services
            </a>
          </div>
        </section>

        <section id="services" class="py-16 bg-gray-100">
          <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-12">
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
                Our Services
              </h2>
              <p class="mt-4 text-gray-600">
                Comprehensive care and support for individuals living with
                HIV/AIDS.
              </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="bg-white p-6 rounded-lg shadow-lg">
                <img
                  src="https://cdni.iconscout.com/illustration/premium/thumb/scientist-working-in-laboratory-4808836-3998190.png?f=webp"
                  alt="Service 1"
                  class="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 class="text-xl font-bold text-gray-900">
                  HIV Testing and Counseling
                </h3>
                <p class="mt-2 text-gray-600">
                  Confidential and compassionate HIV testing and counseling
                  services.
                </p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-lg">
                <img
                  src="https://png.pngtree.com/png-vector/20221027/ourmid/pngtree-world-occupational-therapy-day-celebration-hand-drawn-cartoon-flat-illustration-with-png-image_6389487.png"
                  alt="Service 2"
                  class="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 class="text-xl font-bold text-gray-900">
                  Antiretroviral Therapy
                </h3>
                <p class="mt-2 text-gray-600">
                  Access to the latest antiretroviral treatments to manage HIV.
                </p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-lg">
                <img
                  src="https://cdni.iconscout.com/illustration/premium/thumb/peer-support-group-or-therapy-class-with-men-and-women-sitting-round-listening-to-each-others-stories-and-life-problems-2880355-2392698.png"
                  alt="Service 3"
                  class="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 class="text-xl font-bold text-gray-900">Support Groups</h3>
                <p class="mt-2 text-gray-600">
                  Support groups for people living with HIV to share experiences
                  and gain strength.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" class="py-16 bg-white">
          <div class="max-w-7xl mx-auto px-4">
            <div class="flex flex-col md:flex-row items-center">
              <div class="md:w-1/2">
                <img
                  src="https://online.visual-paradigm.com/repository/images/6748adf2-f238-4d5a-8fe4-6939312c4408/healthcare-illustration-design/hospital-illustration.png"
                  alt="About Us"
                  class="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div class="md:w-1/2 md:pl-12 mt-8 md:mt-0">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
                  About Us
                </h2>
                <p class="mt-4 text-gray-600">
                  AIDS Care Hospital is an online resource offering up-to-date
                  HIV/AIDS information. We provide educational materials on HIV
                  prevention, treatment, side effects, pregnancy, screening,
                  testing, and research. Our mission is to improve the quality
                  of life for individuals living with HIV/AIDS through
                  comprehensive care, counseling, and community support.
                </p>
                <a
                  href="#contact"
                  class="mt-8 inline-block bg-red-600 text-white py-2 px-6 rounded-full hover:bg-red-700"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" class="py-16 bg-gray-100">
          <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-12">
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
                Testimonials
              </h2>
              <p class="mt-4 text-gray-600">
                Hear from our patients about their experiences with us.
              </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="bg-white p-6 rounded-lg shadow-lg">
                <p class="mt-2 text-gray-600">
                  "The staff at AIDS Care Hospital are incredibly supportive and
                  understanding. They have made a significant difference in my
                  life."
                </p>
                <p class="mt-4 text-gray-900 font-bold">- Patient A</p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-lg">
                <p class="mt-2 text-gray-600">
                  "Thanks to the comprehensive care and counseling I received, I
                  feel empowered to manage my health effectively."
                </p>
                <p class="mt-4 text-gray-900 font-bold">- Patient B</p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-lg">
                <p class="mt-2 text-gray-600">
                  "The support groups have been a lifeline for me, providing a
                  safe space to share and learn from others."
                </p>
                <p class="mt-4 text-gray-900 font-bold">- Patient C</p>
              </div>
            </div>
          </div>
        </section>

        <section id="news-events" class="py-16 bg-white">
          <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-12">
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
                News & Events
              </h2>
              <p class="mt-4 text-gray-600">
                Stay updated with the latest news and events from our hospital.
              </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-xl">
                <h3 class="text-xl font-bold text-gray-900">Event 1</h3>
                <p class="mt-2 text-gray-600">
                  Join us for our upcoming health seminar on HIV/AIDS awareness
                  and prevention.
                </p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-xl">
                <h3 class="text-xl font-bold text-gray-900">Event 2</h3>
                <p class="mt-2 text-gray-600">
                  Participate in our annual AIDS walk to support the fight
                  against HIV/AIDS.
                </p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-xl">
                <h3 class="text-xl font-bold text-gray-900">News</h3>
                <p class="mt-2 text-gray-600">
                  Read about the latest advancements in HIV/AIDS research and
                  treatment options.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" class="py-16 bg-gray-100">
          <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-12">
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
                Contact Us
              </h2>
              <p class="mt-4 text-gray-600">
                We are here to help. Get in touch with us for any inquiries or
                appointments.
              </p>
            </div>
            <div class="flex flex-col md:flex-row md:space-x-8">
              <div class="md:w-1/2">
                <form class="bg-white p-6 rounded-lg shadow-lg">
                  <div class="mb-4">
                    <label class="block text-gray-700">Name</label>
                    <input
                      type="text"
                      class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </div>
                  <div class="mb-4">
                    <label class="block text-gray-700">Email</label>
                    <input
                      type="email"
                      class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </div>
                  <div class="mb-4">
                    <label class="block text-gray-700">Message</label>
                    <textarea class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"></textarea>
                  </div>
                  <button
                    type="submit"
                    class="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              <div class="md:w-1/2 mt-8 md:mt-0">
                <img
                  src="https://cdni.iconscout.com/illustration/premium/thumb/contact-us-3483599-2912016.png"
                  alt="Contact Us"
                  class="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <footer class="bg-white py-6">
          <div class="max-w-7xl mx-auto px-4 text-center">
            <p class="text-gray-700">
              &copy; 2024 AIDS Care Hospital. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};
