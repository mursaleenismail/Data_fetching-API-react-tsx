import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Container, TextField, Typography } from "@mui/material";

export default function AddComment() {
  const [model, setModel] = useState<any>({});
  const navigate = useNavigate();
  const commentApi = "https://jsonplaceholder.typicode.com/comments";
  const params = useParams();

  const getCommentById = () => {
    axios
      .get(`${commentApi}/${params.id}`)
      .then((res) => {
        console.log(res);
        setModel({ ...res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleButtonClick = () => {
    if (params.id) {
      updateComment();
    } else {
      submitComment();
    }
   
    navigate("/comment-page");
  };

  const updateComment = () => {
    axios
      .put(`${commentApi}/${params.id}`, model)
      .then((res) => {
        console.log("Comment Updated Successfully ==>", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const submitComment = () => {
    model.userId = 11;
    axios
    .put(`${commentApi}/${params.id}`, model)
      .then((res) => {
        console.log("Comment Added Successfully ==>", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (params.id) {
      getCommentById();
    }
  }, []);

  return (
    <>
      {/* <div>
        <p>Add Project</p>
        <div className="p-2">
          <div>
            <input
              value={model.title}
              onChange={(e) => setModel({ ...model, title: e.target.value })}
              type="text"
              placeholder="Title"
              name=""
              id=""
            />
          </div>
          <div>
            <textarea
              value={model.body}
              onChange={(e) => setModel({ ...model, body: e.target.value })}
              placeholder="body"
            ></textarea>
          </div>
          <div>
            {params.id ? (
              <button onClick={updateComment}>Update</button>
            ) : (
              <button onClick={submitComment}>Submit</button>
            )}
          </div>
        </div>
      </div> */}

<Container maxWidth="sm"  >
      <Typography variant="h4" gutterBottom>
        {params.id ? "Edit Comment" : "Add Comment"}
      </Typography>
      <form>
        <TextField
          fullWidth
          label="Title"
          variant="outlined"
          value={model.name || ""}
          onChange={(e) => setModel({ ...model, title: e.target.value })}
        />

        <br/>
        <br/>


        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          value={model.email || ""}
          onChange={(e) => setModel({ ...model, title: e.target.value })}
        />

        <br/>
        <br/>


        
        
        <TextField
          fullWidth
          label="Body"
          multiline
          rows={4}
          variant="outlined"
          value={model.body || ""}
          onChange={(e) => setModel({ ...model, body: e.target.value })}
        />
        <Button
          variant="contained"
          color="primary"
        //   onClick={params.id ? updateComment : submitComment}
        onClick={handleButtonClick}>
          {params.id ? "Update" : "Submit"}
        </Button>
      </form>
    </Container>


    </>
  );
}