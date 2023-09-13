import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Container, Typography, Button,  Paper } from "@mui/material";

export default function Comment() {
  const [listData, setListData] = useState<any>([]);

  const navigate = useNavigate();

  const deleteComment = (id: any) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/comments${id}`)
      .then(() => {
        console.log("Comment Deleted Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        setListData([...res.data]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>

      {/* <div>
        <h1>Comment Project</h1>
        <button
          onClick={() => {
            navigate("/add");
          }}
        >
          Add
        </button>
        {listData &&
          Array.isArray(listData) &&
          listData.length > 0 &&
          listData.map((x: any, i: any) => (
            <div className="p-2 m-2 border border-dark rounded" key={i}>
              <h2>{x.title}</h2>
              <p>{x.body}</p>
              <p>{x.userId}</p>
              <IconButton
                onClick={() => deleteComment(x.id)}
                color="error"
                aria-label="delete"
              >
                <DeleteIcon />
              </IconButton>
              <IconButton
                onClick={() => {
                  navigate(`/add/${x.id}`);
                }}
                color="primary"
                aria-label="delete"
              >
                <EditIcon />
              </IconButton>
            </div>
          ))}
      </div> */}


<Container maxWidth="md">
      <Typography variant="h4" sx={{ color:"#3d5afe",font:"popin",padding:"1.4%"}} >
        Comment Project
      </Typography>
      <br/>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          navigate("/addcomment");
        }}
      >
        Add Comment
      </Button>
      {listData &&
        Array.isArray(listData) &&
        listData.length > 0 &&
        listData.map((x: any, i: any) => (
          <Paper elevation={1} 
           style={{marginBottom:5,padding:"3%"}}
          
          className="p-6 m-7" key={i}>
            <Typography variant="h5" >
              Name:{x.name}
            </Typography>
            <br/>
            <Typography sx={{color:"#3d5afe"}} variant="h6">
              Email:{x.email}
            </Typography>
            <Typography variant="body1" >
              {x.body}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              User ID: {x.id}
            </Typography>
            <IconButton
              onClick={() => deleteComment(x.id)}
              color="error"
              aria-label="delete"
            >
              <DeleteIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                navigate(`/addcomment/${x.id}`);
              }}
              color="info"
              aria-label="edit"
            >
              <EditIcon />
            </IconButton>
          </Paper>
        ))}
    </Container>
    </>
  );
}