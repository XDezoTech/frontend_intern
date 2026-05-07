import React from "react";
import { Link } from "react-router-dom";

const DestinationCard = ({
  imageUrl,
  title,
  description, 
  link,
  price, 
  duration, 
  region, 
}) => (
  <div className="group rounded-lg overflow-hidden bg-[#1a2e45] shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="relative overflow-hidden h-52">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      {price && (
        <span className="absolute bottom-3 right-3 bg-[#c96442] text-[#f5edd8] text-xs font-semibold px-3 py-1 rounded-full">
          From ${price}
        </span>
      )}
    </div>
    <div className="p-5">
      <p className="text-[#9bb0c5] text-xs uppercase tracking-widest mb-1">
        {region}
      </p>
      <h3 className="font-['Cormorant_Garamond'] text-[#f5edd8] text-xl font-semibold mb-2">
        {title}
      </h3>
      {description && (
        <p className="text-[#9bb0c5] text-sm mb-3 line-clamp-2">
          {description}
        </p>
      )}
      {duration && (
        <p className="text-[#9bb0c5] text-xs mb-4">{duration} days</p>
      )}
      <Link
        to={link}
        className="text-[#c96442] text-sm font-medium hover:underline"
      >
        View Tour →
      </Link>
    </div>
  </div>
);


const BlogCard = ({ imageUrl, title, description, link, category, date }) => (
  <article className="group rounded-lg overflow-hidden bg-[#1a2e45] shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="relative overflow-hidden h-44">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
    </div>
    <div className="p-5">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-[#c96442] text-xs uppercase tracking-widest font-medium">
          {category}
        </span>
        <span className="text-[#9bb0c5] text-xs">{date}</span>
      </div>
      <h3 className="font-['Cormorant_Garamond'] text-[#f5edd8] text-xl font-semibold mb-2">
        {title}
      </h3>
      {description && (
        <p className="text-[#9bb0c5] text-sm line-clamp-2 mb-4">
          {description}
        </p>
      )}
      <Link
        to={link}
        className="text-[#c96442] text-sm font-medium hover:underline"
      >
        Read More →
      </Link>
    </div>
  </article>
);


const TeamCard = ({ imageUrl, title, description, role }) => (
  <div className="rounded-lg overflow-hidden bg-[#1a2e45] text-center p-6 shadow-lg">
    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-[#c96442]">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
    <h3 className="font-['Cormorant_Garamond'] text-[#f5edd8] text-xl font-semibold">
      {title}
    </h3>
    <p className="text-[#c96442] text-xs uppercase tracking-widest mt-1 mb-3">
      {role}
    </p>
    {description && <p className="text-[#9bb0c5] text-sm">{description}</p>}
  </div>
);


const Card = ({ type = "destination", ...props }) => {
  if (type === "blog") return <BlogCard {...props} />;
  if (type === "team") return <TeamCard {...props} />;
  return <DestinationCard {...props} />;
};

export default Card;
export { DestinationCard, BlogCard, TeamCard };
