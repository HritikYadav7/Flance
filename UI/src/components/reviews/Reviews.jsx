import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import axios from "axios";
// import newRequest from "../../utils/newRequest";
import Review from "../review/Review";
import "./Reviews.scss";
const Reviews = ({ gigId }) => {

  const queryClient = useQueryClient()
  const { isLoading, error, data } = useQuery({
    queryKey: ["reviews"],
    queryFn: () =>
<<<<<<< HEAD
      axios.get(`http://localhost:8800/api/reviews/${gigId}`,{ withCredentials: true }).then((res) => {
=======
      axios.get(`http://localhost:8800/api/reviews/${gigId}`).then((res) => {
>>>>>>> 04a9e558222b053d49b7c52796f925a7b3781261
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (review) => {
<<<<<<< HEAD
      return axios.post("http://localhost:8800/api/reviews",{ withCredentials: true }, review);
=======
      return axios.post("http://localhost:8800/api/reviews", review);
>>>>>>> 04a9e558222b053d49b7c52796f925a7b3781261
    },
    onSuccess:()=>{
      queryClient.invalidateQueries(["reviews"])
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const desc = e.target[0].value;
    const star = e.target[1].value;
<<<<<<< HEAD
    mutation.mutate({ gigId, desc, star});
=======
    mutation.mutate({ gigId, desc, star });
>>>>>>> 04a9e558222b053d49b7c52796f925a7b3781261
  };

  return (
    <div className="reviews">
      <h2>Reviews</h2>
      {isLoading
        ? "loading"
        : error
        ? "Something went wrong!"
        : data.map((review) => <Review key={review._id} review={review} />)}
      <div className="add">
        <h3>Add a review</h3>
        <form action="" className="addForm" onSubmit={handleSubmit}>
          <input type="text" placeholder="write your opinion" />
          <select name="" id="">
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
