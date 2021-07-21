import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import notes from "../../data/notes";

const MyNotes = () => {


  const deleteHandler = (id) => {
    if(window.confirm("Are you sure?")){
      
    }
  }

  return (
    <div>
      <MainScreen title="Welcome Back Venkatesh...">
        <Link to="createnote">
          <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
            Create New Note
          </Button>
          {notes.map((note) => (
            <Card style={{ margine: 10 }}>
              <Card.Header style={{ display: "flex" }}>
                <span
                  style={{
                    color: "black",
                    textDecoration: "none",
                    flex: 1,
                    cursor: "pointer",
                    alignSelf: "center",
                    fontSize: 18,
                  }}
                >
                  {note.title}
                </span>
                <div>
                  <Button href={'/note/${note._id}'}>Edit</Button>
                  <Button variant="danger" className="mx-2" onClick={()=> deleteHandler(note._id)}>
                    Delete
                  </Button>
                </div>
              </Card.Header>
            </Card>
          ))}
        </Link>
      </MainScreen>
    </div>
  );
};

export default MyNotes;
