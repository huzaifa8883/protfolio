import React from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import { faArrowRight,faTrophy, faUsers, faSmile, faDownload, faGift } from '@fortawesome/free-solid-svg-icons'; 
import { FaBullhorn, FaMobileAlt, FaLaptopCode, FaCube, FaGamepad, FaDigitalOcean,FaArrowUp, FaArrowRight } from "react-icons/fa";


// Blog details with title, content, and an image for each blog
const blogDetails = {
    "why-choose-us": {
      title: "Why Choose Our Software House?",
      content: `
        At **SiteDesk**, we are not just a software development company; we are a dedicated partner in your technology journey. With years of experience, a team of highly skilled professionals, and a passion for innovation, we’ve built a reputation for delivering exceptional software solutions that drive success.
  
        Here’s why **SiteDesk** is the best choice for your software development needs:
  
        ### 1. **Expertise and Experience**
        Our team consists of experts in web development, mobile app development, blockchain solutions, and AI-powered applications. We have successfully delivered projects for clients across industries, including healthcare, education, finance, and retail, always providing reliable, scalable, and secure solutions.
  
        ### 2. **Tailored Solutions**
        At **SiteDesk**, we recognize that every business has unique needs. That’s why we take a personalized approach, ensuring that each project is aligned with your goals. Whether it’s a simple website, a complex enterprise solution, or an innovative mobile app, we tailor our approach to deliver results that matter to you.
  
        ### 3. **Quality and Innovation**
        We are committed to quality and innovation. Our development process adheres to the best practices and industry standards to deliver solutions that are not only functional but also future-proof. We use the latest technologies and frameworks to keep you ahead of the competition.
  
        ### 4. **End-to-End Services**
        From conceptualization and design to development, deployment, and continuous support, **SiteDesk** offers complete end-to-end software development services. We work closely with you throughout the entire process, ensuring your vision comes to life with every step.
  
        ### 5. **Transparent Communication**
        Clear communication is at the heart of our services. We keep you involved at every stage of the project and make sure you understand all decisions and progress. With **SiteDesk**, you’ll never be left in the dark.
  
        ### 6. **Client-Centric Approach**
        Your satisfaction is our priority. We are dedicated to delivering solutions on time and within budget, without compromising on quality. Our goal is to build long-term relationships with our clients, providing ongoing support even after the project is completed.
  
        ### 7. **Proven Track Record**
        Our portfolio speaks for itself. We have helped businesses of all sizes—startups, SMEs, and large enterprises—achieve their goals through our custom software solutions. **SiteDesk** has been the go-to software development partner for those looking to excel in the digital world.
  
        ### 8. **Competitive Pricing**
        At **SiteDesk**, we believe in offering high-quality solutions at competitive prices. We ensure that you receive maximum value for your investment, with cost-effective options that don’t sacrifice quality.
  
        ### Conclusion
        Choosing **SiteDesk** means choosing a partner who is committed to delivering top-notch software solutions designed to propel your business forward. Let us help you take your business to new heights with innovative technology.
  
      `,
      image: "https://miro.medium.com/v2/resize:fit:1400/1*N4xxcOvgBdUAi2IKg8xgBA.png", // Replace with actual image URL
    },
    "our-journey": {
      title: "Our Journey in the Tech Industry",
      content: `
        **SiteDesk** began as a small team of passionate developers with a dream to revolutionize the software development industry. Over the years, we have grown into a leading software house, known for our expertise, creativity, and commitment to excellence. From humble beginnings to delivering cutting-edge solutions for global businesses, our journey has been one of growth, learning, and continuous innovation.
  
        We’ve worked on a variety of projects that range from simple websites to complex enterprise systems, always striving to create solutions that provide real value. Our journey is far from over, and we continue to innovate and grow, always looking for new ways to help our clients succeed in a rapidly changing technological landscape.
  
      `,
      image: "https://www.hdwallpapers.in/download/abstract_technology_background_photoshop_hd-1920x1080.jpg", // Replace with actual image URL
    },
    "web-development-trends-2024": {
      title: "Top Web Development Trends in 2024",
      content: `
        As we head into 2024, the web development landscape is evolving rapidly. New technologies, frameworks, and practices are shaping the future of web development. Here are some key trends that are expected to dominate the industry this year:
  
        ### 1. **AI and Automation**
        Artificial intelligence is being integrated into web development to improve user experiences, automate tasks, and provide data-driven insights. From chatbots to predictive analytics, AI is transforming how websites interact with users.
  
        ### 2. **Progressive Web Apps (PWAs)**
        PWAs offer the best of both worlds: the functionality of a native app and the reach of the web. They provide offline access, push notifications, and faster load times, making them a top choice for businesses in 2024.
  
        ### 3. **Responsive Design and Mobile-First Approach**
        With mobile traffic dominating, responsive design is no longer optional. A mobile-first approach ensures that websites are optimized for smaller screens and perform well on any device.
  
        ### 4. **Motion UI**
        Users are expecting more interactive and engaging websites. Motion UI allows developers to add animations and transitions that make the user experience smoother and more engaging.
  
        ### 5. **Serverless Architecture**
        Serverless computing allows developers to focus on building applications without worrying about the underlying infrastructure. This trend is gaining momentum due to its scalability and cost-effectiveness.
  
      `,
      image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/is_web_development_good_career.jpg", // Replace with actual image URL
    },
    "why-mobile-apps": {
      title: "Mobile Apps: Why You Need Them",
      content: `
        In today's digital world, mobile apps are essential for businesses that want to engage with their customers effectively. Whether you're a small business or a large enterprise, a mobile app can help you enhance customer experiences, increase brand loyalty, and drive business growth.
  
        ### 1. **Enhanced Customer Engagement**
        Mobile apps allow businesses to stay connected with their customers on a personal level. With features like push notifications, businesses can send timely updates and offers, keeping users engaged and returning to the app.
  
        ### 2. **Improved Customer Experience**
        A well-designed mobile app offers a smoother and faster user experience than websites. Features like offline access, personalized content, and quick navigation make mobile apps an ideal platform for delivering exceptional user experiences.
  
        ### 3. **Brand Recognition**
        Mobile apps increase your brand's visibility by appearing on your customers' phones, keeping your business top of mind. Apps also help in building customer loyalty through rewards programs, frequent updates, and customer support.
  
        ### 4. **Increased Revenue**
        A mobile app can drive direct sales through integrated payment systems and in-app purchases. Furthermore, apps can serve as an effective channel for promoting services, new products, or special offers.
  
      `,
      image: "https://flatirons.com/static/3245c26fe6fda26fb7ad76aa7c2d766e/d7e39/The-Different-Tupes-of-Mobile-Apps_-Native-Hybrid-PWA-1.webp", // Replace with actual image URL
    },
    "blockchain-solutions": {
      title: "Blockchain Solutions for the Future",
      content: `
        Blockchain technology is revolutionizing industries by providing a secure, transparent, and decentralized way to store and manage data. At **SiteDesk**, we leverage blockchain to offer innovative solutions that bring value to your business.
  
        ### 1. **Enhanced Security**
        Blockchain ensures that data is securely stored and can’t be altered or tampered with. This makes it ideal for applications in sectors like finance, healthcare, and supply chain management, where data integrity is paramount.
  
        ### 2. **Decentralization**
        By removing the need for a central authority, blockchain reduces the risks associated with data breaches and fraud. It allows businesses to create decentralized applications (dApps) that provide more control to users.
  
        ### 3. **Smart Contracts**
        Blockchain’s smart contract feature allows businesses to automate processes without intermediaries. This improves efficiency, reduces costs, and ensures that transactions are executed according to predefined conditions.
  
        ### 4. **Transparent Transactions**
        Blockchain provides an immutable ledger that enhances transparency in transactions. Whether it's tracking the movement of goods or verifying financial transactions, blockchain can provide a transparent and auditable record.
  
      `,
      image: "https://media.licdn.com/dms/image/v2/D4D12AQHauhS4eygqBQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1698977698810?e=2147483647&v=beta&t=saGhFJnDiXch3H1soTOrelgSTxWb-cfBCasS1tOxJUg", // Replace with actual image URL
    },
  };
  

function BlogDetailPage() {
  const { slug } = useParams();
  const blog = blogDetails[slug];

  if (!blog) {
    return <div className="text-white">Blog not found!</div>;
  }

  return (
    <>
           <div className="lg:h-[350px] h-[200px] mt-16  w-full bg-[#212529] flex flex-col md:flex-row items-center justify-center text-white font-bold">
  {/* Left section with text (full screen width) */}
  <div className="flex flex-col items-center justify-center text-center md:text-left w-full md:w-[50%]">
    {/* Home and About Us with Arrow */}
    <div className="flex items-center text-gray-300 font-raleway space-x-4 text-sm md:text-lg">
      <p>Home</p>
      <FontAwesomeIcon 
        icon={faArrowRight} 
        className="text-white text-xl" 
      />
      <p>{blog.title}</p>
    </div>
    
    {/* Larger About Us text below */}
    <p className="mt-6 text-2xl md:text-3xl font-bold font-sans">{blog.title}</p>
  </div>

  {/* Right section with image (visible on lg and above) */}
  <div className="hidden lg:block lg:w-[50%] h-full relative">
    <img 
      src="https://reves-wp.b-cdn.net/wp-content/uploads/2022/04/inner-banner-bg.png" 
      alt="About Us" 
      className="w-full h-full object-cover absolute right-0" 
    />
  </div>
</div>
    <div className="min-h-screen bg-gray-900 text-white py-28 px-6 font-raleway">
 
    <div className="max-w-3xl mx-auto">
      {/* Blog Image */}
      <div className="relative overflow-hidden rounded-lg border-4 border-indigo-600 shadow-2xl mb-12">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      </div>
  
      {/* Blog Title */}
      <h1 className="md:text-5xl text-3xl font-extrabold text-center mb-8 text-gray-100">
        <span className="relative inline-block">
          {blog.title}
          {/* <div className="absolute bottom-0 top-24 left-0 w-full h-[3px] bg-indigo-500"></div> */}
        </span>
      </h1>
  
      {/* Blog Content */}
      <div className="bg-gray-800 rounded-xl p-10 shadow-lg border border-gray-700 space-y-6">
        {/* Splitting content into paragraphs */}
        {blog.content.split('\n').map((paragraph, index) => (
          <p
            key={index}
            className="text-lg leading-relaxed text-gray-300 text-justify"
          >
            {paragraph}
          </p>
        ))}
  
        {/* Adding an underline to key points within content */}
        <p className="text-lg leading-relaxed text-gray-300 text-justify">
          <span className="font-semibold text-indigo-400 underline decoration-dotted">
            Innovative Solutions
          </span>{' '}
          are what drive businesses forward. Stay ahead of the curve with cutting-edge technologies.
        </p>
      </div>
  
      {/* Back Button */}
      <div className="mt-10">
        <a
          href="/blogs"
          className="inline-block text-indigo-500 hover:text-indigo-400 font-bold text-lg transition-colors duration-300"
        >
          &larr; Back to Blogs
        </a>
      </div>
    </div>
  </div>
  
  </>
  );
}

export default BlogDetailPage;
