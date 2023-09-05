import { useQuery } from "@tanstack/react-query";
import React from "react";
import axios from "axios";
// import newRequest from "../../utils/newRequest";
import "./Review.scss";
<<<<<<< HEAD

const Review = ({ review }) => {
  // console.log(review.userId)
  // const { isLoading, error, data } = useQuery(
  //   {
  //     queryKey: [review.userId],
  //     queryFn: () =>
  //       axios.get(`http://localhost:8800/api/users/${review.userID}`,{ withCredentials: true }).then((res) => {
  //         return res.data;
  //       }),
  //   },
  // );

  return (
    <div className="review">
      {/* {isLoading ? (
        "loading"
      ) : error ? (
        "error"
      ) : ( */}
        <div className="user">
          {/* <img className="pp" src={data.img || "/img/noavatar.jpg"} alt="" /> */}
          <div className="info">
            {/* <span>{data.username}</span> */}
            <div className="country">
              {/* <span>{data.country}</span> */}
            </div>
          </div>
        </div>
      {/* )}  */}
=======
const Review = ({ review }) => {
  const { isLoading, error, data } = useQuery(
    {
      queryKey: [review.userId],
      queryFn: () =>
        axios.get(`http://localhost:8800/api/users/${review.userId}`).then((res) => {
          return res.data;
        }),
    },
  );


  return (
    <div className="review">
      {isLoading ? (
        "loading"
      ) : error ? (
        "error"
      ) : (
        <div className="user">
          <img className="pp" src={data.img || "/img/noavatar.jpg"} alt="" />
          <div className="info">
            <span>{data.username}</span>
            <div className="country">
              <span>{data.country}</span>
            </div>
          </div>
        </div>
      )}
>>>>>>> 04a9e558222b053d49b7c52796f925a7b3781261
      <div className="stars">
        {Array(review.star)
          .fill()
          .map((item, i) => (
            <img src="/img/star.png" alt="" key={i} />
          ))}
        <span>{review.star}</span>
      </div>
      <p>{review.desc}</p>
      <div className="helpful">
        <span>Helpful?</span>
        <img src="/img/like.png" alt="" />
        <span>Yes</span>
        <img src="/img/dislike.png" alt="" />
        <span>No</span>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Review;
=======
export default Review;
>>>>>>> 04a9e558222b053d49b7c52796f925a7b3781261
