import React from 'react';
const About = () => {
    const imageUrl = "https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png";
  return (
<>
    <div className="max-w-[1240px] mx-auto">
    <div className="w-full relative">
  <img
    src={imageUrl}
    alt="Description of the image"
    className="w-full h-25 md:h-100 lg:h-100 xl:h-100"
  />
  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold sm:h-600 sm:flex">
     Eatify Food Center
  </div>
</div>
<div className="bg-white py-16 px-4 max-w-[1240px] mx-auto">
      <div className="max-w-screen-lg mx-auto text-left"> {/* Apply text-left class */}
        <h1 className="text-3xl font-bold mb-6">About Us - Eatify</h1>
        <p className="text-gray-600 mb-8">
          Welcome to Eatify! We are a passionate team of food enthusiasts dedicated to bringing you a delicious and convenient dining experience. Our mission is to provide you with a diverse range of culinary options, delivered right to your doorstep.
        </p>

        <h2 className="text-2xl font-bold mb-4">Our Story</h2>
        <p className="text-gray-600 mb-6">
          At Eatify, our journey began with a simple idea: making food ordering easier and more enjoyable. We realized that people today lead busy lives and might not always have the time to cook or dine out. That's where we come in. We wanted to create a platform where you can explore a variety of cuisines, discover new restaurants, and have your favorite meals delivered to your home or office.
        </p>

        <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
        <ul className="text-gray-600 list-disc list-inside mb-6">
          <li><strong>Wide Selection:</strong> We've partnered with a diverse range of local restaurants to bring you a vast selection of cuisines, from mouthwatering pizza to exotic international dishes.</li>
          <li><strong>Convenience:</strong> Ordering food online has never been easier. Simply browse our menu, select your favorite dishes, and check out with just a few clicks.</li>
          <li><strong>Delivery and Pickup:</strong> Choose between delivery and pickup options, depending on your preferences.</li>
          <li><strong>Customization:</strong> We understand that everyone has their own taste and dietary requirements. You can customize your orders to fit your preferences.</li>
          <li><strong>Special Offers:</strong> Keep an eye on our website for exclusive discounts and promotions to save money on your orders.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
        <p className="text-gray-600 mb-6">
          We are committed to providing you with a top-notch dining experience. Our platform is designed for your convenience, and we take pride in ensuring that your food arrives fresh, hot, and on time. Our team works closely with our restaurant partners to maintain the highest quality standards.
        </p>

        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-6">
          We value your feedback and are always striving to improve our service. If you have any questions, suggestions, or concerns, please don't hesitate to get in touch with us. You can reach our customer support team through our contact page, email, or phone.
        </p>

        <p className="text-gray-600">
          Thank you for choosing Eatify as your go-to platform for ordering food. We look forward to serving you and making your dining experience a delightful one.
        </p>
      </div>
      </div>
      <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center">
        <p className="text-2xl font-semibold">Created By Vijaya Katekhaye</p>
        <p className="text-sm my-2">© {new Date().getFullYear()} All rights reserved</p>
       
      </div>
    </footer>

    </div>
    </>
  )}
  export default About;