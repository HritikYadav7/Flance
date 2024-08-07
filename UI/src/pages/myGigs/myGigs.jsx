  import React from "react";
  import { Link } from "react-router-dom";
  import "./MyGigs.scss";
  import getCurrentUser from "./../utils/getCurrentUser";
  import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
  import axios from "axios";

  function MyGigs() {
    const currentUser = getCurrentUser();

    const queryClient = useQueryClient();

    const { isLoading, error, data } = useQuery({
      queryKey: ["myGigs"],
      queryFn: () =>
        axios.get(`http://localhost:8800/api/gigs?userId=${currentUser._id}`, {withCredentials:true}).then((res) => {
          return res.data;
        }),
    });
    // console.log(currentUser._id);
    // console.log(data);
    const mutation = useMutation({
      mutationFn: (id) => {
        return axios.delete(`http://localhost:8800/api/gigs/${id}`, {withCredentials:true});
      },
      onSuccess: () => {
        queryClient.invalidateQueries(["myGigs"]);
      },
    });

    const handleDelete = (id) => {
      mutation.mutate(id);
    };

    return (
      <div className="myGigs">
        {isLoading ? (
          "loading"
        ) : error ? (
          "error"
        ) : (
          <div className="container">
            <div className="title">
              <h1>Gigs</h1>
              {currentUser.isSeller && (
                <Link to="/add">
                  <button>Add New Gig</button>
                </Link>
              )}
            </div>
            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Sales</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((gig) => (
                  <tr key={gig._id}>
                    <td>
                      <img className="image" src={gig.cover} alt="" />
                    </td>
                    <td>{gig.title}</td>
                    <td>{gig.price}</td>
                    <td>{gig.sales}</td>
                    <td>
                      <img
                        className="delete"
                        src="./img/delete.png"
                        alt=""
                        onClick={() => handleDelete(gig._id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        )}
      </div>
    );
  }

  export default MyGigs;
