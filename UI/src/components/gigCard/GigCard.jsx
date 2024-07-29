import React from "react";
import "./GigCard.scss";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const GigCard = ({ item }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [item.userId],
    queryFn: () =>
      axios.get(`http://localhost:8800/api/users/${item.userId}`, {withCredentials:true}).then((res) => {
        return res.data;
      }),
  });

  return (
    <Link to={`/gig/${item._id}`} className="link">
      <div className="gigCard">
        <img src={item.cover || "/img/noavatar.jpg"} alt="" />
        <div className="info">
          {isLoading ? (
            "loading"
          ) : error ? (
            "Something went wrong!"
          ) : (
            <div className="user">  
              <img src={data.img || "/img/noavatar.jpg"} alt="" />
              <span>{data.username}</span>
            </div>
          )}
          {/* <p>{item.desc}</p> */}
          <p>{item.desc.length > 100 ? item.desc.slice(0, 100) + '...' : item.desc}</p>
          <div className="star">
            <img src="./img/star.png" alt="" />
            <span>
              {!isNaN(item.totalStars / item.starNumber) &&
                Math.round((item.totalStars / item.starNumber)*10)/10}
            </span>
            <span className="totalReviews">({item.starNumber})</span>
          </div>
        </div>
        {/* <hr /> */}
        <div className="detail">
          <div className="price">
            {/* <span>From</span> */}
            <h2>From ₹ {item.price}</h2>
          </div>
          <img src="./img/heart.png" alt="" />
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
